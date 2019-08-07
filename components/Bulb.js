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
            backgroundColor: this.props.colorCircle
        }
            

           
        let nIntervId = setInterval(this.flashLight, 100);
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