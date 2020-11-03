import {
    HttpClient
} from './httpClient'
const BASE_URL = HttpClient.baseUrl
const USER = 'User/'
const ATTENDANCE = 'attendence/'
const QUERY = 'query/'
const PERMIT = 'permit/'
const NEWS = 'news/'
const NOTIFICATION = 'notification/'
const ACTIVITIES = 'activities/'
const ACTIVITY = 'activity/'
const DASHBOARD = 'dashboard/'
const BLOG = 'blog/'
const ADDFARM = 'add/farm/'
const VIEWFARM = 'view/farm/'
const ADDOUTPUT = 'add/output/'
const VIEWOUTPUT = 'view/output/'
const UPDATEOUTPUT = 'update/output'
const SUPPLIES = 'supplies/'
const ADDRESPONSE = 'add/activity/response/'
const UPDATERESPONSE = 'update/activity/response/'
const ADDEQUIPMENT = 'add/equipment/'
const EDITEQUIPMENT = 'edit/equipment/'
const DELETEEQUIPMENT = 'delete/equipment/'
const ADDRESOURCE = 'add/resource/'
const SHOWFARMERS = 'farmers/'
const SHOWCHATLISTUSER = 'chat/user/'
const SHOWUSERINFO = 'user/info/'
const VENDOR = 'vendor/'
const SHOWATTENDANCELOWERLEVEL = 'attendance/'
const SHOWTODAYTOMORROWACTIVITIES = 'activities/'
const SHOWSELFLABOURSACTIVITIESSPECIFICDATES = 'activities/{date}/'
const SHOWSELFACTIVITIESSPECIFICDATE = 'activities/self/{date}/'
const ADDCHARTDATA = 'chart/data/'


export default {
    getAttendance: `${BASE_URL}${USER}${ATTENDANCE}show/`,
    addAttendance: `${BASE_URL}${USER}${ATTENDANCE}new/`,
    deleteAttendance: `${BASE_URL}${USER}${ATTENDANCE}delete/`,
    updateAttendance: `${BASE_URL}${USER}${ATTENDANCE}update/`,

    getQuery: `${BASE_URL}${USER}${QUERY}show/`,
    addQuery: `${BASE_URL}${USER}${QUERY}new/`,
    deleteQuery: `${BASE_URL}${USER}${QUERY}delete/`,
    updateQuery: `${BASE_URL}${USER}${QUERY}update/`,

    getPermit: `${BASE_URL}${USER}${PERMIT}show/`,
    addPermit: `${BASE_URL}${USER}${PERMIT}new/`,
    deletePermit: `${BASE_URL}${USER}${PERMIT}delete/`,
    updatePermit: `${BASE_URL}${USER}${PERMIT}update/`,

    getNews: `${BASE_URL}${USER}${NEWS}show/`,
    addNews: `${BASE_URL}${USER}${NEWS}new/`,
    deleteNews: `${BASE_URL}${USER}${NEWS}delete/`,
    updateNews: `${BASE_URL}${USER}${NEWS}update/`,

    getNotification: `${BASE_URL}${USER}${NOTIFICATION}show/`,
    addNotification: `${BASE_URL}${USER}${NOTIFICATION}new/`,
    deleteNotification: `${BASE_URL}${USER}${NOTIFICATION}delete/`,
    updateNotification: `${BASE_URL}${USER}${NOTIFICATION}update/`,

    getActivity: `${BASE_URL}${USER}${ACTIVITY}show/`,
    addActivity: `${BASE_URL}${USER}${ACTIVITIES}new/`,
    deleteActivity: `${BASE_URL}${USER}${ACTIVITIES}delete/`,
    updateActivity: `${BASE_URL}${USER}${ACTIVITIES}update/`,
    getActivityResponse: `${BASE_URL}${USER}${ACTIVITY}response/`,

    getDashboard: `${BASE_URL}${DASHBOARD}`,

    getBlog: `${BASE_URL}${BLOG}list/`,
    addBlog: `${BASE_URL}${BLOG}new/`,
    deleteBlog: `${BASE_URL}${BLOG}delete/`,
    updateBlog: `${BASE_URL}${BLOG}update/`,

    addFarm: `${BASE_URL}${ADDFARM}`,
    viewFarm: `${BASE_URL}${VIEWFARM}`,

    addOutput: `${BASE_URL}${ADDOUTPUT}`,
    viewOutput: `${BASE_URL}${VIEWOUTPUT}`,
    updateOutput: `${BASE_URL}${UPDATEOUTPUT}`,

    updateSupplies: `${BASE_URL}${SUPPLIES}update/`,
    deleteSupplies: `${BASE_URL}${SUPPLIES}delete/`,

    addResponse: `${BASE_URL}${ADDRESPONSE}`,
    updateRespnse: `${BASE_URL}${UPDATERESPONSE}`,

    addEquipment: `${BASE_URL}${ADDEQUIPMENT}`,
    editEquipment: `${BASE_URL}${EDITEQUIPMENT}`,
    deleteEquipment: `${BASE_URL}${DELETEEQUIPMENT}`,

    addResource: `${BASE_URL}${ADDRESOURCE}`,
    showFarmers: `${BASE_URL}${SHOWFARMERS}`,
    showChatListUser: `${BASE_URL}${SHOWCHATLISTUSER}`,
    showUserInfo: `${BASE_URL}${SHOWUSERINFO}`,

    addSupplies: `${BASE_URL}${VENDOR}new/stock/`,
    vendorUpdateOrderStatus: `${BASE_URL}${VENDOR}update/order/status`,
    vendorUpdateOrderIsApproved: `${BASE_URL}${VENDOR}update/order/isApproved`,
    vendorHistory: `${BASE_URL}${VENDOR}history/`,

    showAttendanceLowerLevel: `${BASE_URL}${SHOWATTENDANCELOWERLEVEL}`,
    showTodayTomorrowActivities: `${BASE_URL}${SHOWTODAYTOMORROWACTIVITIES}`,
    showSelfLaboursActivitiesSpecificDates: `${BASE_URL}${SHOWSELFLABOURSACTIVITIESSPECIFICDATES}`,
    showSelfActivitiesSpecificDate: `${BASE_URL}${SHOWSELFACTIVITIESSPECIFICDATE}`,

    addChatData: `${BASE_URL}${ADDCHARTDATA}`,

};