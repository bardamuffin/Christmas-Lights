import React from 'react';
import { StyleSheet, View, Picker, Text } from "react-native";
import { Input } from 'react-native-elements';

//Component to specify the number of Rope row
//TODO: build it as a stateless components, only using props
export default class ScreenRopeDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rowNbr: this.props.rowNbr.toString(),
        }
    }

    onChangeItem = val => {
        console.log("changed: ", val, " is typeof : ", typeof val)
        this.setState({ rowNbr: val})
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("ControlRope Updated")
        if (prevState.rowNbr !== this.state.rowNbr) {
            console.log("ControlRopeupdate: " )
            this.props.updateRowNumber(this.state.rowNbr)
        }
    }
     
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Rope</Text>
                    <Picker 
                        style={styles.picker}
                        selectedValue={this.state.rowNbr}
                        onValueChange={(e) => this.onChangeItem(e)} 
                    >
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
        color: "#33691E",
        borderColor: "#33691E",
        borderWidth: 1,
    },
    label: {
        fontSize: 24,
        textAlign: "center",
        color: "#33691E"
    },
    picker: {
        width: "50%",
        height: "50%",
        color: "#33691E",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "black"
    },
    pickerContainer: {
        width: "50%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
    }    
})