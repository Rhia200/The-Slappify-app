<div className="SignUpScreen w-[430px] h-[932px] relative bg-green-300">
  <div className="Button w-[337px] h-[61px] left-[46px] top-[673px] absolute">
    <div className="Rectangle1 w-[337px] h-[61px] left-0 top-0 absolute bg-sky-300 rounded-[40px]" />
    <div className="SignUp w-[113.62px] h-[45.54px] left-[111.41px] top-[8.03px] absolute text-center text-black text-[26.95px] font-bold font-['Poppins']">Sign Up</div>
  </div>
  <div className="NotificationBar w-[326px] h-[25px] left-[38px] top-[12px] absolute justify-center items-center inline-flex">
    <div className="NotificationBar w-[326px] h-[25px] relative flex-col justify-start items-start flex">
      <div className="26 w-[47.22px] h-[25px] text-black text-base font-bold font-['Poppins']">02:26</div>
    </div>
  </div>
  <div className="WelcomeTo left-[123px] top-[91px] absolute text-black text-3xl font-bold font-['Poppins']">Welcome to </div>
  <img className="UntitledDesignRemovebgPreview1 w-[365px] h-[107px] left-[32px] top-[126px] absolute" src="https://via.placeholder.com/365x107" />
  <div className="Frame1 left-[46px] top-[273px] absolute flex-col justify-start items-start gap-[19px] inline-flex">
    <div className="Input w-[337px] h-16 relative">
      <div className="Rectangle2 w-[337px] h-16 left-0 top-0 absolute bg-zinc-300 rounded-[40px]" />
      <div className="EnterYourConfirmationCode left-[14px] top-[16px] absolute text-black text-[21.04px] font-normal font-['Poppins']">Username</div>
    </div>
    <div className="Input w-[337px] h-16 relative">
      <div className="Rectangle2 w-[337px] h-16 left-0 top-0 absolute bg-zinc-300 rounded-[40px]" />
      <div className="EnterYourConfirmationCode left-[14px] top-[16px] absolute text-black text-[21.04px] font-normal font-['Poppins']">Email</div>
    </div>
    <div className="Input w-[337px] h-16 relative">
      <div className="Rectangle2 w-[337px] h-16 left-0 top-0 absolute bg-zinc-300 rounded-[40px]" />
      <div className="EnterYourConfirmationCode left-[14px] top-[16px] absolute text-black text-[21.04px] font-normal font-['Poppins']">Password</div>
    </div>
    <div className="Input w-[337px] h-16 relative">
      <div className="Rectangle2 w-[337px] h-16 left-0 top-0 absolute bg-zinc-300 rounded-[40px]" />
      <div className="EnterYourConfirmationCode left-[14px] top-[16px] absolute text-black text-[21.04px] font-normal font-['Poppins']">Confirm password</div>
    </div>
  </div>
  <div className="BySigningUpYouConfirmThatYouAcceptOurTermsOfUseAndPrivacyPolicy w-[335px] h-[39px] left-[47px] top-[608px] absolute"><span style="text-black text-sm font-normal font-['Poppins']">By signing up, you confirm that you accept our </span><span style="text-cyan-600 text-sm font-extrabold font-['Poppins']">Terms of Use</span><span style="text-black text-sm font-extrabold font-['Poppins']"> </span><span style="text-black text-sm font-normal font-['Poppins']">and </span><span style="text-cyan-600 text-sm font-extrabold font-['Poppins']">Privacy Policy</span><span style="text-cyan-600 text-sm font-normal font-['Poppins']"> </span></div>
  <div className="HaveAnAccountAlreadyLogIn w-[349px] h-[63px] left-[40px] top-[735px] absolute text-center"><span style="text-black text-sm font-normal font-['Poppins']">Have an account already?</span><span style="text-black text-sm font-bold font-['Poppins']"> </span><span style="text-cyan-600 text-sm font-bold font-['Poppins']">Log in</span></div>
</div>

import React, {useState} from "react";
import {Image, Text, SafeAreaView, StyleSheet} from "react-native";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";

function signupscreeen (props){
    const [username, setUsername] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [confirmpassword, setConfirmPassword] =useState('');
    const onAlreadyHaveAnAccountPressed =() => {};
    const onSignUpPressed =()=>{};

    return (
      <SafeAreaView style={styles.container}>
      <Text style={styles.welcometo}>
        Welcome to
      </Text> 
      <Image source={require('C:\Users\jaayb\First\assets\Logo2.png')} style={styles.logo2}/> 
      
      <CustomInput
        placeholder='Username'
        value={username}
        setValue={setUsername}
      />

      <CustomInput
        placeholder='Email'
        value={email}
        setValue={setEmail}
      />

      <CustomInput
        placeholder='Password'
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomInput
        placeholder='Confirm Password'
        value={confirmpassword}
        setValue={setConfirmPassword}
        secureTextEntry
      />
     <Text style={styles.Policy}>By signing up, you confirm that you accept our{' '} 
      <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {' '}
      <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>

     <CustomButton
      text='Sign Up'
      onPress={onSignUpPressed}
     />
     
     <CustomButton
      text='Have An Account Already? Log In'
      onPress={onAlreadyHaveAnAccountPressed}
      type="TERTIARY"
     />
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container :{
     backgroundColor: "#98ff98",
     justifyContent: "center",
     alignItems: "center"
  },
  welcometo :{
     paddingLeft: 123, 
     paddingTop: 91,
     fontWeight: "bold",
     font: 'Poppins',
     fontSize: 3*1, 
  },
  logo2 :{
    paddingLeft: 32,
    paddingTop: 126,
  }
})

export default signupscreeen