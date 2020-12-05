import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppTabNavigator} from './Components/appTabNavigator'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import BMICalculater from './Screens/BMICalculaterScreen'
import Result from './Screens/resultScreen'
import Result2 from './Screens/resultScreen2'
import Result3 from './Screens/resultScreen3'
import Exercise from './Screens/exerciseScreen'
import Diet from './Screens/dietScreen'
import Diet2 from './Screens/dietScreen2'
import Exercise2 from './Screens/exerciseScreen2'
import Exercise3 from './Screens/exerciseScreen3'
import Diet3 from './Screens/dietScreen3'

export default class App extends React.Component{
  render(){
  return (
    <View style={{flex:1}}>
      <AppContainer/>
    </View>
  );
}
}
const AppNavigator = createSwitchNavigator({
bottomTab: AppTabNavigator,
cal: BMICalculater,
overweight: Result, 
underweight: Result2, 
normal1: Result3,
diet1: Diet,
diet2: Diet2,
exercise2: Exercise2,
diet3: Diet3,
exercise3: Exercise3,
exercise1: Exercise
})
const AppContainer= createAppContainer(AppNavigator)
