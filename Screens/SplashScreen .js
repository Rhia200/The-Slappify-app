
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from "react-native";

export default function SplashScreen () {
    return(
      <SafeAreaView style={styles.splashscreen}>  
      <Image source={require('C:\Users\jaayb\First\assets\LOGO.png')} style={styles.logo1}/>
      <Text style={styles.version1}>
         Version1.0.0 
      </Text>
      <Text style={styles.welcome}>
         Welcome To 
      </Text>
      <Image source={require('C:\Users\jaayb\First\assets\Logo2.png')} style={styles.logo2}/>
</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    splashscreen :{
        flex: 1,
        backgroundColor: "#98ff98",
        justifyContent: "center",
        alignItems: "center"
    },
    logo1 :{
        paddingLeft:7,
        paddingTop: 171.63, 

    },
    version1 :{
         paddingLeft: 162,
         paddingTop: 822, 
          textcolor: "black",
         fontSize: 'medium',
         fontWeight: '100',
         font: 'Poppins',
    },
    welcome :{
        paddingLeft: 142,
        paddingTop: 690.91,
        textcolor: "black", 
        fontSize: 22.80, 
        fontWeight: 'bold',
        font: 'Poppins',
    },
    logo2:{
        paddingLeft: 88, 
        paddingTop: 722.25,
    },
});