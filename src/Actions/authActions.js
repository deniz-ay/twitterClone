import {Alert} from 'react-native';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILD,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILD,
} from './types';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import * as RootNavigation from '../RootNavigation';
export const Login = (params) => {
  return (dispatch) => {
    if (params.userName != '' && params.password != '') {
      dispatch({type: LOGIN_START});
      auth()
        .signInWithEmailAndPassword(params.userName, params.password)
        .then((data) => {
          console.log('User account created & signed in!', data);
          const uid = data.user._user.uid;
          firestore() //read fire store
            .collection('Users')
            .doc(uid)
            .get()
            .then((userData) => {
              console.log('login succes', userData._data);

              dispatch({type: LOGIN_SUCCESS, payload: userData._data});
            })
            .catch((err) => {
              dispatch({type: LOGIN_FAILD});
              console.log(err);
            });
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } else {
      Alert.alert('Boş Alanları Doldurun');
    }
  };
};

export const Register = (params) => {
  return (dispatch) => {
    dispatch({type: REGISTER_START});

    if (params.email != '' && params.password != '') {
      auth()
        .createUserWithEmailAndPassword(params.email, params.password)
        .then((data) => {
          console.log('User account created &!', data);
          const uid = data.user._user.uid;
          const setData = {
            username: params.username,
            email: params.email,
            name: params.name,
          };
          firestore()
            .collection('Users')
            .doc(uid)
            .set(setData)
            .then(() => {
              console.log('User added!');
            })
            .catch(() => {
              Alert.alert('we have problem the write data on firestore');
            });

          RootNavigation.pop();
        })

        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } else {
      Alert.alert('Boş Alanları Doldurun');
    }
  };
};
export const isUser = () => {
  return (dispatch) => {
    auth().onAuthStateChanged((data) => {
      console.log('isUser dan gelen değer ', data);
   if(data){
    const uid = data._user.uid;
    getUser(uid, dispatch);
   }
   else {
     dispatch({type:LOGIN_FAILD})
   }
    });
  };
};
export const signOut = () => {
  return (dispatch) => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
};

const getUser = (uid, dispatch) => {
  firestore() //read fire store
    .collection('Users')
    .doc(uid)
    .get()
    .then((userData) => {
      console.log('login succes', userData._data);

      dispatch({type: LOGIN_SUCCESS, payload: userData._data});
    })
    .catch((err) => {
      dispatch({type: LOGIN_FAILD});
      console.log(err);
    });
};
