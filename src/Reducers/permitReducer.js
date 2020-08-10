import {permitConstants} from '../Constants/permitConstant';

const initialState = {
    permit: []
};

export const permitReducers = (state=initialState, action) => {
    switch (action.type) {
        case permitConstants.PERMIT_SHOW:
            debugger
            return {
                ...state,
                permit: action.payload
            };
        case permitConstants.PERMIT_UPDATE:
            debugger
            return {
                ...state,
                permit: action.payload
            }
        case permitConstants.PERMIT_NEW:
            debugger
            return {
                ...state,
                permit: action.payload
            }
        case permitConstants.PERMIT_DELETE:
            debugger
            return {
                ...state,
                permit: action.payload
            }
        default:
            return state
    };
};