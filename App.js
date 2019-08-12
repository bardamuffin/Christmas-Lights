import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LightScreen from './screens/LightScreen.js';
import Control from './screens/Control';
import ScreenControlIntensity from './screens/ScreenControlIntensity';
import ScreenRopeDetails from './screens/ScreenRopeDetails';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      play: false,
      rowNbr: "2",
    }
  }
  
  handleActivateTimer= () => {
    console.log("Button clicked ! prevProps: " + this.state.play + " new: " + !this.state.play)
    this.setState({
      play: !this.state.play
    })
  }
  handleRowNumber = val => {
    console.log("App received rowNbr: ", val, " is typeof: ", typeof val)
    this.setState({
      rowNbr: val
    })
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <LightScreen play={this.state.play} />
        <View style={{flex: 1, flexDirection: "row",  }}>
          <ScreenControlIntensity />
          <ScreenRopeDetails updateRowNumber={this.handleRowNumber} rowNbr={this.state.rowNbr} />
        </View>
        <Control activateTimer={this.handleActivateTimer}/>
      </View>
    );
  }
}


