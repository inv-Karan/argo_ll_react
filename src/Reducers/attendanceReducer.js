import {attendanceConstants} from '../Constants/attendanceConstant';

const initialState = {
    details: []
};

export const attendanceReducers = (state=initialState, action) => {
    switch (action.type) {
        case attendanceConstants.ATTENDANCE_SHOW:
            debugger
            return {
                ...state,
                details: action.payload
            };
        case attendanceConstants.ATTENDANCE_UPDATE:
            debugger
            return {
                ...state,
                details: action.payload
            }
        case attendanceConstants.ATTENDANCE_NEW:
            debugger
            return {
                ...state,
                details: action.payload
            }
        case attendanceConstants.ATTENDANCE_DELETE:
            debugger
            return {
                ...state,
                details: action.payload
            }
        default:
            return state
    };
};