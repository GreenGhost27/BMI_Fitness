import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from '../Screens/loginScreen'
import SignUpScreen from '../Screens/signUpScreen'

export const AppTabNavigator= createBottomTabNavigator({
Login: {screen: LoginScreen},
SignUp: {screen: SignUpScreen}
})