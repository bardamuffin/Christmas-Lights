import React from 'react';
import { View, StyleSheet, } from 'react-native';
import Bulb from './Bulb';

export default class Rope extends React.Component {
    constructor(props) {
        super(props);
        this.state = { arr: new Array(7), }
         

    }

    populateArray = () => {
        for ( let i = 0; i <= 7; i++) {
            this.state.arr.push(<Bulb/>)
        }
        return this.state.arr.map((data, i ) => {
            return (
                <View style={{...this.props.style}} key={i}>{data}</View>
            )
        })
    }
    render() {
        return (
            <View>{this.populateArray()}</View>
        );
    }
}