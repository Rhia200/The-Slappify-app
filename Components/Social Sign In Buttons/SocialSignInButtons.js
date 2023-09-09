import React from 'react';
import {view, Text} from 'react-native';
import CustomButton from '../CustomButtons/CustomButton';

function SocialSignInButtons(props) {
  const onLogInFacebook=()=>{};
    const onLogInGoogle=()=>{};
    const onLogInApple=()=>{};
    return (
        <>
        <CustomButton 
        text='Sign In with Facebook' 
        onPress={onLogInFacebook}
        bgColor='#E7EAF4'
        fgColor='#4765A9'
       />,
     <CustomButton 
        text='Sign In with Google' 
        onPress={onLogInGoogle}
        bgColor='#FAE9EA'
        fgColor='#DD4D44'
       />,
     <CustomButton 
        text="Sign In with Apple" 
        onPress={onLogInApple}
        bgColor='#e3e3e3'
        fgColor='#363636'
       />
       </>
    );
}

export default SocialSignInButtons;