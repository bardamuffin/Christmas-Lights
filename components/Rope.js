import React from 'react';
import { View } from 'react-native';
import Bulb from './Bulb';
let colors = ["crimson", "darkorange", "yellow", "springgreen", "darkturquoise", "darkblue", "blueviolet", "red"]

export default class Rope extends React.Component {
    constructor(props) {
        super(props);
        //TODO: error, the initial array are not modified by populate array (obvs because it just does .push())
        this.state = { arr: [], rowNbr: this.props.rowNbr }
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
        console.log("Will mount:, ", this.state.rowNbr * 7)
        this.populateArray(this.props.rowNbr)
    }

    populateArray = () => {
        console.log("populating")
        let list= [];
        for (let i = 0; i <= 7; i++) {
            list.push(0)
        }
        //idea: maybe map around an array of container then map the views
        list = list.map((item, index) => {
            console.log("test")
            return (
            item =
            <View key ={index}><Bulb 
                id={index} 
                ascendant={this.isOdd(index)} 
                //Error when > 7 out of range of the colorcircle array
                colorCircle={colors[index]} 
                //colorCircle={"red"}
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