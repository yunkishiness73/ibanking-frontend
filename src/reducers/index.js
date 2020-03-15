import { combineReducers } from 'redux';
import authReducer from './authReducer';
import feeReducer from './feeReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    fee: feeReducer
});

export default rootReducer;