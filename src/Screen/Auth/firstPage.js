import {Icon} from 'native-base';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {Button} from '../../Components';
const firtPage = (props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#5EAADE'}}>
      <StatusBar barStyle="light-content" backgroundColor="#5EAADE" />
      <View style={styles.iconView}>
        <Icon style={styles.icon} type="FontAwesome" name={'twitter'} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.mainText}>Şu anda dünyada olup bitenleri gör.</Text>
        <View style={styles.bodyView}>
          <Button 
          style={styles.button} 
          text={'Sign In'}
          onPress={()=>{
            props.navigation.navigate('Login')
          }}
          />
          <Button 
          style={styles.button} 
          text={'Sign Up'} 
          onPress={()=>{
            props.navigation.navigate('Register')
          }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 60,
  },
  bodyView: {
    flexDirection: 'row',
    width: '76%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 25,
    width: '100%',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default firtPage;
