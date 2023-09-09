import React, {useState} from 'react';
import { Image, SafeAreaView, Text, StyleSheet,} from 'react-native';
import Logo from 'c:\Users\jaayb\OneDrive\Desktop\Slappify\App\assets\logo1.png';
import CustomButton from '../../Components/CustomButtons/CustomButton';


function WelcomeScreen(props) {
    const onLogInPressed =() => {};
    const onSignUpPressed =() => {};

    return (
        <Image 
        source={Logo} 
        style={Style.logo} 
        resizeMode='contain'
       />,

        <CustomButton
            text='LogIn' 
         onPress={onLogInPressed}
        />,
        <CustomButton
            text='SignUp' 
         onPress={onSignUpPressed}
        />
    )
}    
export default WelcomeScreen;