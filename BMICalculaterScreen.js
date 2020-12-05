import React from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class BMICalculater extends React.Component{
    constructor(){
        super()
         this.state={
             height1: '',
             weight1: ''
         }
    }
bmiCalc=()=>{
var heightCal = this.state.height1/100
var sq = heightCal*heightCal
var bmi = this.state.weight1/sq
if(bmi>=25.0){
this.props.navigation.navigate('overweight')
}
else if(bmi<18.5){
this.props.navigation.navigate('underweight')
}  
else{
this.props.navigation.navigate('normal1')
}
}
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.logo}>Calculate BMI</Text>
                
                <TextInput style={styles.inputView}
                placeholder="Enter Height in cm"
                onChangeText={(text)=>{
                    this.setState({
                        height1: text
                    })
                }}
                value={this.state.height1}/>

                <TextInput style={styles.inputView}
                placeholder="Enter Weight in kg"
                onChangeText={(text)=>{
                    this.setState({
                        weight1: text
                    })
                }}
                value={this.state.weight1}/>

               <TouchableOpacity style={{padding:20, width:200, height:30,backgroundColor:"green", borderWidth: 3, borderRadius:20, alignItems:'center',justifyContent:"center"}}
              onPress={()=>{this.bmiCalc()}}>
                   <Text>Calculate BMI</Text>
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

      inputView:{
        width:200,
        backgroundColor:"#465881",
        borderRadius:25,
        height:30,
        marginBottom:20,
        justifyContent:"center",
        padding: 20
      },

  });















