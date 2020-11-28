import React from 'react';
import { Text, View,ActivityIndicator } from 'react-native';
import HomeDetail from './HomeDetail';
import { Icon, Fab } from 'native-base';
import { connect } from 'react-redux';
const Home = (props) => {
    
    return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text onPress={()=>{
            props.navigation.navigate('HomeDetail')
        }}>Home</Text>
        <Fab
            active={true}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
           onPress={()=>{
               props.navigation.navigate('MyModal')
           }}
          >
            <Icon name="pencil" type={'FontAwesome'} />
          </Fab>
    </View>
);}

const mapStateToProps = ({ authResponse,  }) => {
    const { user } = authResponse;
    return { user};
};

export default connect(mapStateToProps, { })(Home);
