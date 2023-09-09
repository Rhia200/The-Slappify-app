import { StatusBar } from 'expo-status-bar';
import React, {useLayoutEffect} from 'react';
import {view, Text, SafeAreaView, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import logo1 from 'App/assets/logo1.png'


export default function HomeScreen() {
    return(
<view style={styles.container}>
{/*Dispensary Item */}
<view style={styles.dispensaryContainer}>
<Image 
source={'App/assets/mike-von-eMrtDjddjlk-unsplash.jpg'}
style={styles.image}
/>
<Text style={styles.title}>ZEN LOUNGE</Text>
<Text style={styles.subtitle}>R</Text>
</view>
<StatusBar style = 'auto'/>
</view>
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#dfdfdf',
      padding:10,
    },
    dispenaeryContainer:{
        width: '100%'
    },
    image:{
        width: '100%',
        aspectRatio: 5/3,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle:{},
})