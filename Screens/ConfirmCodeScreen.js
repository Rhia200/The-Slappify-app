<div className="ConfirmCode w-[430px] h-[932px] relative bg-green-300">
  <div className="NotificationBar w-[326px] h-[25px] left-[38px] top-[12px] absolute">
    <div className="26 w-[47.22px] h-[25px] left-[-17px] top-[3px] absolute text-black text-base font-bold font-['Poppins']">02:26</div>
  </div>
  <div className="ConfirmCode left-[109px] top-[91px] absolute text-black text-3xl font-bold font-['Poppins']">Confirm Code</div>
  <div className="Frame1 left-[47px] top-[196px] absolute flex-col justify-start items-start gap-[19px] inline-flex">
    <div className="Input w-[337px] h-16 relative">
      <div className="Rectangle2 w-[337px] h-16 left-0 top-0 absolute bg-zinc-300 rounded-[40px]" />
      <div className="EnterYourConfirmationCode left-[14px] top-[16px] absolute text-black text-[21.04px] font-normal font-['Poppins']">Code</div>
    </div>
  </div>
  <div className="Button w-[337px] h-[61px] left-[47px] top-[311px] absolute">
    <div className="Rectangle1 w-[337px] h-[61px] left-0 top-0 absolute bg-sky-300 rounded-[40px]" />
    <div className="SignUp w-[113.62px] h-[45.54px] left-[111.41px] top-[8.03px] absolute text-center text-black text-base font-bold font-['Poppins']">Confirm Code</div>
  </div>
</div>

import React from "react";
import {Text, SafeAreaView, StyleSheet} from "react-native";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";

function CreateNewPasswordScreen (props){
  const [code, setCode] =useState('');
  const onConfirmCodePressed =()=>{};
return(
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Confirm Code</Text>
    <CustomInput style={styles.entercode}
    placeholder= 'Enter Code'
    value={code}
    setValue={setCode}
    />
    <CustomButton style={styles.confirmcode}
      text= 'Confirm Code'
      onPress={onConfirmCodePressed}
    />
  </SafeAreaView>

)}

const styles = StyleSheet.create ({
  container:{
    backgroundColor: "#98ff98",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    columnGap: 19,
  },
  title:{
    paddingLeft: 109,
    paddingTop: 91,
    fontSize: 3*1,
    fontWeight:'bold',
    font: 'Poppins',
  },
  entercode:{
    paddingLeft: 47,
    paddingTop: 196, 
  },
  confirmcode: {
    paddingLeft: 47,
    paddingTop: 311,
  }
})