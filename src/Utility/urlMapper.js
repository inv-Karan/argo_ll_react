import {
    HttpClient
} from './httpClient'
import Attendance from '../container/Attendance';
const BASE_URL = HttpClient.baseUrl
const USER = 'User/'
const ATTENDANCE = 'attendence/'

export default {
    getAttendance: `${BASE_URL}${USER}${ATTENDANCE}show/`,
    addAttendance: `${BASE_URL}${USER}${ATTENDANCE}new/`,
    deleteAttendance: `${BASE_URL}${USER}${ATTENDANCE}delete/`,
    updateAttendance: `${BASE_URL}${USER}${ATTENDANCE}update/`
};