<div className="EditProfile w-[430px] h-[932px] relative bg-zinc-100">
  <div className="NotificationBar w-[326px] h-[25px] left-[38px] top-[12px] absolute">
    <div className="26 w-[47.22px] h-[25px] left-[-17px] top-[3px] absolute text-black text-base font-bold font-['Poppins']">02:26</div>
  </div>

  <div className="Rectangle23 w-[430px] h-[117px] left-0 top-0 absolute bg-green-300 rounded-[13px]" />
  <div className="EditProfile left-[162px] top-[74px] absolute text-black text-xl font-bold font-['Poppins']">Edit Profile</div>

  <div className="Group4 w-[117px] h-[117px] left-[158px] top-[137px] absolute">
    <img className="Ellipse1 w-[113px] h-[113px] left-0 top-0 absolute rounded-full" src="https://via.placeholder.com/113x113" />
    <div className="Ellipse2 w-[39px] h-[39px] left-[78px] top-[78px] absolute bg-sky-300 rounded-full" />
    <div className=" left-[104px] top-[77px] absolute text-center text-black text-sm font-normal font-['Poppins']">+</div>
  </div>
  <div className="Input2 w-[390px] h-[59px] left-[20px] top-[288px] absolute">
    <div className="Rectangle31 w-[390px] h-[59px] left-0 top-0 absolute bg-zinc-100 rounded-[10px] border border-sky-300" />
    <div className="Jake w-[50px] h-[35px] left-[14px] top-[20px] absolute text-center text-black text-xl font-light font-['Poppins']">Jake </div>
    <div className="FirstName w-[72px] h-[21.06px] left-[14px] top-[4px] absolute text-center text-black text-[13.17px] font-light font-['Poppins']">First Name</div>
  </div>
  <div className="Input3 w-[390px] h-[59px] left-[20px] top-[359px] absolute">
    <div className="Rectangle31 w-[390px] h-[59px] left-0 top-0 absolute bg-zinc-100 rounded-[10px] border border-sky-300" />
    <div className="Simpson w-[89px] h-[35px] left-[14px] top-[20px] absolute text-center text-black text-xl font-light font-['Poppins']">Simpson </div>
    <div className="LastName w-[72px] h-[21.06px] left-[14px] top-[4px] absolute text-center text-black text-[13.17px] font-light font-['Poppins']">Last Name</div>
  </div>
  <div className="Input5 w-[390px] h-[59px] left-[20px] top-[502px] absolute">
    <div className="Rectangle31 w-[390px] h-[59px] left-0 top-0 absolute bg-zinc-100 rounded-[10px] border border-sky-300" />
    <div className="Rectangle32 w-[54px] h-[59px] left-0 top-0 absolute bg-gray-200 rounded-tl-[10px] rounded-bl-[10px] border border-sky-300" />
    <div className="27 left-[15px] top-[20px] absolute text-center text-black text-[13.17px] font-light font-['Poppins']">+27</div>
    <div className=" w-[101px] h-5 left-[66px] top-[28px] absolute text-center text-black text-xl font-light font-['Poppins']">123456789</div>
    <div className="MobileNumber w-[100px] h-[21px] left-[66px] top-[4px] absolute text-center text-black text-[13.17px] font-light font-['Poppins']">Mobile Number</div>
  </div>
  <div className="Input4 w-[390px] h-[59px] left-[20px] top-[430px] absolute">
    <div className="Rectangle31 w-[390px] h-[59px] left-0 top-0 absolute bg-zinc-100 rounded-[10px] border border-sky-300" />
    <div className="Iloveza420GmailCom w-[225px] h-5 left-[14px] top-[27px] absolute text-center text-black text-xl font-light font-['Poppins']">iloveza420@gmail.com</div>
    <div className="Email w-[38px] h-[21px] left-[14px] top-[4px] absolute text-center text-black text-[13.17px] font-light font-['Poppins']">Email</div>
  </div>
  <div className="Group5 w-[390px] h-[61px] left-[20px] top-[684px] absolute">
    <div className="Button w-[390px] h-[61px] left-0 top-0 absolute justify-center items-center inline-flex">
      <div className="Rectangle1 w-[390px] h-[61px] bg-sky-300 rounded-[10px]" />
    </div>
    <div className="UpdateAccount left-[108px] top-[16px] absolute text-center text-black text-[20.95px] font-semibold font-['Poppins']">Update Account</div>
  </div>
  <div className="Button w-[390px] h-[61px] left-[20px] top-[603px] absolute">
    <div className="Rectangle1 w-[390px] h-[61px] left-0 top-0 absolute bg-zinc-100 rounded-[10px] border border-sky-300" />
    <div className="ChangePassword left-[96.93px] top-[15.03px] absolute text-center text-black text-[20.95px] font-semibold font-['Poppins']">Change Password</div>
  </div>
  <div className="DeleteMyAccount left-[150px] top-[765px] absolute text-center text-cyan-600 text-sm font-normal font-['Poppins']">Delete My Account</div>
