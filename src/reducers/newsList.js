import { NEWS_LOADED } from './../constants/actionTypes';

const newsList = (state = [], action) => {
    if (action.type === NEWS_LOADED) {
        return [ ...state, ...action.payload ];
    }

    return state;
};

export default newsList;
