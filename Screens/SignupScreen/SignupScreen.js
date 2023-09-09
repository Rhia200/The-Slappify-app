import React, {useState} from 'react';
import { Image, SafeAreaView, Text, StyleSheet,ScrollView} from 'react-native';
import Logo from 'c:\Users\jaayb\OneDrive\Desktop\Slappify\App\assets\logo1.png'
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButtons/CustomButton';
import SocialSignInButtons from '../../Components/SocialSignInButtons';

function SignupScreen(props) {
    const [username, setUsername] =useState('');
    const [Email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [confirmpassword, setConfirmPassword] =useState('');
    const onLogInPressed =() => {};
    const onForgotpasswordPressed =()=>{};
    const onSignUpPressed =()=>{};
    const onPrivacyPolicyPressed=()=>{};
    const onTermsOfUsePressed=()=>{};
    
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style ={styles.root}>
     <Text style={styles.title}>Sign up</Text>
        
      <CustomInput 
         placeholder='Username' 
         value={username} 
         setValue={setUsername}
        />
        <CustomInput 
         placeholder='Email' 
         value={Email} 
         setValue={setEmail}
        />
     <CustomInput 
         placeholder= 'Password' 
         value={password} 
         setValue={setPassword}
         secureTextEntry
        />
        <CustomInput 
         placeholder= 'Confirm Password' 
         value={confirmpassword} 
         setValue={setConfirmPassword}
         secureTextEntry
        />
      <CustomButton 
         text='Sign up' 
         onPress={onSignUpPressed}
        />
      <Text style={styles.Policy}>By signing up, you confirm that you accept our{' '} 
      <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {' '}
      <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>
      
      <SocialSignInButtons/>

      <CustomButton text="Have an account already? Log In"
         onPress={onLogInPressed} 
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

title:{
   fontSize: 24,
   fontWeight:'bold',
   color: '#051C60',
   margin:10,
},
text:{
   color:'gray',
   marginVertical: 10,
},
link:{
   color:'#FDB075',
}
})
export default SignupScreen;