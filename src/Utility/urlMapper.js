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
const ACTIVITY = 'activity/'

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
    addActivity: `${BASE_URL}${USER}${ACTIVITY}new/`,
    deleteActivity: `${BASE_URL}${USER}${ACTIVITY}delete/`,
    updateActivity: `${BASE_URL}${USER}${ACTIVITY}update/`
};