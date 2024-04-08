<div className="About w-[430px] h-[932px] relative bg-zinc-100">
  <div className="Rectangle23 w-[430px] h-[117px] left-0 top-0 absolute bg-green-300 rounded-[13px]" />
  
  <div className="NotificationBar w-[326px] h-[25px] left-[38px] top-[12px] absolute">
    <div className="26 w-[47.22px] h-[25px] left-[-17px] top-[3px] absolute text-black text-base font-bold font-['Poppins']">02:26</div>
  </div>

  <div className="CannaOrganic left-[138px] top-[74px] absolute text-black text-xl font-bold font-['Poppins']">Canna Organic</div>
  
  <div className="Rectangle38 w-[430px] h-56 left-0 top-[117px] absolute bg-zinc-300" />
  
  <img className="Rectangle37 w-[395px] h-[215px] left-[17px] top-[117px] absolute rounded-[10.70px] border border-black" src="https://via.placeholder.com/395x215" />
  
  <div className="Rectangle39 w-[430px] h-[57px] left-0 top-[341px] absolute bg-zinc-100 border-b border-black">
    <div className="ReviewsRatings left-[160.50px] top-[361px] absolute text-center text-black text-xs font-bold font-['Poppins']">Reviews & Ratings</div>
    <div className="MenuItems left-[46px] top-[359.75px] absolute text-center text-black text-xs font-bold font-['Poppins']">Menu Items</div>
    <div className="Rectangle41 w-[100px] h-[45px] left-[289px] top-[346px] absolute bg-green-300 bg-opacity-50 rounded-[100px]">
      <div className="About w-[38px] h-[18px] left-[320px] top-[361px] absolute text-center text-black text-xs font-bold font-['Poppins']">About</div>
    </div>
  </div>
  
  <div className="Info w-[430px] h-[131px] left-0 top-[402px] absolute">
    <div className="Rectangle54 w-[430px] h-[131px] left-0 top-0 absolute bg-zinc-100 border-b border-black" />
    <div className="Address w-[302px] h-[18.72px] left-[13px] top-[21px] absolute">
      <div className="KingEdwardStWillowsBloemfontein9301 left-[18px] top-0 absolute text-black text-xs font-bold font-['Poppins']">23 King Edward st, Willows, Bloemfontein, 9301</div>
    </div>
    <div className="Rating w-[34px] h-[18px] left-[40px] top-[82px] absolute">
      <div className="5 left-[15px] top-0 absolute text-black text-xs font-semibold font-['Poppins']">4.5</div>
    </div>
    <div className="Time w-[136px] h-[18px] left-[12px] top-[52px] absolute">
      <div className="Open08002359 left-[22px] top-0 absolute text-black text-xs font-bold font-['Poppins']">Open: 08:00-23:59</div>
    </div>
  </div>
  
  <div className="Map w-[372px] h-[177px] left-[24px] top-[511px] absolute">
    <img className="Rectangle55 w-[372px] h-[177px] left-0 top-0 absolute rounded-[30px] border border-black" src="https://via.placeholder.com/372x177" />
  </div>

</div>

import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function AboutScreen(props) {
  return (
    <SafeAreaView>
      <StatusBar style='dark'/>
      <View style={{width:'auto', height:117, backgroundColor:'#98ff98', borderRadius:13}}>
        <Text style={{paddingLeft:138, paddingTop:74, fontSize:20, fontWeight:'bold', fontVariant:'Poppins'}}>Canna Organic</Text>
      </View>
      <Image source={require('https://via.placeholder.com/395x215')} style={{width:395, height:215, paddingLeft:17, paddingTop:117, borderRadius:10.70, borderColor:'black'}}/>
      <View style={{width:'auto', height:57, paddingTop:341, backgroundColor:'#d3d3d3', borderBottomColor:'black', flexDirection:'row'}}>
        <Pressable>
          <Text style={{paddingLeft:13, paddingTop:20, textAlign:'center', fontSize:6.11, fontWeight:'bold', fontVariant:'Poppins'}}>Menu Items</Text>
          <Text style={{paddingLeft:160.50, paddingTop:20, textAlign:'center', fontSize:6.11, fontWeight:'bold', fontVariant:'Poppins'}}>Reviews & Ratings</Text>
          <View style={{width:100, height:45, backgroundColor:'#98ff98', opacity:50, borderRadius:100, paddingLeft:289, paddingTop:3}}>
            <Text style={{paddingLeft:320, paddingTop:20, textAlign:'center', fontSize:6.11, fontWeight:'bold', fontVariant:'Poppins'}}>About</Text>
          </View>
        </Pressable>
      </View>

      <View style={{}}>
        <Text>23 King Edward st, Willows, Bloemfontein, 9301</Text>
        <Text>Open: 08:00-23:59</Text>
        <Icon.Star/><Text style={{}}>5</Text>
      </View>
      <View style={{}}>
        <GeolocationPosition/>
      </View>
    </SafeAreaView>
  );
}

export default AboutScreen;