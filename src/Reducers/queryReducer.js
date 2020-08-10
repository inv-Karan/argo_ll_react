import {queryConstants} from '../Constants/queryConstant';

const initialState = {
    queries: []
};

export const queryReducers = (state=initialState, action) => {
    switch (action.type) {
        case queryConstants.QUERY_SHOW:
            debugger
            return {
                ...state,
                queries: action.payload
            };
        case queryConstants.QUERY_UPDATE:
            debugger
            return {
                ...state,
                queries: action.payload
            }
        case queryConstants.QUERY_NEW:
            debugger
            return {
                ...state,
                queries: action.payload
            }
        case queryConstants.QUERY_DELETE:
            debugger
            return {
                ...state,
                queries: action.payload
            }
        default:
            return state
    };
};