import React from 'react';
import{view, Text, StyleSheet, Pressable} from 'react-native';

function CustomButton({onPress, text, type="PRIMARY", bgColor, fgColor})  {
    return (
       <Pressable 
         onPress={onPress}
         style={[
            styles.container, 
            styles['container_${type}'],
            bgColor ? {backgroundColor: bgColor} : {}
            ]}>
        <Text style={[
            styles.text,
            styles['text_${type}'],
            fgColor ? {color:fgColor} : {},
            ]}
            >{text}</Text>
       </Pressable>
    );
};

const styles = StyleSheet.create({
    container:{
       width:'100%',

        padding: 15,
        marginVertical:5,

        alignItems:'center',
        borderRadius: 5.
    },

    container_PRIMARY:{
        backgroundColor:'#0097b2',
    },
    container_SECONDARY:{
        borderColor: '#0097b2',
        borderWidth:2, 
    },
    container_TERTIARY:{

    },

    text:{
        fontWeight:'bold',
        color:'white',
    },

 text_SECONDARY:{
        color:'#0097b2'
    }, 

    text_TERTIARY:{
      color:'gray'
    }
   
})

export default CustomButton;