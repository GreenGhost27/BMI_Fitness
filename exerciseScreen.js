import React from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import db from '../config'
import ReactPlayer from 'react-player'

export default function Exercise(){

    return(
        <View style={styles.container}>
            <ReactPlayer url="https://youtu.be/YjmQVMLhNT4">
            </ReactPlayer>
            <Text style={styles.logo}>Follow the above video to help decrease your weight</Text>
        </View>
    )


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

