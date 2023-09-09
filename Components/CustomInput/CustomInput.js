import React from 'react';
import{view, Text, TextInput, StyleSheet} from 'react-native';

function CustomInput ({value, setValue, placeholder, secureTextEntry}) {
    return (
        <view style={styles.container}>
       <TextInput 
       value={value}
       onChangeText={setValue}
       placeholder={placeholder}
       style={styles.input}
        secureTextEntry={true}
       />
       </view>
    );
};
const styles= StyleSheet.create({
container:{
    backgroundColor:'white',
    width: '100%',

    borderColor:'#000000',
    borderWidth:1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
},
input:{},
});
export default CustomInput;