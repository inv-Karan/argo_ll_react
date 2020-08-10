import {activityConstants} from '../Constants/activityConstant'
import {showActivity, addActivity, deleteActivity, updateActivity} from '../Utility/API/activityServices'

function activityShow(activities) {
    return {
        type: activityConstants.ACTIVITY_SHOW, 
        payload: activities
    };
};

function activityUpdate(activities) {
    return {
        type: activityConstants.ACTIVITY_UPDATE,
        payload: activities
    };
};

function activityAdd(activities) {
    return {
        type: activityConstants.ACTIVITY_NEW,
        payload: activities
    };
};

function activityDelete(activities) {
    return {
        type: activityConstants.ACTIVITY_DELETE,
        payload: activities
    };
};

function getActivity(userId) {
    return dispatch => {
           showActivity(userId)
           .then(res => {
               const data = res.data.activities
               dispatch(activityShow(data))
           })
           .catch(err => {
           })
    };
};

function editActivity(id, data) {
    debugger
    return dispatch => {
        updateActivity(id, data)
        .then(res => {
            debugger
            const data = res.data.activities
            dispatch(activityUpdate(data))
        })
        .catch(err => {
            debugger
        })
    };
};

function newActivity(obj) {
    return dispatch => {
        addActivity(obj)
        .then(res => {
            const data = res.data.activities
            dispatch(activityAdd(data))
        })
        .catch(err => {

        })
    };
};

function removeActivity(obj) {
    return dispatch => {
        deleteActivity(obj)
        .then(res => {
            const data = res.data.activities
            dispatch(activityDelete(data))
        })
        .catch(err => {

        })
    };
};

export {getActivity, editActivity, newActivity, removeActivity}