import {newsConstants} from '../Constants/newsConstant';

const initialState = {
    news: []
};

export const newsReducers = (state=initialState, action) => {
    switch (action.type) {
        case newsConstants.NEWS_SHOW:
            debugger
            return {
                ...state,
                news: action.payload
            };
        case newsConstants.NEWS_UPDATE:
            debugger
            return {
                ...state,
                news: action.payload
            }
        case newsConstants.NEWS_NEW:
            debugger
            return {
                ...state,
                news: action.payload
            }
        case newsConstants.NEWS_DELETE:
            debugger
            return {
                ...state,
                news: action.payload
            }
        default:
            return state
    };
};