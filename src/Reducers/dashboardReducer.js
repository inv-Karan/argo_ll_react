import {dashboardConstants} from '../Constants/dashboardConstant'

const initialState = {
    details: []
};

export const dashboardReducers = (state=initialState, action) => {
    switch (action.type) {
        case dashboardConstants.DASHBOARD_SHOW:
            debugger
            return {
                ...state,
                details: action.payload
            };
        default:
            return state
    };
};