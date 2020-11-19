import React from 'react';
import { Text, View } from 'react-native';

const Search = (props) => (
    <View>
        <Text onPress={()=>{
            props.navigation.navigate('SearchDetail')
        }}>Search</Text>
    </View>
);

export default Search;
