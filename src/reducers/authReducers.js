import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILD,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILD,
  SIGN_OUT_SUCCESS
} from '../Actions/types';

const INITIAL_STATE = {
  loading: true,
  user: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_START:
      console.log('login start');
    case REGISTER_START:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      console.log('login succes');
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case LOGIN_FAILD:
      console.log('login faild');
    case REGISTER_FAILD:
      return {
        ...state,
        loading: false,
        user:null,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: null,
        loading:false,
      };

    default:
      return state;
  }
};
