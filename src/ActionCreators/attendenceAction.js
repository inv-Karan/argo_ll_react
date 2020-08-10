import {attendanceConstants} from '../Constants/attendanceConstant'
import {showAttendance, addAttendance, deleteAttendance, updateAttendance} from '../Utility/API/attendanceServices'

function attendanceShow(details) {
    return {
        type: attendanceConstants.ATTENDANCE_SHOW, 
        payload: details
    };
};

function attendanceUpdate(details) {
    return {
        type: attendanceConstants.ATTENDANCE_UPDATE,
        payload: details
    };
};

function attendanceAdd(details) {
    return {
        type: attendanceConstants.ATTENDANCE_NEW,
        payload: details
    };
};

function attendanceDelete(details) {
    return {
        type: attendanceConstants.ATTENDANCE_DELETE,
        payload: details
    };
};

function getAttendance(userId) {
    return dispatch => {
           showAttendance(userId)
           .then(res => {
               const data = res.data.details
               dispatch(attendanceShow(data))
           })
           .catch(err => {
           })
    };
};

function editAttendance(id, data) {
    debugger
    return dispatch => {
        updateAttendance(id, data)
        .then(res => {
            debugger
            const data = res.data.details
            dispatch(attendanceUpdate(data))
        })
        .catch(err => {
            debugger
        })
    };
};

function newAttendance(obj) {
    return dispatch => {
        addAttendance(obj)
        .then(res => {
            const data = res.data.details
            dispatch(attendanceAdd(data))
        })
        .catch(err => {

        })
    };
};

function removeAttendance(obj) {
    return dispatch => {
        deleteAttendance(obj)
        .then(res => {
            const data = res.data.details
            dispatch(attendanceDelete(data))
        })
        .catch(err => {

        })
    };
};

export {getAttendance, editAttendance, newAttendance, removeAttendance}