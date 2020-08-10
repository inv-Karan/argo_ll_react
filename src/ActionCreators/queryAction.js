import {queryConstants} from '../Constants/queryConstant'
import {showQuery, addQuery, deleteQuery, updateQuery} from '../Utility/API/queryServices'

function queryShow(queries) {
    return {
        type: queryConstants.QUERY_SHOW, 
        payload: queries
    };
};

function queryUpdate(queries) {
    return {
        type: queryConstants.QUERY_UPDATE,
        payload: queries
    };
};

function queryAdd(queries) {
    return {
        type: queryConstants.QUERY_NEW,
        payload: queries
    };
};

function queryDelete(queries) {
    return {
        type: queryConstants.QUERY_DELETE,
        payload: queries
    };
};

function getQuery(userId) {
    return dispatch => {
           showQuery(userId)
           .then(res => {
               const data = res.data.queries
               dispatch(queryShow(data))
           })
           .catch(err => {
           })
    };
};

function editQuery(id, data) {
    debugger
    return dispatch => {
        updateQuery(id, data)
        .then(res => {
            debugger
            const data = res.data.queries
            dispatch(queryUpdate(data))
        })
        .catch(err => {
            debugger
        })
    };
};

function newQuery(obj) {
    return dispatch => {
        addQuery(obj)
        .then(res => {
            const data = res.data.queries
            dispatch(queryAdd(data))
        })
        .catch(err => {

        })
    };
};

function removeQuery(obj) {
    return dispatch => {
        deleteQuery(obj)
        .then(res => {
            const data = res.data.queries
            dispatch(queryDelete(data))
        })
        .catch(err => {

        })
    };
};

export {getQuery, editQuery, newQuery, removeQuery}