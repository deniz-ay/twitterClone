import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

const Button = (props) => {
    return(
<TouchableOpacity style={[{width:'40%',height:50,borderRadius:20,alignItems:'center',justifyContent:'center'},props.style]} 
activeOpacity={0.7} 
onPress={props.onPress}
>
<Text style={{color:'white',fontWeight:'bold',fontSize:16}}>{props.text}</Text>
</TouchableOpacity>
);
}

export { Button};
