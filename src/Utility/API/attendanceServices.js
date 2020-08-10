import {HttpClient} from '../httpClient'
import urlMapper from '../urlMapper'

const getAttendance = (id) => {
    return new Promise((resolve, reject) => {
        return HttpClient.get(`${urlMapper.getAttendance}${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
};

const addAttendance = (data) => {
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.addAttendance}`,data)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })    
};

const deleteAttendance = (id) => {
    return new Promise((resolve, reject) => {
        return HttpClient.delete(`${urlMapper.deleteAttendance}${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
};

const updateAttendance = (id) => {
    return new Promise((resolve, reject) => {
        return HttpClient.update(`${urlMapper.updateAttendance}${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
};


export {getAttendance, addAttendance, deleteAttendance, updateAttendance};