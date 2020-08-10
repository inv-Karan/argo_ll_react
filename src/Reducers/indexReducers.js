import {combineReducers} from 'redux';
// import {authentication} from './signinReducers';
// import {registration} from './signupReducers';
import {alert} from './alertReducers';
import {userReducers} from './userReducers';
import {attendanceReducers} from './attendanceReducer';
import {queryReducers} from './queryReducer';
import {permitReducers} from './permitReducer';
import {newsReducers} from './newsReducer';
import {notificationReducers} from './notificationReducer';
import {activityReducers} from './activityReducer'

const rootReducer = combineReducers({
    // authentication,
    // registration,
    alert,
    userReducers,
    attendanceReducers,
    queryReducers,
    permitReducers,
    newsReducers,
    notificationReducers,
    activityReducers
});

export default rootReducer;