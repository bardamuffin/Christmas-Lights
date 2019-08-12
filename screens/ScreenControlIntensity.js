import React from 'react';
import { StyleSheet, View, Slider, Text } from 'react-native';
import { Input } from 'react-native-elements';

//Component to manage the range of bulb's opacity
export default class ControlIntensity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pickerValue: 0.5
        }
    }

    handleChangeValue = val => {
        console.log("Slider: ", typeof val)
        this.setState({ pickerValue: this.val})
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>MinOpacity</Text>
                    <Text style={styles.valueStart}>0</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={1}
                        value={this.state.pickerValue}
                        step={0.1}
                        onValueChange={e => this.handleChangeValue(e)}
                    />
                </View>
                
            <View style={styles.inputContainer}>
            <Text style={styles.label}>MaxOpacity</Text>
            <Text style={styles.valueStart}>0</Text>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                value={1}

            />
        </View>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
    },
    label: {
        color: "#33691E",
    },
    valueStart: {
        color: "#33691E",
    },
    inputContainer: { 
        width: "50%",
        height: "50%",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        color: "#33691E",
        borderColor: "#33691E",
        borderWidth: 1,    
    },
    slider: {
        width: 100, 
        height: 40, 
        borderColor: "red",
        borderWidth: 1,
        //margin: 10
    },
})