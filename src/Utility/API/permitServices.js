import {HttpClient} from '../httpClient'
import urlMapper from '../urlMapper'

const showPermit = (id) => {
    return new Promise((resolve, reject) => {
        return HttpClient.get(`${urlMapper.getPermit}${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
};

const addPermit = (data) => {
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.addPermit}`,data)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })    
};

const deletePermit = (id) => {
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.deletePermit}${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
};

const updatePermit = (id, data) => {
    debugger
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.updatePermit}${id}`, data)
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


export {showPermit, addPermit, deletePermit, updatePermit};