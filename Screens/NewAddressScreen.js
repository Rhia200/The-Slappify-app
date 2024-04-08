<div className="NewAddress w-[430px] h-[932px] relative bg-zinc-100">
  <div className="Rectangle23 w-[430px] h-[117px] left-0 top-0 absolute bg-green-300 rounded-[13px]" />
  <div className="NotificationBar w-[326px] h-[25px] left-[38px] top-[12px] absolute">
    <div className="26 w-[47.22px] h-[25px] left-[-17px] top-[3px] absolute text-black text-base font-bold font-['Poppins']">02:26</div>
  </div>
  <div className="AddressDetails left-[136px] top-[74px] absolute text-black text-xl font-bold font-['Poppins']">Address Details</div>
  <div className="Input6 w-[390px] h-[59px] left-[20px] top-[154px] absolute">
    <div className="Rectangle31 w-[390px] h-[59px] left-0 top-0 absolute bg-zinc-100 rounded-[10px] border border-sky-300" />
    <div className="GoogleAddress left-[12px] top-[4px] absolute text-center text-black text-[13.17px] font-light font-['Poppins']">Google Address</div>
  </div>
  <div className="Input8 w-[390px] h-[185px] left-[20px] top-[358px] absolute">
    <div className="Rectangle31 w-[390px] h-[185px] left-0 top-0 absolute bg-zinc-100 rounded-[10px] border border-sky-300" />
    <div className="DeliveryNotes w-[104px] h-[35px] left-[12px] top-[3px] absolute text-center text-black text-[13.17px] font-light font-['Poppins']">Delivery Notes</div>
  </div>
  <div className="Input7 w-[390px] h-[59px] left-[20px] top-[222px] absolute">
    <div className="Rectangle31 w-[390px] h-[59px] left-0 top-0 absolute bg-zinc-100 rounded-[10px] border border-sky-300" />
    <div className="HouseNumber left-[16px] top-[4px] absolute text-center text-black text-[13.17px] font-light font-['Poppins']">House Number</div>
  </div>
  <div className="Input6 w-[390px] h-[59px] left-[20px] top-[290px] absolute">
    <div className="Rectangle31 w-[390px] h-[59px] left-0 top-0 absolute bg-zinc-100 rounded-[10px] border border-sky-300" />
    <div className="StreetName left-[16px] top-[4px] absolute text-center text-black text-[13.17px] font-light font-['Poppins']">Street Name</div>
  </div>
  <div className="Group6 w-[390px] h-[61px] left-[20px] top-[590px] absolute">
    <div className="Button w-[390px] h-[61px] left-0 top-0 absolute justify-center items-center inline-flex">
      <div className="Rectangle1 w-[390px] h-[61px] bg-sky-300 rounded-[10px]" />
    </div>
    <div className="SaveDeliveryAddress left-[76px] top-[16px] absolute text-center text-black text-[20.95px] font-semibold font-['Poppins']">Save Delivery Address</div>
  </div>
</div>



import React from 'react';

function NewAddressScreen(props) {
  const [googleaddress, setGoogleAddress]=useState('');
  const [housenumber, setHouseNumber]=useState('');
  const [streetname, setStreetName]=useState('');
  const [deliverynotes, setDeliveryNotes]=useState('');
  const onSaveDeliveryAddressPressed =()=>{};
 
  return (
    <SafeAreaView>
      <View>
        <Text>Address Details</Text>
      </View>
      <CustomInput
        placeholder='Google Address'
        value={googleaddress}
        setValue={setGoogleAddress}
        type='SECONDARY'
      />
      <CustomInput
        placeholder='House Number'
        value={housenumber}
        setValue={setHouseNumber}
        type='SECONDARY'
      />
      <CustomInput
        placeholder='Street Name'
        value={streetname}
        setValue={setStreetName}
        type='SECONDARY'
      />
      <CustomInput
        placeholder='Delivery Notes'
        value={deliverynotes}
        setValue={setDeliveryNotes}
        type='SECONDARY'/>
      
      <CustomButton
        text='Save Delivery Address'
        onPress={onSaveDeliveryAddressPressed}
        type='PRIMARY'
      />
    </SafeAreaView>
  );
}

export default NewAddressScreen;