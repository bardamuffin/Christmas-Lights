import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Rope from '../components/Rope';

export default class LightScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: [],
            play: this.props.play,
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.rowNbr != this.props.rowNbr) {
            this.setState({rows: this.ropeStack(this.props.rowNbr)})
        }
        if(this.props.play != this.state.play) {
            this.setState({play: this.props.play, rows: this.ropeStack(this.props.rowNbr)})
        }
    }
    componentWillMount() {
       this.setState({rows: this.ropeStack(this.props.rowNbr)})
    }

    ropeStack = val => {
        let arr = []
        for (let i = 1; i <= this.props.rowNbr; i++) {
            arr.push(
                <Rope key={i} 
                      style={styles.container} 
                      rowNbr={this.props.rowNbr} 
                      play={this.props.play}
                />)
        }
        return arr;

    }
    render() {
        console.log("       RENDERING: LightScreen          ")
        return (
            <View style={[styles.container, ]}>
                {this.state.rows.map((item, index) => { return (item)})}
            </View>
        );
    }
}
                

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        flexDirection: "column", 
        paddingTop: 50, 
        padding: 20, 
        justifyContent: "space-between", 
        backgroundColor: "black"
    },
});
