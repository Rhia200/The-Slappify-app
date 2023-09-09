import React, {useState} from 'react';
import { Image, SafeAreaView, Text, StyleSheet,ScrollView} from 'react-native';
import Logo from 'c:\Users\jaayb\OneDrive\Desktop\Slappify\App\assets\logo1.png'
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButtons/CustomButton';
import SocialSignInButtons from '../../Components/SocialSignInButtons';

function LoginScreen(props) {
    const [username, setUsername] =useState('');
    const [password, setPassword] =useState('');
    const onLogInPressed =() => {};
    const onForgotpasswordPressed =()=>{};
    const onSignUpPressed =()=>{};
    
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style ={styles.root}>
      <Text style={styles.title}>Log in</Text>
        
      <CustomInput 
         placeholder='Username' 
         value={username} 
         setValue={setUsername}
        />
     <CustomInput 
         placeholder= 'Password' 
         value={password} 
         setValue={setPassword}
         secureTextEntry
        />
      <CustomButton 
         text='LogIn' 
         onPress={onLogInPressed}
        />
      <CustomButton 
         text='Forgot password'
         onPress={onForgotpasswordPressed} 
         type='TERTIARY'
        />

       <SocialSignInButtons/> 

      <CustomButton text="Don't have an account? Create one"
         onPress={onSignUpPressed} 
         type='TERTIARY'
        />
     </SafeAreaView>
     </ScrollView>
);
}

const styles = StyleSheet.create({
root: {
    alignItems:'center',
    padding: 20,
},
logo: {
    width:'70%',
    height:100,
}, 
title:{
   fontSize: 24,
   fontWeight:'bold',
   color: '#051C60',
   margin:10,

}
})


export default LoginScreen;