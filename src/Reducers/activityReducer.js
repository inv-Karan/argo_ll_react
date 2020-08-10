import {activityConstants} from '../Constants/activityConstant';

const initialState = {
    activities: []
};

export const activityReducers = (state=initialState, action) => {
    switch (action.type) {
        case activityConstants.ACTIVITY_SHOW:
            debugger
            return {
                ...state,
                activities: action.payload
            };
        case activityConstants.ACTIVITY_UPDATE:
            debugger
            return {
                ...state,
                activities: action.payload
            }
        case activityConstants.ACTIVITY_NEW:
            debugger
            return {
                ...state,
                activities: action.payload
            }
        case activityConstants.ACTIVITY_DELETE:
            debugger
            return {
                ...state,
                activities: action.payload
            }
        default:
            return state
    };
};