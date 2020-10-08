import { Icon } from 'native-base';
import React from 'react';
import { Text, View,TextInput, StyleSheet,Keyboard,KeyboardAvoidingView,Platform,TouchableOpacity  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


import { SafeAreaView,} from 'react-native-safe-area-context';
import {Button,Input} from '../Components'

const loginPage = (props) => (
  <SafeAreaView style={{flex:1,backgroundColor:'#5EAADE'}}>
      <ScrollView contentContainerStyle={{flex:1}}>
  <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
   <View style={styles.iconView}>

   <Icon style={styles.icon} type="FontAwesome" name={'twitter'} />
  </View> 

  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Input
      iconType={'AntDesign'}
      iconName={'eye'}
      iconStyle={{fontSize:20, textAlign:'right'}}
      /> 

      <Input />
      <Button 
      text={'Login'}
      style={styles.button}
      />

  </View> 
  <View style={{flex:1,backgroundColor:'red',}}>
 <TouchableOpacity>
     <Text>Forgot Password</Text>
 </TouchableOpacity>
  </View>
  </KeyboardAvoidingView>
  </ScrollView>
  </SafeAreaView>
);
const styles=StyleSheet.create({
    iconView: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-end'
      },
      icon: {
        color: 'white',
        fontSize: 60,
       
    
      },
      button: {
        borderWidth: 1,
        borderColor: 'white',
        width:'85%',
      },
})

export default loginPage;
