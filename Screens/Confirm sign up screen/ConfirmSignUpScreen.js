import React, {useState} from 'react';
import { Image, SafeAreaView, Text, StyleSheet,ScrollView} from 'react-native';
import Logo from 'c:\Users\jaayb\OneDrive\Desktop\Slappify\App\assets\logo1.png'
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButtons/CustomButton';

function ConfirmSignUpScreen(props) {
    const [code, setcode]=useState('');
    const [username, setUsername] =useState('');
    const [Email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [confirmpassword, setConfirmPassword] =useState('');
    const onBackToLogInPressed =() => {};
    const onForgotpasswordPressed =()=>{};
    const onConfirmPressed =()=>{};
    const onPrivacyPolicyPressed=()=>{};
    const onResendCodePressed=()=>{};
    
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style ={styles.root}>
     <Text style={styles.title}>Confirm Your Email</Text>
        
      <CustomInput 
         placeholder="Enter you confirmation code" 
         value={code} 
         setValue={setCode}
        />
       
      <CustomButton 
         text="Confirm"
         onPress={onConfirmPressed}
        />
      

      <CustomButton text="Resend Code"
         onPress={onResendCodePressed} 
         type='SECONDARY'
        />

<CustomButton text="Back to log in"
         onPress={onBackToLogInPressed} 
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
});


export default ConfirmSignUpScreen;