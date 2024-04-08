<div className="MyProfile w-[430px] h-[932px] relative bg-zinc-100">
  <div className="Rectangle23 w-[430px] h-[117px] left-0 top-0 absolute bg-green-300 rounded-[13px]" />
  <div className="Rectangle25 w-[430px] h-[310px] left-0 top-[252px] absolute bg-green-300" />
  <div className="Support w-[430px] h-[77px] left-0 top-[485px] absolute">
    <div className="Rectangle27 w-[430px] h-[77px] left-0 top-0 absolute bg-green-300 rounded-lg border border-black" />
    <div className="Support left-[38px] top-[18px] absolute text-center text-black text-xl font-normal font-['Poppins']">Support</div>
  </div>
  <div className="History w-[430px] h-[77px] left-0 top-[408px] absolute">
    <div className="Rectangle28 w-[430px] h-[77px] left-0 top-0 absolute bg-green-300 rounded-lg border border-black" />
    <div className="History left-[38px] top-[17px] absolute text-center text-black text-xl font-normal font-['Poppins']">History</div>
  </div>
  <div className="DigitalPayments w-[430px] h-[77px] left-0 top-[331px] absolute">
    <div className="Rectangle26 w-[430px] h-[77px] left-0 top-0 absolute bg-green-300 rounded-lg border border-black" />
    <div className="DigitalPayment left-[38px] top-[24px] absolute text-center text-black text-xl font-normal font-['Poppins']">Digital Payment</div>
  </div>
  <div className="NotificationBar w-[326px] h-[25px] left-[38px] top-[12px] absolute">
    <div className="26 w-[47.22px] h-[25px] left-[-17px] top-[3px] absolute text-black text-base font-bold font-['Poppins']">02:26</div>
  </div>
  <div className="Account left-[172px] top-[74px] absolute text-black text-xl font-bold font-['Poppins']">Account</div>
  <div className="LogOut w-[430px] h-[77px] left-0 top-[590px] absolute">
    <div className="Rectangle30 w-[430px] h-[77px] left-0 top-0 absolute bg-green-300 rounded-lg border border-black" />
    <div className="LogOut left-[60px] top-[24px] absolute text-center text-black text-xl font-semibold font-['Poppins']">Log Out</div>
  </div>
  <div className="Profile w-[430px] h-[117px] left-0 top-[126px] absolute">
    <div className="Rectangle24 w-[430px] h-[117px] left-0 top-0 absolute bg-green-300 rounded-2xl" />
    <img className="Ellipse1 w-[76px] h-[76px] left-[21px] top-[20px] absolute rounded-full" src="https://via.placeholder.com/76x76" />
    <div className="JakeSimpson left-[113px] top-[31px] absolute text-center text-black text-xl font-semibold font-['Poppins']">Jake Simpson</div>
    <div className="27123456789 left-[114px] top-[61px] absolute text-center text-black text-xl font-normal font-['Poppins']">+27123456789</div>
  </div>
  <div className="MyAddress w-[430px] h-[77px] left-0 top-[254px] absolute">
    <div className="Rectangle19 w-[430px] h-[77px] left-0 top-0 absolute bg-green-300 rounded-lg border border-black" />
    <div className="MyAddress left-[45px] top-[27px] absolute text-center text-black text-xl font-normal font-['Poppins']">My Address</div>
  </div>
</div>

import React from 'react';
import { SafeAreaView, Text, View, Pressable } from 'react-native';

function MyProfileScreen(props) {
  const onMyProfilePressed =()=>{};
  const onMyAddressPressed =()=>{};
  const onDigitalPaymentPressed =()=>{};
  const onHistoryPressed =()=>{};
  const onSupportPressed =()=>{};
  const onLogOutPressed =()=>{};

  return (
    <SafeAreaView>
      <View style={{width:'auto', height:117, absolute, backgroundColor:'#98ff98', borderEndEndRadius:13}}>
        <Text>Account</Text>
      </View>

      
      <Pressable>
        <View
          style={{width:'auto', height:117, paddingTop:126, absolute, backgroundColor:'#98ff98', rounded:'20'}}
          onPress={onMyProfilePressed}
        >
          <Image source={require('../assets\jake.jpg')} style={{width:76, height:76, paddingLeft:21, paddingTop:20, absolute, rounded:'full'}}/>
          <Text style={{paddingLeft:113, paddingTop:31,absolute, textAlign:'center', fontSize:'extra-large', fontWeight:'500', fontVariant:'Poppins'}} >Jake Simpson</Text>
          <Text style={{paddingLeft:114, paddingTop:61,absolute, textAlign:'center', fontSize:'extra-large', fontWeight:'normal', fontVariant:'Poppins'}}>+27123456789</Text>
        </View>
      </Pressable>
      <View style={{width:'auto', height:310, paddingTop:252, absolute, backgroundColor:'#98ff98'}}>
        <Pressable>
          <View
          style={{width:'auto', height:77, paddingTop:254, absolute, backgroundColor:'#98ff98', rounded:'10', borderColor:'black'}}
          onPress={onMyAddressPressed}
          >
            <Text style={{paddingLeft:45, paddingTop:27, absolute, textAlign:'center', fontSize:'extra-large', fontWeight:'normal', fontVariant:'Poppins'}}>My Address</Text>
          </View>
          <View
          style={{width:'auto', height:77, paddingTop:331, absolute, backgroundColor:'#98ff98', rounded:'10', borderColor:'black'}}
          onPress={onDigitalPaymentPressed}        
          >
            <Text style={{paddingLeft:38, paddingTop:24, absolute, textAlign:'center', fontSize:'extra-large', fontWeight:'normal', fontVariant:'Poppins'}}>Digital Payment</Text>
          </View>
          <View
          style={{width:'auto', height:77, paddingTop:408, absolute, backgroundColor:'#98ff98', rounded:'10', borderColor:'black'}}
          onPress={onHistoryPressed}        
          >
            <Text style={{paddingLeft:38, paddingTop:17, absolute, textAlign:'center', fontSize:'extra-large', fontWeight:'normal', fontVariant:'Poppins'}}>History</Text>
          </View>
          <View
          style={{width:'auto', height:77, paddingTop:485, absolute, backgroundColor:'#98ff98', rounded:'10', borderColor:'black'}}
          onPress={onSupportPressed}        
          >
            <Text style={{paddingLeft:38, paddingTop:18, absolute, textAlign:'center', fontSize:'extra-large', fontWeight:'normal', fontVariant:'Poppins'}}>Support</Text>
          </View>
        </Pressable>
      </View>
      
      <Pressable>
        <View
          style={{width:'auto', height:77, paddingTop:590, absolute, backgroundColor:'#98ff98', rounded:'10', borderColor:'black'}}
          onPress={onLogOutPressed}        
          >
            <Text style={{paddingLeft:60, paddingTop:24, absolute, textAlign:'center', fontSize:'extra-large', fontWeight:'500', fontVariant:'Poppins'}}>Log Out</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

export default MyProfileScreen;