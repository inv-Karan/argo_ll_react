import {HttpClient} from '../httpClient'
import urlMapper from '../urlMapper'

const showNotification = (id) => {
    return new Promise((resolve, reject) => {
        return HttpClient.get(`${urlMapper.getNotification}${id}`)
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

const addNotification = (data) => {
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.addNotification}`,data)
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

const deleteNotification = (id) => {
    return new Promise((resolve, reject) => {
        return HttpClient.delete(`${urlMapper.deleteNotification}${id}`)
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

const updateNotification = (id, data) => {
    debugger
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.updateNotification}${id}`, data)
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


export {showNotification, addNotification, deleteNotification, updateNotification};