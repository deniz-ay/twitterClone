import {Icon} from 'native-base';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Input} from '../../Components';
import { connect } from 'react-redux';
import {Register} from '../../Actions/authActions'

const registerPage = (props) => {
  const [name, setName] = useState('deniz');
  const [username, setUsername] = useState('denizay');
  const [email, setEmail] = useState('denizay@mail.com');
  const [password, setPassword] = useState('123456');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.logoView}>
            <Icon name="twitter" type="FontAwesome" style={styles.icon} />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputView}>
              <Input
                placeholder={'isim'}
                value={name}
                onChangeText={(name) => setName(name)}
              />
              <Input
                placeholder={'kullanıcı adı'}
                value={username}
                onChangeText={(username) => setUsername(username)}
              />
              <Input
                placeholder={'email'}
                value={email}
                onChangeText={(email) => setEmail(email)}
              />
              <Input
                placeholder={'şifre'}
                secureTextEntry
                value={password}
                onChangeText={(password) => setPassword(password)}
              />
              <Button 
              text={'Login'}
              style={styles.button} 
              onPress={()=>{
                let obj={
                  username,
                  password,
                  email,
                  name,
                }
                props.Register(obj);
              }}/>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5EAADE',
  },
  logoView: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    color: 'white',
    fontSize: 60,
  },
  inputContainer: {
    flex: 4,
  },
  inputView: {
    flex: 3,

    alignItems: 'center',
    paddingVertical: 30,
  },

  button: {
    borderWidth: 1,
    borderColor: 'white',
    width: '85%',
  },
});
const mapStateProps=({authResponse})=>{
  const {list}=authResponse;
  return {list};

}
export default connect(mapStateProps,{Register})(registerPage)