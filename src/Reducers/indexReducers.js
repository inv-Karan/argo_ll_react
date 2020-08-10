import {combineReducers} from 'redux';

// import {authentication} from './signinReducers';
// import {registration} from './signupReducers';
import {alert} from './alertReducers';
import {userReducers} from './userReducers';
import {attendanceReducers} from './attendanceReducer'

const rootReducer = combineReducers({
    // authentication,
    // registration,
    alert,
    userReducers,
    attendanceReducers
});

export default rootReducer;