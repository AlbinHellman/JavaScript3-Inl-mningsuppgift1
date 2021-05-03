import { combineReducers } from 'redux';

import postsReducer from './postsReducer'
import auth from './authReducer'
import cartReducer from './cartReducer';
import productCatalogReducer from './productCatalogReducer';

export default combineReducers({
    productCatalog: productCatalogReducer,
    cartReducer,
    postsReducer,
    auth,

})