import {notificationConstants} from '../Constants/notificationConstant';

const initialState = {
    notification: []
};

export const notificationReducers = (state=initialState, action) => {
    switch (action.type) {
        case notificationConstants.NOTIFICATION_SHOW:
            debugger
            return {
                ...state,
                notification: action.payload
            };
        case notificationConstants.NOTIFICATION_UPDATE:
            debugger
            return {
                ...state,
                notification: action.payload
            }
        case notificationConstants.NOTIFICATION_NEW:
            debugger
            return {
                ...state,
                notification: action.payload
            }
        case notificationConstants.NOTIFICATION_DELETE:
            debugger
            return {
                ...state,
                notification: action.payload
            }
        default:
            return state
    };
};