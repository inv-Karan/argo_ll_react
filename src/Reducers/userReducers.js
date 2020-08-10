import {userConstants} from '../Constants/userConstants';

const initialState = {
    usrname: "",
    pswd: ""
};

export const userReducers = (state=initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                ...state,
                usrname: action.payload.usrname,
                pswd: action.payload.pswd
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                ...state,
                usrname: action.payload.usrname,
                pswd: action.payload.pswd
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        default:
            return state
    };
};