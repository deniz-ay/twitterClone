import {Icon} from 'native-base';
import React,{useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import {Button} from '../../Components';
import {isUser} from '../../Actions/authActions'
const firtPage = (props) => {

useEffect(()=>{
props.isUser();

},[]);
if (props.loading){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <ActivityIndicator size='large' color='#00ff00' />
    </View>
  )
}
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

const mapStateToProps = ({ authResponse }) => {
  const { list,loading } = authResponse;
  return { list,loading };
};

export default connect(mapStateToProps, { isUser })(firtPage);
