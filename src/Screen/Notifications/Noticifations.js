import React from 'react';
import { Text, View } from 'react-native';

const Noticifations = (props) => (
    <View>
        <Text onPress={()=>{
            props.navigation.navigate('NoticifatiosDetail')
        }}>Noticifations</Text>
    </View>
);

export default Noticifations;
