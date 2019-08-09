import React from 'react';
import { View } from 'react-native';
import Bulb from './Bulb';
let colors = ["crimson", "darkorange", "yellow", "springgreen", "darkturquoise", "darkblue", "blueviolet", "red"]

export default class Rope extends React.Component {
    constructor(props) {
        super(props);
        //TODO: error, the initial array are not modified by populate array (obvs because it just does .push())
        this.state = { arr: new Array(7), }
    }
    
    //return true if val modulo 2 = 0
    isOdd = val => {
        return val % 2
    }
    populateArray = () => {
        for ( let i = 0; i <= 7; i++) {
            //set ascendant if I is pair
            this.state.arr.push(<Bulb id={i} ascendant={this.isOdd(i)} colorCircle={colors[i]} />)
        }
        return this.state.arr.map((data, i ) => {
            return (
                <View key={i}>{data}</View>
            )
        })
    }
    render() {
        return (
            <View style={{...this.props.style}}>{this.populateArray()}</View>
        );
    }
}