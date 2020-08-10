import {notificationConstants} from '../Constants/notificationConstant'
import {showNotification, addNotification, deleteNotification, updateNotification} from '../Utility/API/notificationServices'

function notificationShow(notification) {
    return {
        type: notificationConstants.NOTIFICATION_SHOW, 
        payload: notification
    };
};

function notificationUpdate(notification) {
    return {
        type: notificationConstants.NOTIFICATION_UPDATE,
        payload: notification
    };
};

function notificationAdd(notification) {
    return {
        type: notificationConstants.NOTIFICATION_NEW,
        payload: notification
    };
};

function notificationDelete(notification) {
    return {
        type: notificationConstants.NOTIFICATION_DELETE,
        payload: notification
    };
};

function getNotification(userId) {
    return dispatch => {
           showNotification(userId)
           .then(res => {
               const data = res.data.notification
               dispatch(notificationShow(data))
           })
           .catch(err => {
           })
    };
};

function editNotification(id, data) {
    debugger
    return dispatch => {
        updateNotification(id, data)
        .then(res => {
            debugger
            const data = res.data.notification
            dispatch(notificationUpdate(data))
        })
        .catch(err => {
            debugger
        })
    };
};

function newNotification(obj) {
    return dispatch => {
        addNotification(obj)
        .then(res => {
            const data = res.data.notification
            dispatch(notificationAdd(data))
        })
        .catch(err => {

        })
    };
};

function removeNotification(obj) {
    return dispatch => {
        deleteNotification(obj)
        .then(res => {
            const data = res.data.notification
            dispatch(notificationDelete(data))
        })
        .catch(err => {

        })
    };
};

export {getNotification, editNotification, newNotification, removeNotification}