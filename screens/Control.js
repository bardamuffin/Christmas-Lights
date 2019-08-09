import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class Control extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            title: "Play",
            play: true,
            backgroundColor: "#8BC34A"
        }
    }

    handleButton = () => {
        if (this.state.play) {
            this.setState( prevState => ({
                play: !prevState.play,
                backgroundColor: "#D50000",
                title: "STOP",
            }))
        } else {
            this.setState( prevState => ({
                play: !prevState.play,
                backgroundColor: "#8BC34A",
                title: "Play",
            }))
        }
        this.activateTimer()

    }
    activateTimer = () => {
        this.props.activateTimer()
    }
    render() {
        return (
            <View style={styles.container}>
                
                    <Button
                        containerStyle={styles.button}
                        onPress={this.handleButton}
                        title={this.state.title}
                        buttonStyle={{backgroundColor : this.state.backgroundColor}}
                    />
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "black"},
    button: { padding: 40, height: 400}
})