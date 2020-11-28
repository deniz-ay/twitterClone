import {combineReducers} from 'redux'
import authReducers from './authReducers'
import tweetsReducers from './tweetsReducers'
export default combineReducers({
 authResponse:authReducers,
 tweetResponse:tweetsReducers, 
});