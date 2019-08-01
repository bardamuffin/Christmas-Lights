import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Light from './Light';
//import console = require('console');

export default class Bulb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0.1,
            order: true
        }
            

           
        let nIntervId = setInterval(this.flashLight, 100);
    }
       
    flashLight = () => {
        if (this.state.opacity <= 0 || this.state.opacity >= 2.) { this.setState({order: !this.state.order})}
        if ( this.state.order) {
            console.log("flash: " + this.state.opacity)
            this.setState({
                opacity: this.state.opacity + 0.1
            })
        } else {
            console.log("flash: " + this.state.opacity)
            this.setState({
                opacity: this.state.opacity - 0.1
            })
        }

        }
                   

    //Start a timer
    startTimer = () => {

    }
    //Stop the timer
    stopTimer = () => {

    }
    render() {
        return (
            <Light style={{...this.props.style, ...this.state}}/>
        );
    }
}