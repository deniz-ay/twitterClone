import React from 'react';
import { Text, View } from 'react-native';

const Messages = (props) => (
    <View>
        <Text onPress={()=>{
            props.navigation.navigate('MessagesDetail')
        }}>Messages</Text>
    </View>
);

export default Messages;
