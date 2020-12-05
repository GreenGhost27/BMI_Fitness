import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class LoginScreen extends React.Component{
    constructor(){
super()
this.state={
email: '',
password: ''
}
    }

    userLogin=()=>{
firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
.then(()=>{
    this.props.navigation.navigate('cal')
})
.catch((error)=>{
    var errorCode= error.code
    var errorMessage= error.message
    return alert(errorMessage)
})
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.logo}>Welcome to BMI Fitness</Text>
                
                <TextInput style={styles.inputView}
                placeholder="Enter Email"
                onChangeText={(text)=>{
                    this.setState({
                        email: text
                    })
                }}
                value={this.state.email}/>

                <TextInput style={styles.inputView}
                placeholder="Enter Password"
                secureTextEntry={true}
                onChangeText={(text)=>{
                    this.setState({
                        password: text
                    })
                }}
                value={this.state.password}/>

               <TouchableOpacity style={{padding:20,width:100, height:50,backgroundColor:"green", borderWidth: 3, borderRadius:20, alignItems: 'center', justifyContent: 'center',}}
               onPress={()=>{this.userLogin()}}>
                   <Text>Login</Text>
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
      justifyContent: 'center',
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
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },

  });
