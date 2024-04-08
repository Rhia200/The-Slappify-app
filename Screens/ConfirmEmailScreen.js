<div className="ConfirmEmail w-[430px] h-[932px] relative bg-green-300">
  <div className="NotificationBar w-[326px] h-[25px] left-[48px] top-[12px] absolute">
    <div className="26 w-[47.22px] h-[25px] left-[-17px] top-[3px] absolute text-black text-base font-bold font-['Poppins']">02:26</div>
  </div>
  <div className="Button w-[337px] h-[61px] left-[43px] top-[400px] absolute">
    <div className="Rectangle1 w-[337px] h-[61px] left-0 top-0 absolute bg-sky-300 rounded-[40px]" />
    <div className="SignUp w-[113.62px] h-[45.54px] left-[111.41px] top-[8.03px] absolute text-center text-black text-[26.95px] font-bold font-['Poppins']">Confirm</div>
  </div>
  <div className="ConfirmYourEmail left-[64px] top-[91px] absolute text-black text-3xl font-bold font-['Poppins']">Confirm your Email</div>
  <div className="Frame1 left-[43px] top-[210px] absolute flex-col justify-start items-start gap-[19px] inline-flex">
    <div className="Input w-[337px] h-16 relative">
      <div className="Rectangle2 w-[337px] h-16 left-0 top-0 absolute bg-zinc-300 rounded-[40px]" />
      <div className="EnterYourConfirmationCode left-[14px] top-[16px] absolute text-black text-[21.04px] font-normal font-['Poppins']">Enter your confirmation code</div>
    </div>
  </div>
  <div className="ResendCode left-[52px] top-[497px] absolute text-center text-black text-base font-semibold font-['Poppins']">Resend Code</div>
  <div className="BackToSignUp left-[247px] top-[497px] absolute text-center text-black text-base font-semibold font-['Poppins']">Back to Sign up</div>
</div>

import React from "react";
import {Text, SafeAreaView, StyleSheet} from "react-native";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";

function ConfirmEmailScreen (props){
  const [confirmemail, setConfirmEmail] =useState('');
  const onResendCodePressed =() => {};
  const onBackToSignUPPressed =()=>{};
  const onConfirmPressed =()=>{};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Confirm Your Email
      </Text>

      <CustomInput
        placeholder='Enter your confirmation code'
        value={confirmemail}
        setValue={setConfirmEmail}
      />

      <CustomButton style={styles.resend}
        text= 'Resend Code'
        onPress={onResendCodePressed}
        type="TERTIARY"
      />
      
      <CustomButton style={styles.back}
        text= 'Back To Sign UP'
        onPress={onBackToSignUPPressed}
        type="TERTIARY"
        />
     
      <CustomButton 
         text='Confirm' 
         onPress={onConfirmPressed}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container :{
    backgroundColor: "#98ff98",
    flex: 'col',
    justifyContent: 'flex-start',
    alignItems: 'flex-start', 
    gap: 19,
    

  },
  text : {
    paddingLeft: 64,
    paddingTop: 91,
    fontWeight: 'bold',
    font: 'Poppins',
  }, 
  resend :{
    paddingLeft: 52,
    paddingTop: 497,
  },
  back :{
    paddingLeft: 247, 
    paddingTop: 497,
  },
})