import { NO_NEWS_TO_FETCH } from '../constants/actionTypes';

const haveAvaliableNews = (state = true, action) => {
    if (action.type === NO_NEWS_TO_FETCH) {
        return false;
    }

    return state;
};

export default haveAvaliableNews;
