<div className="CreateNewPassword w-[430px] h-[932px] relative bg-green-300">
  <div className="NotificationBar w-[326px] h-[25px] left-[38px] top-[12px] absolute">
    <div className="26 w-[47.22px] h-[25px] left-[-17px] top-[3px] absolute text-black text-base font-bold font-['Poppins']">02:26</div>
  </div>
  <div className="CreateNewPassword left-[66px] top-[91px] absolute text-black text-[26.74px] font-bold font-['Poppins']">Create new password</div>
  <div className="Frame1 left-[47px] top-[196px] absolute flex-col justify-start items-start gap-[19px] inline-flex">
    <div className="Input w-[337px] h-16 relative">
      <div className="Rectangle2 w-[337px] h-16 left-0 top-0 absolute bg-zinc-300 rounded-[40px]" />
      <div className="EnterYourConfirmationCode left-[14px] top-[16px] absolute text-black text-[21.04px] font-normal font-['Poppins']">New password</div>
    </div>
  </div>
  <div className="Frame2 left-[47px] top-[275px] absolute flex-col justify-start items-start gap-[19px] inline-flex">
    <div className="Input w-[337px] h-16 relative">
      <div className="Rectangle2 w-[337px] h-16 left-0 top-0 absolute bg-zinc-300 rounded-[40px]" />
      <div className="EnterYourConfirmationCode left-[14px] top-[16px] absolute text-black text-[21.04px] font-normal font-['Poppins']">Confirm password</div>
    </div>
  </div>
  <div className="Button w-[337px] h-[61px] left-[47px] top-[402px] absolute">
    <div className="Rectangle1 w-[337px] h-[61px] left-0 top-0 absolute bg-sky-300 rounded-[40px]" />
    <div className="SignUp left-[86.41px] top-[15.03px] absolute text-center text-black text-xl font-semibold font-['Poppins']">Reset password</div>
  </div>
</div>


import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";

function CreateNewPasswordScreen (props){
  const [newpassword, setNewPassword] =useState('');
  const [confirmpassword, setConfirmPassword] =useState('');
  const onResetPasswordPressed =()=>{};

return (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>
      Create a New Password
    </Text>
    <View style={styles.frame}>
    <CustomInput style={styles.newpassword}
      placeholder= 'New Password'
      value={newpassword}
      setValue={setNewPassword}
      secureTextEntry
    />
    <CustomInput style={styles.confirmpassword}
      placeholder= 'Confirm Password'
      value={confirmpassword}
      setValue={setConfirmPassword}
      secureTextEntry
    />
    <CustomButton style={styles.resetpassword}
      text= 'Reset Password'
      onPress={onResetPasswordPressed}
    />
    </View>
  </SafeAreaView>
)
}

const styles = StyleSheet.create ({
  container:{
    backgroundColor: "#98ff98"
  },
  title:{
    paddingLeft: 66,
    paddingTop: 91,
    fontSize: 26.74,
    fontWeight: 'bold',
    font: 'Poppins'
  },
  frame:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    columnGap: 19,
    
  },
  newpassword:{
    paddingLeft: 47,
    paddingTop: 196, 
  },
  confirmpassword:{
    paddingLeft: 47,
    paddingTop: 275
  },
  resetpassword:{
    paddingLeft: 47,
    paddingTop: 402,
  },
})