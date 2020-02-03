import { INCREMENT_PAGE_COUNT } from './../constants/actionTypes';

const pageCount = (state = 1, action) => {
    if (action.type === INCREMENT_PAGE_COUNT) {
        return state + 1;
    }
    return state;
};

export default pageCount;
