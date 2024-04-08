<div className="MyAddress w-[430px] h-[932px] relative bg-zinc-100">
  <div className="NotificationBar w-[326px] h-[25px] left-[38px] top-[12px] absolute">
    <div className="26 w-[47.22px] h-[25px] left-[-17px] top-[3px] absolute text-black text-base font-bold font-['Poppins']">02:26</div>
  </div>

  <div className="Rectangle23 w-[430px] h-[117px] left-0 top-0 absolute bg-green-300 rounded-[13px]">
    <div className="MyAddress left-[156px] top-[74px] absolute text-black text-xl font-bold font-['Poppins']">My Address</div>
  </div>

  <div className="Rectangle33 w-[393px] h-[687px] left-[20px] top-[129px] absolute bg-zinc-100 rounded-[10px] border border-sky-300" >
    <div>
      <div className="Rectangle35 w-[391px] h-[72px] left-[21px] top-[201px] absolute bg-zinc-100 border border-sky-300" />
      <div className="Home2 left-[88px] top-[222px] absolute text-black text-xl font-bold font-['Poppins']">Home 2</div>
      <div className="Home w-[37.50px] h-[37.50px] left-[35px] top-[218px] absolute bg-black bg-opacity-0" />
    </div>
    <div>
      <div className="Rectangle34 w-[391px] h-[72px] left-[21px] top-[130px] absolute bg-zinc-100 rounded-tl-[10px] rounded-tr-[10px] border border-sky-300" />
      <div className="Home w-[37.50px] h-[37.50px] left-[35px] top-[147px] absolute bg-black bg-opacity-0" />
      <div className="Home left-[88px] top-[151px] absolute text-black text-xl font-bold font-['Poppins']">Home</div>
    </div>
  </div>

  <div className="Group6 w-[390px] h-[61px] left-[20px] top-[830px] absolute">
    <div className="Button w-[390px] h-[61px] left-0 top-0 absolute justify-center items-center inline-flex">
      <div className="Rectangle1 w-[390px] h-[61px] bg-sky-300 rounded-[10px]" />
    </div>
    <div className="AddANewAddress left-[91px] top-[16px] absolute text-center text-black text-[20.95px] font-semibold font-['Poppins']">Add a New Address</div>
  </div>
</div>












import React from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import CustomButton from '../Components/CustomButton';


function MyAddressScreen(props) {
  const onHomePressed =()=>{};
  const onHome2Pressed =()=>{};
  const onAddANewAddressPressed =()=>{};
  return (
    <SafeAreaView>
      <View style={{width:'auto', height:117, backgroundColor:'#98ff98', borderRadius:13}} >
        <Text style={{paddingLeft:156, paddingTop:74, fontSize:'extra-large', fontWeight:'bold', fontVariant:'Poppins'}}>My Address</Text>
      </View>
      
        <View style={{width:393, height:687, paddingLeft:20, paddingTop:129, backgroundColor:'#d3d3d3', borderRadius:10, borderColor:'#86cbe6'}}>
          <Pressable>
            <View style={{width:393, height:72, backgroundColor:'#d3d3d3', borderTopLeftRadius:10, borderTopRightRadius:10, borderColor:'#86cbe6'}}>
              <Image
                source={require('')}
                style={{width:37.50, height:37.50, paddingLeft:15, paddingTop:18}}
              />
              <Text style={{paddingLeft:68, paddingTop:22, fontSize:'extra-large', fontWeight:'bold', fontVariant:'Poppins'}}>Home</Text>
            </View>
            <View style={{width:393, height:72,paddingTop:72, backgroundColor:'#d3d3d3', borderColor:'#86cbe6'}}>
              <Image
                source={require('')}
                style={{width:37.50, height:37.50, paddingLeft:15, paddingTop:17}}
              />
              <Text style={{paddingLeft:68, paddingTop:21, fontSize:'extra-large', fontWeight:'bold', fontVariant:'Poppins'}}>Home 2</Text>
            </View>
          </Pressable>
        </View>
      <CustomButton
        text='Add a New Address'
        onPress={onAddANewAddressPressed}
        type='PRIMARY'
        paddingLeft={46.5}
        paddingTop={830}
      />

    </SafeAreaView>
  );
}

export default MyAddressScreen;