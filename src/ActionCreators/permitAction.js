import {permitConstants} from '../Constants/permitConstant'
import {showPermit, addPermit, deletePermit, updatePermit} from '../Utility/API/permitServices'

function permitShow(permit) {
    return {
        type: permitConstants.PERMIT_SHOW, 
        payload: permit
    };
};

function permitUpdate(permit) {
    return {
        type: permitConstants.PERMIT_UPDATE,
        payload: permit
    };
};

function permitAdd(permit) {
    return {
        type: permitConstants.PERMIT_NEW,
        payload: permit
    };
};

function permitDelete(permit) {
    return {
        type: permitConstants.PERMIT_DELETE,
        payload: permit
    };
};

function getPermit(userId) {
    return dispatch => {
           showPermit(userId)
           .then(res => {
               const data = res.data.permit
               dispatch(permitShow(data))
           })
           .catch(err => {
           })
    };
};

function editPermit(id, data) {
    debugger
    return dispatch => {
        updatePermit(id, data)
        .then(res => {
            debugger
            const data = res.data.permit
            dispatch(permitUpdate(data))
        })
        .catch(err => {
            debugger
        })
    };
};

function newPermit(obj) {
    return dispatch => {
        addPermit(obj)
        .then(res => {
            const data = res.data.permit
            dispatch(permitAdd(data))
        })
        .catch(err => {

        })
    };
};

function removePermit(obj) {
    return dispatch => {
        deletePermit(obj)
        .then(res => {
            const data = res.data.permit
            dispatch(permitDelete(data))
        })
        .catch(err => {

        })
    };
};

export {getPermit, editPermit, newPermit, removePermit}