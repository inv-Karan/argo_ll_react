import {HttpClient} from '../httpClient'
import urlMapper from '../urlMapper'

const showAttendance = (id) => {
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
        return HttpClient.post(`${urlMapper.deleteAttendance}${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
};

const updateAttendance = (id, data) => {
    debugger
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.updateAttendance}${id}`, data)
        .then(res => {
            debugger
            resolve(res)
        })
        .catch(err => {
            debugger
            reject(err)
        })
    })
};


export {showAttendance, addAttendance, deleteAttendance, updateAttendance};