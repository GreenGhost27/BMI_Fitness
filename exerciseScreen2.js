import React from 'react';
import firebase from 'firebase'
import db from '../config'
import {Text,TextInput,TouchableOpacity,View,StyleSheet} from 'react-native'
import ReactPlayer from 'react-player'

export default class Exercise2 extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                  <ReactPlayer url="https://youtu.be/lA-diBuGy6I">
                </ReactPlayer>
                <Text style={styles.logo}>Follow the above video to help build muscels</Text>
              
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
        fontSize:20,
        color:"#fb5b5a",
        marginTop: 30
      },

  });







