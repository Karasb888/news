import { combineReducers } from 'redux';
import newsList from './newsList';
import currentNewsListItem from './currentNewsListItem';
import pageCount from './pageCount';
import haveAvaliableNews from './haveAvaliableNews';

export default combineReducers({
    newsList,
    currentNewsListItem,
    pageCount,
    haveAvaliableNews
});
