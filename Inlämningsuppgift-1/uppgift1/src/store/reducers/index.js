import { combineReducers } from 'redux';

import postsReducer from './postsReducer'
import auth from './authReducer'

export default combineReducers({
    postsReducer,
    auth

})