import {Icon} from 'native-base';
import React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, CheckBox, Input} from '../Components';

const loginPage = (props) => {
  const [userName,setUserName]=useState('') ; 
  const [password,setPassword]=useState('') ;
  const [status,setStatus]=useState(true) ;
   
  return(
  <SafeAreaView style={{flex: 1, backgroundColor: '#5EAADE'}}>
    <ScrollView contentContainerStyle={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.iconView}>
          <Icon style={styles.icon} type="FontAwesome" name={'twitter'} />
        </View>

        <View style={styles.formView}>
          <Input
           placeholder={'username'} 
           onChangeText={(value)=>setUserName(value)}
           value={userName}
           />

          <Input
          placeholder={'password'} 
          secureTextEntry={status}
          onChangeText={(value)=>setPassword(value)}
          value={password}
          />
          <Button text={'Login'} style={styles.button} />
        </View>
        <View
          style={styles.footerView}>
          <TouchableOpacity>
            <Text style={styles.whiteText}>Forgot Password</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <CheckBox 
            onPress={()=>{
              setStatus(!status)
            }}
            status={status}
            />
            <Text style={styles.whiteText}>Hide Password</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  </SafeAreaView>
)};
const styles = StyleSheet.create({
  iconView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    color: 'white',
    fontSize: 60,
  },
  formView:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  button: {
    borderWidth: 1,
    borderColor: 'white',
    width: '85%',
  },
  footerView:{
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  whiteText:{
    fontWeight:'bold'
    ,color:'white'
  },
});

export default loginPage;
