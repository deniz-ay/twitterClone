import React from 'react';
import { Text, View } from 'react-native';
import HomeDetail from './HomeDetail';

const Home = (props) => (
    <View>
        <Text onPress={()=>{
            props.navigation.navigate('HomeDetail')
        }}>Home</Text>
    </View>
);

export default Home;
