import React from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class SignUpScreen extends React.Component{
    constructor(){
        super()
        this.state={
            email: '',
            password:'',
            confirmPassword: '',
            contact: '',
            fullName: '',
        }
    }
    

    signUp=(email,password,confirmPassword)=>{
        if(password!==confirmPassword){
            return alert("Password does not match")
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
                db.collection('users').add({
                    fullName: this.state.fullName,
                    contact: this.state.contact,
                    password: this.state.password,
                    email: this.state.email
                })
            }).catch((error)=>{
                console.log(error.message)
            })
            return alert("User added successfully!")
    
        }
    }

    render(){
        return(
            <View style={{ flex: 1,
                backgroundColor: '#003f5c',
                alignItems: 'center',
                justifyContent: 'center',}}>
                 <Text style={styles.logo}>Welcome to BMI Fitness</Text>
                 <TextInput style={styles.inputView}
              placeholder="Enter Name"
              onChangeText={(text)=>{
                  this.setState({
                      fullName: text
                  })
              }
            }
              value={this.state.fullName}/>
              <TextInput style={styles.inputView}
              placeholder="Contact Info"
              onChangeText={(text)=>{
                 this.setState({
                     contact: text
                 })
              }
              }
              value={this.state.contact}/>
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

            <TextInput style={styles.inputView}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={(text)=>{
                this.setState({
                    confirmPassword: text
                })
            }}
            value={this.state.confirmPassword}/>

           <TouchableOpacity style={{width:100, height:50,backgroundColor:"green", borderWidth: 3, borderWidth:4, borderRadius:20, alignItems: 'center', justifyContent: 'center',}}
           onPress={()=>{this.signUp(this.state.email,this.state.password,this.state.confirmPassword)}}>
               <Text>Sign Up</Text>
           </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({

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
      }
    })