import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import {signOut} from '../../Actions/authActions'

const Messages = (props) => (
    <View>
        <Text onPress={()=>{
           props.signOut();
        }}>Messages</Text>
    </View>
);


const mapStateToProps = ({ authResponse }) => {
    const { list } = authResponse;
    return { list };
  };
  
  export default connect(mapStateToProps, { signOut })(Messages);
