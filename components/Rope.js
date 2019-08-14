import React from 'react';
import { View } from 'react-native';
import Bulb from './Bulb';
let colors = ["crimson", "darkorange", "yellow", "springgreen", "darkturquoise", "darkblue", "blueviolet", "red"]

export default class Rope extends React.Component {
    constructor(props) {
        super(props);
        this.state = { arr: []}
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
        let list= [];
        for (let i = 0; i <= 7; i++) {
            list.push(0)
        }
        //idea: maybe map around an array of container then map the views
        list = list.map((item, index) => {
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
        console.log("       RENDERING: Rope          ")
        return (
            <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
            {this.state.arr.map((item, index) => { return (item)} )}</View>
        );
    }
}