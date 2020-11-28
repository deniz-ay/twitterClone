import React, { useState,} from 'react';
import { Text, View, SafeAreaView,Image,Button } from 'react-native';

import {  Input } from '../../Components';
import { colors } from '../../style';
import { Icon } from 'native-base';


import { connect } from 'react-redux';
import { addTweet } from '../../Actions/TweetActions';

const AddTweet = (props) => {

    const [tweet, setTweet] = useState('')



    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <Text onPress={() => props.navigation.pop()} style={{ color: colors.main, fontSize: 14 }}>Vazgeç</Text>
                <Button
                    title={'Tweetle'}
                   
                   
                    onPress={() => {
                         props.addTweet({
                            tweet: {
                             text: tweet
                        //         image
                         },
                        //     user: {
                        //         profile_url: props.user.profile_image,
                        //         name: props.user.name,
                        //         username: props.user.username
                        //     },
                        //     fav: [],
                        //     retweet: [],
                        //     comment: [],
                        //     createdDate: new Date()
                        })
                    }}
                    style={{ width: '20%', height: 30 }}
                />
            </View>

            <View style={{ flex: 12, padding: 10 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Icon name={'user'} type='FontAwesome' size={40} onPress={() => { }} />

                    <Input
                        placeholder='Neler oluyor?'
                        styles={{ flex: 1, height: 100, padding: 10, borderBottomWidth: 0 }}
                        value={tweet}
                        maxLength={140}
                        onChangeText={(tweet) => setTweet(tweet)}
                        autoFocus
                        multiline
                    />
                </View>
                {/* {image &&
                        <View style={{ alignItems: 'center'}}>
                            <Image
                                source={{ uri: image }}
                                style={{ width: '90%', height: '50%' }}
                                resizeMode='cover'
                            />
                        </View>

                    } */}

            </View>


        </SafeAreaView>
    )
}


const mapStateToProps = ({ authResponse, tweetResponse }) => {
    const { user } = authResponse;
    return { user};
};

export default connect(mapStateToProps, {addTweet })(AddTweet);