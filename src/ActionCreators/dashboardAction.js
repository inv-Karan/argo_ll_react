import {dashboardConstants} from '../Constants/dashboardConstant'
import {showDashboard} from '../Utility/API/dashboardServices'

function dashboardShow(details) {
    return {
        type: dashboardConstants.DASHBOARD_SHOW, 
        payload: details
    };
};

function getDashboard(userId) {
    return dispatch => {
           showDashboard(userId)
           .then(res => {
               const data = res.data.details
               dispatch(dashboardShow(data))
           })
           .catch(err => {
           })
    };
};

export {getDashboard};