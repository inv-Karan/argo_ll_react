import {HttpClient} from '../httpClient'
import urlMapper from '../urlMapper'

const showNews = (id) => {
    return new Promise((resolve, reject) => {
        return HttpClient.get(`${urlMapper.getNews}${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
};

const addNews = (data) => {
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.addNews}`,data)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })    
};

const deleteNews = (id) => {
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.deleteNews}${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
};

const updateNews = (id, data) => {
    debugger
    return new Promise((resolve, reject) => {
        return HttpClient.post(`${urlMapper.updateNews}${id}`, data)
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


export {showNews, addNews, deleteNews, updateNews};