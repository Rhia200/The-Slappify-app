<div className="LogInScreen w-[430px] h-[932px] relative bg-green-300">
  <div className="NotificationBar w-[326px] h-[25px] left-[40px] top-[12px] absolute">
    <div className="26 w-[47.22px] h-[25px] left-[-17px] top-[3px] absolute text-black text-base font-bold font-['Poppins']">02:26</div>
  </div>
  <div className="WelcomeBack left-[95px] top-[91px] absolute text-black text-3xl font-bold font-['Poppins']">Welcome Back! </div>
  <div className="Frame1 left-[47px] top-[210px] absolute flex-col justify-start items-start gap-[19px] inline-flex">
    <div className="Input w-[337px] h-16 relative">
      <div className="Rectangle2 w-[337px] h-16 left-0 top-0 absolute bg-zinc-300 rounded-[40px]" />
      <div className="EnterYourConfirmationCode left-[14px] top-[16px] absolute text-black text-[21.04px] font-normal font-['Poppins']">Enter your email</div>
    </div>
    <div className="Input w-[337px] h-16 relative">
      <div className="Rectangle2 w-[337px] h-16 left-0 top-0 absolute bg-zinc-300 rounded-[40px]" />
      <div className="EnterYourConfirmationCode left-[14px] top-[16px] absolute text-black text-[21.04px] font-normal font-['Poppins']">Enter password</div>
    </div>
  </div>
  <div className="DonTHaveAnAccountSignUp w-[235px] h-[63px] left-[40px] top-[780px] absolute text-center"><span style="text-black text-sm font-normal font-['Poppins']">Don’t have an account ?</span><span style="text-black text-sm font-bold font-['Poppins']"> </span><span style="text-cyan-600 text-sm font-bold font-['Poppins']">Sign up</span></div>
  <div className="Button2 w-[337px] h-[76px] left-[47px] top-[415px] absolute justify-center items-center inline-flex">
    <div className="Button w-[337px] h-[76px] relative flex-col justify-start items-start flex">
      <div className="Rectangle1 w-[337px] h-[76px] bg-black rounded-[40px]" />
      <div className="SignUp w-[113.62px] h-[56.74px] text-center text-green-300 text-[30.95px] font-bold font-['Poppins']">Log In</div>
    </div>
  </div>
  <div className="ForgotPassword w-[124px] h-[31px] left-[40px] top-[505px] absolute text-center text-cyan-600 text-sm font-semibold font-['Poppins']">Forgot password</div>
  <div className="FacebookButton w-[337px] h-[66px] left-[47px] top-[554px] absolute">
    <div className="Button w-[337px] h-[66px] left-0 top-0 absolute">
      <div className="Rectangle1 w-[337px] h-[66px] left-0 top-0 absolute bg-slate-200 rounded-[40px]" />
      <div className="SignUp left-[64.41px] top-[17.68px] absolute text-center text-slate-500 text-xl font-medium font-['Poppins']">Log in with facebook</div>
    </div>
  </div>
  <div className="GoogleButton w-[337px] h-[66px] left-[47px] top-[634px] absolute">
    <div className="Button w-[337px] h-[66px] left-0 top-0 absolute border">
      <div className="Rectangle1 w-[337px] h-[66px] left-0 top-0 absolute bg-rose-100 rounded-[40px]" />
      <div className="SignUp left-[76.41px] top-[17.68px] absolute text-center text-red-500 text-xl font-medium font-['Poppins']">Log in with google</div>
    </div>
  </div>
  <div className="AppleButton w-[337px] h-[66px] left-[47px] top-[714px] absolute">
    <div className="Button w-[337px] h-[66px] left-0 top-0 absolute">
      <div className="Rectangle1 w-[337px] h-[66px] left-0 top-0 absolute bg-neutral-200 rounded-[40px]" />
      <div className="SignUp left-[78.41px] top-[17.68px] absolute text-center text-neutral-700 text-[20.95px] font-medium font-['Poppins']">Log in with Apple</div>
    </div>
  </div>
</div>

import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet} from "react-native";
import CustomButton from "../Components/CustomButton";
import CustomInput from "../Components/CustomInput";
import SocialSignInButtons from "../Components/SocialSignInButtons";

function LogInScreen (props) {
  const [enteryouremail, setEnterYourEmail] = useState('');
  const [enterpassword, setEnterPassword] =useState('');
  const onDontHaveAnAccountPressed =() => {};
  const onForgotpasswordPressed =()=>{};
  const onLogInPressed =()=>{};

  return(
    <SafeAreaView style={styles.container}>
    <Text style={styles.welcome}>
      Welcome Back! 
    </Text>
    <CustomInput
      placeholder='Enter Your Email'
      value={enteryouremail}
      setValue={setEnterYourEmail}
    />
    <CustomInput
      placeholder='Enter Password'
      value={enterpassword}
      setValue={setEnterPassword}
      secureTextEntry
    />
    <CustomButton style={styles.donthaveanaccount}
      text= 'Dont Have An Accoun? Sign Up'
      onPress={onDontHaveAnAccountPressed}
      type="TERTIARY"
    />
    <CustomButton style={styles.forgotpassword}
      text= 'Forgot Password'
      onPress={onForgotpasswordPressed}
      type="TERTIARY"
    />
    <CustomButton 
      text= 'Log In'
      onPress={onLogInPressed}
      type="SECONDARY"
    />
    <SocialSignInButtons style={styles.socials}/>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#98ff98",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  welcome:{
    paddingLeft: 95,
    paddingTop: 91,
    fontSize: 3*1,
    fontWeight:'bold', 
    font: 'Poppins'
  },
  donthaveanaccount:{
    paddingLeft: 40,
    paddingTop: 780,
    fontWeight: 'normal',
    font: 'Poppins' 
  }, 
  forgotpassword:{
    paddingLeft: 40,
    paddingTop: 505, 
    textAlign: 'center',
    fontWeight: '500',
    font: 'Poppins'
  }, 
  socials :{
    gap: 19
  }

})