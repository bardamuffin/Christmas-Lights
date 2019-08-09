import React from 'react';
import { View } from 'react-native';
import Bulb from './Bulb';
let colors = ["crimson", "darkorange", "yellow", "springgreen", "darkturquoise", "darkblue", "blueviolet", "red"]

export default class Rope extends React.Component {
    constructor(props) {
        super(props);
        //TODO: error, the initial array are not modified by populate array (obvs because it just does .push())
        this.state = { arr: [] }
    }
    
    //return true if val modulo 2 = 0
    isOdd = val => {
        return val % 2
    }
    // If the prop changed, re create the bulbs 
    componentDidUpdate(prevProps) {
        if (prevProps.play !== this.props.play) {
            this.populateArray()
        }
    }
    //Create Bulbs at initialization
    componentWillMount() {
        this.populateArray()
    }

    populateArray = () => {
        console.log("populating")
        let list= [];
        for (let i = 0; i <= 7; i++) {
            list.push(0)
        }

        list = list.map((item, index) => {
           return (
            item =
            <View key ={index}><Bulb 
                id={index} 
                ascendant={this.isOdd(index)} 
                colorCircle={colors[index]} 
                play={this.props.play} 
                />
            </View>
           )
       })

       this.setState({
           arr: list
       })
    }
    render() {
        console.log("       RENDERING ROPE          ")
        return (
            <View style={{...this.props.style}}>
            {this.state.arr.map((item, index) => { return (item)} )}</View>
        );
    }
}