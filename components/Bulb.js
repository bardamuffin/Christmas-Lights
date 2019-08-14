import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Light from './Light';

export default class Bulb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0.7,
            order: this.props.ascendant,
            id: this.props.id,
            backgroundColor: this.props.colorCircle,
        }
        this.nIntervId = null;
    }
    
    componentDidMount(prevState, nextState) {
        //console.log("did Mount");
        if (this.props.play) { 
            //console.log("play");
            this.playButton() 
        } else { 
            //console.log("STOP"); 
            this.stopButton() 
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.play !== this.props.play ) {
            if(this.props.play) {
                this.playButton()
            } else {
                this.stopButton()
            }
        }
    }
    //Start the lights
    playButton = () =>  {
        //console.log("PLAY")
        this.nIntervId = setInterval(this.flashLight, 100)
    }
       
    //Stop the lights
    stopButton = () => {
        clearInterval(this.nIntervId);
    }
    
    flashLight = () => {
        if (this.state.opacity <= 0.5 || this.state.opacity >= 0.9) { this.setState({order: !this.state.order})}
        if ( this.state.order) {
            this.setState({
                opacity: this.state.opacity + 0.1
            })
        } else {
            this.setState({
                opacity: this.state.opacity - 0.1
            })
        }

        }

    render() {
        return (
            <Light style={{...this.state}}/>
        );
    }
}