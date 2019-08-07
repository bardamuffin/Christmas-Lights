import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const Light = ({style}) => {
    return (
        <View>
            <View style={[styles.light, {...style}]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    light: { width: 40, height: 40, borderRadius: 60, backgroundColor: "red"},
})
export default Light;
