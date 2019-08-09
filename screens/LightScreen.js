import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Light from '../components/Light'
import Bulb from '../components/Bulb';
import Rope from '../components/Rope';

export default class LightScreen extends React.Component {
    //Add main timer

    render() {
        return (
            <View style={styles.container}>
                <Rope style={styles.container} play={this.props.play}/>
            </View>
        );
    }
}
                

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        flexDirection: "row", 
        paddingTop: 50, 
        padding: 20, 
        justifyContent: "space-between", 
        backgroundColor: "black"
    },
});
