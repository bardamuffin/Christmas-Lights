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
                <Rope style={styles.container}/>
            </View>
        );
    }
}
                

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: "row", paddingTop: 50, padding: 20, justifyContent: "space-between", backgroundColor: "black"},
});


/*
<Bulb style={{backgroundColor: "blue", width: 90, height: 90}}/>
                <Bulb style={{backgroundColor: "red"}}/>
                <Bulb style={{backgroundColor: "green"}}/>
                <Bulb style={{backgroundColor: "yellow"}}/>
                <Bulb style={{backgroundColor: "aqua"}}/>
                <Bulb style={{backgroundColor: "gainsboro"}}/>
                <Bulb style={{backgroundColor: "fuchsia"}}/>
*/                