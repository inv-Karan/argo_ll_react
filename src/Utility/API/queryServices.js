import {HttpClient} from '../httpClient'
import urlMapper from '../urlMapper'

const showQuery = (id) => {
    return new Promise((resolve, reject) => {
        return HttpClient.get(`${urlMapper.getQuery}${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
};

const addQuery = (data) => {
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.addQuery}`,data)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })    
};

const deleteQuery = (id) => {
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.deleteQuery}${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
};

const updateQuery = (id, data) => {
    debugger
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.updateQuery}${id}`, data)
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


export {showQuery, addQuery, deleteQuery, updateQuery};