import {Alert} from 'react-native';
import {
 ADD_TWEET_START,
 ADD_TWEET_SUCCESS,
 ADD_TWEET_FAILD
} from './types';

import firestore from '@react-native-firebase/firestore';

import * as RootNavigation from '../RootNavigation';

export const addTweet = (params) => {
  return (dispatch) => {
    dispatch({type:ADD_TWEET_START,payload:params})  
    firestore()
    .collection('Tweets')
    .add(params)
    .then((data) => {
      console.log('Tweets added!',data);
      dispatch({type:ADD_TWEET_SUCCESS,payload:params})
      RootNavigation.pop(); 
    }).catch((err)=>{
        console.log('Cant add tweets',err)
        dispatch({type:ADD_TWEET_FAILD,payload:params}) 
    });
  };
};
