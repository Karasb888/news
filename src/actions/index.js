import axios from 'axios';
import { 
    NEWS_LOADED, 
    SET_CURRENT_NEWS_ITEM, 
    INCREMENT_PAGE_COUNT,
    NO_NEWS_TO_FETCH
} from './../constants/actionTypes';
import {
    NEWS_API_KEY,
    PAGE_SIZE,
    COUNTRY_QUERY
} from '../constants/apiValues';

export const getNewsList = () => {
    return (dispatch, getState) => {
        const pageNumber = getState().pageCount;
        const newsApiRequestUrl = `https://newsapi.org/v2/top-headlines?${COUNTRY_QUERY}&${PAGE_SIZE}&${NEWS_API_KEY}&page=${pageNumber}`;
        return axios.get(newsApiRequestUrl).then(response => {
            if (!response.data.articles.length) {
                dispatch({
                    type: NO_NEWS_TO_FETCH
                });
            }
            dispatch({
                type: INCREMENT_PAGE_COUNT
            });
            dispatch({
                type: NEWS_LOADED,
                payload: response.data.articles
            });
        });
    };
};

export const setActiveNewsListItem = (newsListItem) => {
    return dispatch => {
        dispatch({ type: SET_CURRENT_NEWS_ITEM, payload: newsListItem })
    };
};