</div>

import React, { useState } from 'react';
import { Image, Pressable , SafeAreaView, Text, View } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';

function EditProfileScreen(props) {
  const [enterfirstname,setEnterFirstName]= useState('');
  const [enterlastname,setEnterLastName]= useState('');
  const [enteryouremail,setEnterYourEmail]= useState('');
  const [entermobilenumber,setEnterMobileNumber]= useState('');
  const onChangePasswordPressed =()=>{};
  const onUpdateAccountPressed =()=>{};
  const onDeleteMyAccountPressed =()=>{};
  return (
   <SafeAreaView>
    <View style={{width:'auto', height:117, absolute, backgroundColor:'#98ff98', borderRadius:13}} >
      <Text style={{paddingLeft:162, paddingTop:74, absolute, fontSize:'extra-large', fontWeight:'bold', fontVariant:'Poppins'}} >Edit Profile</Text>
    </View>
    <View style={{width:117, height:117, paddingLeft:158, paddingTop:137, absolute}} >
      <Image
        source={require('../assets\jake.jpg')}
        resizeMode='contain'
        style={{width:113, height:113, absolute, borderRadius:'full'}}
      />
      <Image
        source={require('')}
        resizeMode='center'
        style={{width:39, height:39, paddingLeft:78, paddingTop:78,  absolute, backgroundColor:'#86cbe6', borderRadius:'full'}}
      />
    </View>
    <CustomInput
      placeholder="First Name"
      value={enterfirstname}
      setValue={setEnterFirstName}
      type='SECONDARY'
      paddingLeft={20}
      paddingTop={288}
    />
    <CustomInput
      placeholder="Last Name"
      value={enterlastname}
      setValue={setEnterLastName}
      type='SECONDARY'
      paddingLeft={20}
      paddingTop={359}
    />
    <CustomInput
      placeholder="Email"
      value={enteryouremail}
      setValue={setEnterYourEmail}
      type='SECONDARY'
      paddingLeft={20}
      paddingTop={430}
    />
    <CustomInput
      placeholder="Mobile Number"
      value={entermobilenumber}
      setValue={setEnterMobileNumber}
      type='SECONDARY'
      paddingLeft={20}
      paddingTop={502}
    />
    <Pressable
    onPress={onChangePasswordPressed}
    style={{width:337, height:61, paddingLeft:20, paddingTop:603, absolute, backgroundColor:'#f5f4f4', borderRadius:10, borderColor:'#86cbe6'}}>
      <Text style={{paddingLeft:43.93, paddingTop:15.03, absolute, textAlign:'center', fontSize:20.95, fontWeight:'500', fontVariant:'Poppins'}}>Change Password</Text>
    </Pressable>
    <CustomButton
      text='Update Account'
      onPress={onUpdateAccountPressed}
      type='PRIMARY'
      paddingLeft={20}
      paddingTop={684}
    />
    <CustomButton
      text='Delete My Account'
      onPress={onDeleteMyAccountPressed}
      type='TERTIARY'
      paddingLeft={150}
      paddingTop={765}
    />
   </SafeAreaView>
  );
}

export default EditProfileScreen;