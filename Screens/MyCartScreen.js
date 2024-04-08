<div className="MyCart w-[430px] h-[932px] relative bg-zinc-300">
  
  <div className="Rectangle23 w-[430px] h-[117px] left-0 top-0 absolute bg-green-300 rounded-[13px]" />
  
  <div className="NotificationBar w-[326px] h-[25px] left-[38px] top-[12px] absolute">
    <div className="26 w-[47.22px] h-[25px] left-[-17px] top-[3px] absolute text-black text-base font-bold font-['Poppins']">02:26</div>
  </div>
  
  <div className="MyCart left-[175px] top-[72px] absolute text-black text-xl font-bold font-['Poppins']">My Cart</div>
  
  <div className="Frame10 h-[90px] left-0 top-[126px] absolute justify-end items-center inline-flex">
    <div className="Item w-[504px] h-[90px] relative">
      <div className="Rectangle57 w-[504px] h-[90px] left-0 top-0 absolute bg-zinc-300 border border-black" />
      <div className="Rectangle56 w-[430px] h-[87px] left-0 top-[1px] absolute bg-zinc-100" />
      <div className="ExodusCheesePerGram w-[165px] h-5 left-[123px] top-[38px] absolute text-black text-xs font-medium font-['Poppins']">Exodus Cheese (per gram)</div>
      <img className="Rectangle47 w-[89.19px] h-14 left-[3.43px] top-[15px] absolute rounded-[10.63px]" src="https://via.placeholder.com/89x56" />
      <div className="X w-[18px] h-[18px] left-[104px] top-[36px] absolute text-black text-[13.11px] font-medium font-['Poppins']">4x</div>
      <div className="R60000 left-[358px] top-[38px] absolute text-black text-sm font-semibold font-['Poppins']">R600.00</div>
    </div>
  </div>

  <div className="Frame11 h-[90px] left-0 top-[217px] absolute justify-end items-center inline-flex">
    <div className="Item w-[504px] h-[90px] relative">
      <div className="Rectangle57 w-[504px] h-[90px] left-0 top-0 absolute bg-zinc-300 border border-black" />
      <div className="Rectangle56 w-[430px] h-[87px] left-0 top-[1px] absolute bg-zinc-100" />
      <div className="Brownies50mg left-[124px] top-[36px] absolute text-black text-[13.11px] font-medium font-['Poppins']">Brownies (50mg)</div>
      <div className="X w-[18px] h-[18px] left-[104px] top-[36px] absolute text-black text-[13.11px] font-medium font-['Poppins']">3x</div>
      <div className="R30000 left-[358px] top-[35px] absolute text-black text-sm font-semibold font-['Poppins']">R300.00</div>
      <img className="Rectangle48 w-[89.19px] h-14 left-[3px] top-[17px] absolute rounded-[10.63px]" src="https://via.placeholder.com/89x56" />
    </div>
  </div>

  <div className="Frame12 h-[90px] left-0 top-[308px] absolute justify-end items-center inline-flex">
    <div className="Item w-[504px] h-[90px] relative">
      <div className="Rectangle57 w-[504px] h-[90px] left-0 top-0 absolute bg-zinc-300 border border-black" />
      <div className="Rectangle56 w-[430px] h-[87px] left-0 top-[1px] absolute bg-zinc-100" />
      <div className="BiscottiPerGram w-[129px] h-5 left-[123px] top-[38px] absolute text-black text-[13.11px] font-medium font-['Poppins']">Biscotti (per gram)</div>
      <div className="X w-[18px] h-[18px] left-[104px] top-[36px] absolute text-black text-[13.11px] font-medium font-['Poppins']">4x</div>
      <div className="R60000 left-[358px] top-[38px] absolute text-black text-sm font-semibold font-['Poppins']">R600.00</div>
      <img className="Rectangle48 w-[89.19px] h-14 left-[3px] top-[15px] absolute rounded-[10.63px]" src="https://via.placeholder.com/89x56" />
    </div>
  </div>

  <div className="Frame11 w-[430px] h-[90px] pt-px pb-0.5 left-0 top-[399px] absolute border border-black justify-center items-center inline-flex">
    <div className="Item w-[430px] h-[87px] relative">
      <div className="Rectangle56 w-[430px] h-[87px] left-0 top-0 absolute bg-zinc-100" />
      <div className="DeliveryFee w-20 h-5 left-[104px] top-[37px] absolute text-black text-xs font-semibold font-['Poppins']">Delivery Fee</div>
      <img className="Rectangle47 w-[89.19px] h-16 left-[3.43px] top-[10px] absolute rounded-[10.63px]" src="https://via.placeholder.com/89x64" />
      <div className="R3000 left-[364px] top-[37px] absolute text-black text-sm font-semibold font-['Poppins']">R30.00</div>
    </div>
  </div>

  <div className="Total w-[430px] h-[55px] left-0 top-[491px] absolute">
    <div className="Rectangle57 w-[430px] h-[55px] left-0 top-0 absolute bg-zinc-100" />
    <div className="R1530 left-[367px] top-[18px] absolute text-black text-sm font-semibold font-['Poppins']">R1 530</div>
    <div className="Total left-[17px] top-[18px] absolute text-black text-sm font-semibold font-['Poppins']">Total: </div>
  </div>

  <div className="Group6 w-[390px] h-[61px] left-[20px] top-[775px] absolute">
    <div className="Button w-[390px] h-[61px] left-0 top-0 absolute justify-center items-center inline-flex">
      <div className="Rectangle1 w-[390px] h-[61px] bg-sky-300 rounded-[10px]" />
    </div>
    <div className="Checkout left-[143px] top-[18px] absolute text-center text-black text-[20.95px] font-semibold font-['Poppins']">Checkout</div>
  </div>
</div>

import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

function MyCartScreen(props) {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity>
          <Icon.Greater/> 
        </TouchableOpacity>
        <View>
          <Text>My Cart</Text>
          <Text>Canna Organic</Text>
        </View>
      </View>

      <ScrollView>
        <View>
          <Text>2 x </Text>
          <Image/>
          <Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MyCartScreen;