import { combineReducers } from 'redux';
import productReducer from './productReducer.js';

const rootReducer = combineReducers({
    productReducer: productReducer
});

export default rootReducer;