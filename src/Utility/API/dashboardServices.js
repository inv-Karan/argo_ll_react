import {HttpClient} from '../httpClient'
import urlMapper from '../urlMapper'

const showDashboard = (userId) => {
    return new Promise((resolve, reject) => {
        return HttpClient.get(`${urlMapper.getDashboard}${userId}`)
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

export {showDashboard};