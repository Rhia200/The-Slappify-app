<div className="Menu w-[430px] h-[932px] relative bg-zinc-100">
  <div className="NotificationBar w-[326px] h-[25px] left-[38px] top-[12px] absolute">
    <div className="26 w-[47.22px] h-[25px] left-[-17px] top-[3px] absolute text-black text-base font-bold font-['Poppins']">02:26</div>
  </div>
  <div className="Rectangle19 w-[430px] h-[77px] left-0 top-[215px] absolute bg-green-300 rounded-[25px]" />
  <div className="Rectangle20 w-[430px] h-[77px] left-0 top-[303px] absolute bg-green-300 rounded-[25px]" />
  <div className="MyProfile w-[430px] h-[77px] left-0 top-[127px] absolute">
    <div className="Rectangle18 w-[430px] h-[77px] left-0 top-0 absolute bg-green-300 rounded-[25px]" />
    <div className="MyProfile left-[87px] top-[19.72px] absolute text-center text-black text-[28.18px] font-semibold font-['Poppins']">My Profile</div>
    <div className="SmileBeam w-[47.50px] h-[47.50px] left-[18px] top-[141.50px] absolute bg-black bg-opacity-0" />
  </div>
  <div className="DriverMode left-[88px] top-[234.72px] absolute text-center text-black text-[28.18px] font-semibold font-['Poppins']">Driver Mode</div>
  <div className="DispensaryMode left-[87px] top-[322.72px] absolute text-center text-black text-[28.18px] font-semibold font-['Poppins']">Dispensary Mode</div>
  <div className="Cannabis w-[47px] h-[47px] left-[19px] top-[319.50px] absolute bg-black bg-opacity-0" />
  
  <div className="Menu left-[175px] top-[66px] absolute text-center text-black text-[28.18px] font-semibold font-['Poppins']">Menu</div>
</div>

import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function MenuScreen(props) {
  return (
    <SafeAreaView style={{backgroundColor:'#e3e6e3'}}>
      <Text style={{paddingLeft:175, paddingTop:66, absolute, textAlign:'center', fontSize:28.18, fontWeight:'500', font: 'Poppins'}} >
      Menu
      </Text>
      <TouchableOpacity style={{flexDirection:'column'}}>
          <View style={{width:'auto', height:77, paddingTop:127, absolute, backgroundColor:'#98ff98',rounded:25}}>
            <Text style={{paddingLeft:87, paddingTop:19.72, absolute, textAlign:'center', fontSize:28.18, fontWeight:'500', fontVariant:'Poppins'}} >
              My Profile
            </Text>
            <Image
              source={''}
              style={{width:47, height:47, paddingLeft:19, paddingTop:16.50}}
            />
          </View>
          <View style={{width:'auto', height:77, paddingTop:215, absolute, backgroundColor:'#98ff98',rounded:25}}>
            <Text style={{paddingLeft:87, paddingTop:19.72, absolute, textAlign:'center', fontSize:28.18, fontWeight:'500', fontVariant:'Poppins'}} >
              Driver Mode
            </Text>
            <Image
              source={''}
              style={{width:47, height:47, paddingLeft:19, paddingTop:16.50}}
            />
          </View>
          <View style={{width:'auto', height:77, paddingTop:303, absolute, backgroundColor:'#98ff98',rounded:25}}>
            <Text style={{paddingLeft:87, paddingTop:19.72, absolute, textAlign:'center', fontSize:28.18, fontWeight:'500', fontVariant:'Poppins'}} >
              Dispensary Mode
            </Text>
            <Image
              source={''}
              style={{width:47, height:47, paddingLeft:19, paddingTop:16.50}}
            />
          </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default MenuScreen;