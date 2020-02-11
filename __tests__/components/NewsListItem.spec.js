import React from 'react';
import NewsListItem from './../../src/components/NewsListItem/NewsListItem.js';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import each from 'jest-each';
import { props_1, props_2 } from './NewsListItem.data.js';
import { SET_CURRENT_NEWS_ITEM } from './../../src/constants/actionTypes.js';
import noImage from './../../src/img/no-image.png';

each([
    props_1,
    props_2
]).describe('<NewsListItem />', (props) => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const initialState = {};
    let store, wrapper;

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = shallow( <NewsListItem store={store} {...props} /> );
    })

    // action tests
    it(`calls store action ${SET_CURRENT_NEWS_ITEM}`, () => {
        wrapper.dive().find('.itemContainer').simulate('click');
        const actions = store.getActions();
        expect(actions[0].type).toEqual(SET_CURRENT_NEWS_ITEM);
        expect(actions[0].payload).toEqual(props.news);
    });
    // render tests
    it('render image for preview', () => {
        const imageSrc = wrapper.dive().find('.newsImageSmall').prop('src');
        expect(imageSrc).toBeOneOf([props.news.urlToImage, noImage]);
    });
});

