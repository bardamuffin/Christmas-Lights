import React from 'react';
import { StyleSheet, View, Picker, Text } from "react-native";
import { Input } from 'react-native-elements';

//Component to specify the number of Rope row
export default class ScreenRopeDetails extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Rope</Text>
                    <Picker style={styles.picker}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                    </Picker>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        color: "#33691E"
    },
    label: {
        fontSize: 24,
        textAlign: "center",
        color: "#33691E"
    },
    picker: {
        width: 100,
        color: "#33691E",
        justifyContent: "center",
        alignItems: "center"
    },
    pickerContainer: {
        width: "50%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#33691E",
        //borderWidth: 6,
    }    
})