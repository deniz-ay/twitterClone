
import React from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import { Icon } from 'native-base';
const Input = (props) =>{ 
    return(
        
        <TextInput 
        placeholder={'name'}
        style={[style.input,props.styles]} 
        >
        
        </TextInput>
);
}
const style=StyleSheet.create({
    input:{
        backgroundColor:'white',
        color:'#424242',
        width:'85%',
        borderRadius:10,
        padding:10,
        marginBottom:15,
        height:45,
        
       },

    })
export  {Input};
