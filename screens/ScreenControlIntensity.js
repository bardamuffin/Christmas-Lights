import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Input } from 'react-native-elements';

//Component to manage the range of bulb's opacity
export default class ControlIntensity extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    
                </View>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "red", }
})