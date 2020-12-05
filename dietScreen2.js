import React from 'react';
import {TouchableOpacity,TextInput,Text,StyleSheet,View} from 'react-native'
import ReactPlayer from 'react-player'
import firebase from 'firebase'
import db from '../config'

export default class Diet2 extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <ReactPlayer url="https://youtu.be/Hnv1qrIAWqE">
                </ReactPlayer>
                <Text style={styles.logo}>Follow the above video to help form a diet plan</Text>
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





