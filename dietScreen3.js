import React from 'react';
import {TouchableOpacity,TextInput,Text,StyleSheet,View,Linking} from 'react-native'
import ReactPlayer from 'react-player'
import firebase from 'firebase'
import db from '../config'

export default class Diet3 extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <ReactPlayer url="https://youtu.be/K-Ch9kbtLYQ">
                </ReactPlayer>
                <Text style={styles.logo2} onPress={()=>{Linking.openURL("https://www.drmikediet.com/3daymealplan")}}>Click Me for a free 3-day Diet Plan</Text>
                <Text style={styles.logo}>Follow the above video to help form a diet plan if you didn't have one</Text>
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

      logo2:{
          fontWeight:"bold",
          fontSize:15,
          color:"#fb5b5a",
          marginTop:20
      }
  });
