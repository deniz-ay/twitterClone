import {  
    ADD_TWEET_START,
    ADD_TWEET_SUCCESS,
    ADD_TWEET_FAILD,  
  


  } from '../Actions/types'; 

const INITIAL_STATE = {
    loading: false,
    tweets: []
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_TWEET_START:
          return { ...state, loading: true
        };
        case ADD_TWEET_SUCCESS:
            return { ...state, 
                loading: false,
                tweets:[action.payload,...state.tweets] 
          };
          case ADD_TWEET_FAILD:
            return { ...state, loading: false
          };



    default:
        return state;
    }
  };