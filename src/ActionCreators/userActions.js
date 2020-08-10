import {userConstants} from '../Constants/userConstants';
import {alertActions} from '../ActionCreators/alertActions';
import axios from 'axios';

export const userActions = {
    Login_In,
    // Login_Up
};


function Login_In(user) {
    return dispatch => {
        // dispatch(request({usrname, pswd}));
        let cred = {
            email: user.usrname, 
            password: user.pswd
        };
        debugger
        axios.post("http://logicalloop.com/farmeasy/api/login",
        {cred}
        )
            .then(
                res => {debugger
                    console.log(res.data);
                }
            )  
            .catch(
                error => {debugger
                    console.log(error);
                }
            ) 
            // .then(
            //     user => {
            //         dispatch(success(cred));
            //         dispatch(alertActions.success(success));
            //     })
            // .catch(
            //     error => {
            //         dispatch(failure(cred));
            //         dispatch(alertActions.error(error));
            //     })
    };

    // function request(user) {
    //     return {
    //         type: userConstants.LOGIN_REQUEST, user
    //     };
    // };

    // function success(user) {
    //     return {
    //         type: userConstants.LOGIN_SUCCESS, user
    //     };
    // };

    // function failure(user) {
    //     return {
    //         type: userConstants.LOGIN_FAILURE, user
    //     };
    // };
};

function Login_Up(user) {
    return dispatch => {
        // dispatch(request(user));
        axios.post("https://logicalloop.com/farmeasy/api/signup",
        {user}
        )
            .then(
                res=> {
                    console.log(res.data);
                }
            )
            .catch(
                res => {
                    console.log(res.data);
                }
            )
    };

//             .then(
//                 user => {
//                     dispatch(success(user)); 
//                     dispatch(alertActions.success('Registration successful'))
//                 })
//             .catch(
//                 error => {
//                     dispatch(failure(error));
//                     dispatch(alertActions.error(error));
//                 })
//     };

    // function request(user) {
    //     return {
    //         type: userConstants.REGISTER_REQUEST, user
    //     };
    // };

//     function success(user) {
//         return {
//             type: userConstants.REGISTER_SUCCESS, user
//         };
//     };

//     function failure(user) {
//         return {
//             type: userConstants.REGISTER_FAILURE, user
//         };
//     };
};