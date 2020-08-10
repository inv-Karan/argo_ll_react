import {attendanceConstants} from '../Constants/attendanceConstant'
import {getAttendance, addAttendance, deleteAttendance, updateAttendance} from '../Utility/API/attendanceServices'

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

function showAttendance(userId) {
    return dispatch => {
           getAttendance(userId)
           .then(res => {
               const data = res.data.details
               dispatch(attendanceShow(data))
           })
           .catch(err => {
           })
    };
};

function editAttendance(obj) {
    return dispatch => {
        updateAttendance(obj)
        .then(res => {
            const data = res.data.details
            dispatch(attendanceUpdate(data))
        })
        .catch(err => {
        })
    };
};



export {showAttendance, editAttendance}