<div className="ResetPassword w-[430px] h-[932px] relative bg-green-300">
  <div className="NotificationBar w-[326px] h-[25px] left-[38px] top-[12px] absolute">
    <div className="26 w-[47.22px] h-[25px] left-[-17px] top-[3px] absolute text-black text-base font-bold font-['Poppins']">02:26</div>
  </div>
  <div className="ResetPassword left-[95px] top-[91px] absolute text-black text-3xl font-bold font-['Poppins']">Reset Password</div>
  <div className="Frame1 left-[47px] top-[196px] absolute flex-col justify-start items-start gap-[19px] inline-flex">
    <div className="Input w-[337px] h-16 relative">
      <div className="Rectangle2 w-[337px] h-16 left-0 top-0 absolute bg-zinc-300 rounded-[40px]" />
      <div className="EnterYourConfirmationCode left-[14px] top-[16px] absolute text-black text-[21.04px] font-normal font-['Poppins']">Enter your email</div>
    </div>
  </div>
  <div className="Button w-[337px] h-[61px] left-[47px] top-[311px] absolute">
    <div className="Rectangle1 w-[337px] h-[61px] left-0 top-0 absolute bg-sky-300 rounded-[40px]" />
    <div className="SignUp w-[113.62px] h-[45.54px] left-[111.41px] top-[8.03px] absolute text-center text-black text-xl font-bold font-['Poppins']">Send Code</div>
  </div>
  <div className="ResendCode left-[45px] top-[399px] absolute text-center text-black text-base font-semibold font-['Poppins']">Resend Code</div>
  <div className="BackToLogIn left-[275px] top-[399px] absolute text-center text-black text-base font-semibold font-['Poppins']">Back to log in</div>
</div>

import React from "react";
import {Text, SafeAreaView, StyleSheet} from "react-native";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";

function ResetPasswordScreen (props){
  const [enteryouremail, setenteryouremail] =useState('');
  const onResendCodePressed =() => {};
  const onBackToLogInPressed =()=>{};
  const onSendCodePressed =()=>{};

  return (
    <SafeAreaView style={styles.container}>
     <Text style={styles.restpassword}>
      Reset Password
     </Text>
     <CustomInput style={styles.enteryouremail}
        placeholder='Enter Your Email'
        value={enteryouremail}
        setValue={setenteryouremail}
     />
     <CustomButton style={styles.resendcode}
      text= 'Resend Code'
      onPress={onResendCodePressed}
      type="TERTIARY"
     />
     <CustomButton style={styles.backtologin}
      text= 'Back To Log In'
      onPress={onBackToLogInPressed}
      type="TERTIARY"
     />
     <CustomButton style={styles.sendcode}
      text= 'Send Code'
      onPress={onSendCodePressed}
     />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#98ff98",
    gap: 19
  },
  resetpassword: {
    paddingLeft: 95,
    paddingTop: 91,
    fontSize: 3*1,
    fontWeight: 'bold',
    font: 'Poppins'
  },
  enteryouremail: {
    paddingLeft: 47,
    paddingTop: 196, 
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    rowGap: 19,
  },
  resendcode: {
    paddingLeft:45,
    paddingTop: 399,
  },
  backtologin: {
    paddingLeft: 275,
    paddingTop: 399,
  },
  sendcode: {
    paddingLeft: 47,
    paddingTop: 311,
  }

})

export default ResetPasswordScreen