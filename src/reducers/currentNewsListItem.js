import { SET_CURRENT_NEWS_ITEM } from './../constants/actionTypes';

const currentNewsListItem = (state = null, action) => {
    if (action.type === SET_CURRENT_NEWS_ITEM) {
        return Object.assign({}, action.payload);
    }
    return state;
};

export default currentNewsListItem;
