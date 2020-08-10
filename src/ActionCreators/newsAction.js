import {newsConstants} from '../Constants/newsConstant'
import {showNews, addNews, deleteNews, updateNews} from '../Utility/API/newsServices'

function newsShow(news) {
    return {
        type: newsConstants.NEWS_SHOW, 
        payload: news
    };
};

function newsUpdate(news) {
    return {
        type: newsConstants.NEWS_UPDATE,
        payload: news
    };
};

function newsAdd(news) {
    return {
        type: newsConstants.NEWS_NEW,
        payload: news
    };
};

function newsDelete(news) {
    return {
        type: newsConstants.NEWS_DELETE,
        payload: news
    };
};

function getNews(userId) {
    return dispatch => {
           showNews(userId)
           .then(res => {
               const data = res.data.news
               dispatch(newsShow(data))
           })
           .catch(err => {
           })
    };
};

function editNews(id, data) {
    debugger
    return dispatch => {
        updateNews(id, data)
        .then(res => {
            debugger
            const data = res.data.news
            dispatch(newsUpdate(data))
        })
        .catch(err => {
            debugger
        })
    };
};

function newNews(obj) {
    return dispatch => {
        addNews(obj)
        .then(res => {
            const data = res.data.news
            dispatch(newsAdd(data))
        })
        .catch(err => {

        })
    };
};

function removeNews(obj) {
    return dispatch => {
        deleteNews(obj)
        .then(res => {
            const data = res.data.news
            dispatch(newsDelete(data))
        })
        .catch(err => {

        })
    };
};

export {getNews, editNews, newNews, removeNews}