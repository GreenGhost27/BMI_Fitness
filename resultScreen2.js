import React from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class Result2 extends React.Component{
render(){
    return(
        <View style={styles.container}>
            <Text style={styles.logo}>You are Underweight</Text>
            <TouchableOpacity style={{padding:20,width:100, height:50,backgroundColor:"green", borderWidth: 3, borderRadius:20, alignItems: 'center', justifyContent: 'center', marginBottom: 10}}
            onPress={()=>{this.props.navigation.navigate('exercise2')}}>
                <Text>Exercise Plan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:20,width:100, height:50,backgroundColor:"green", borderWidth: 3, borderRadius:20, alignItems: 'center', justifyContent: 'center'}}
            onPress={()=>{this.props.navigation.navigate('diet2')}}>
                <Text>Diet Plan</Text>
            </TouchableOpacity>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: "center"
    },

    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
      },

  });
