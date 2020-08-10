import {HttpClient} from '../httpClient'
import urlMapper from '../urlMapper'

const showActivity = (id) => {
    return new Promise((resolve, reject) => {
        return HttpClient.get(`${urlMapper.getActivity}${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
};

const addActivity = (data) => {
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.addActivity}`,data)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })    
};

const deleteActivity = (id) => {
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.deleteActivity}${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
};

const updateActivity = (id, data) => {
    debugger
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.updateActivity}${id}`, data)
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


export {showActivity, addActivity, deleteActivity, updateActivity};