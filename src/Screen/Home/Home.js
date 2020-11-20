import React from 'react';
import { Text, View,ActivityIndicator } from 'react-native';
import HomeDetail from './HomeDetail';

const Home = (props) => (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text onPress={()=>{
            props.navigation.navigate('HomeDetail')
        }}>Home</Text>
       
    </View>
);

export default Home;
