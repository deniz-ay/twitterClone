
import React from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';

const Input = (props) =>{ 
    return(
        
        <TextInput 
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        value={props.value}
        style={[style.input,props.styles]} 
          multiline={props.multiline}
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
