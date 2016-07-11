import { combineReducers } from 'redux';
import home from './home';
import profile from './profile';

const rootReducer = combineReducers({
    home,
    profile,
});

export default rootReducer;
