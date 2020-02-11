// dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// styles
import styles from './NewsListItem.scss';
// actions
import { setActiveNewsListItem } from './../../actions/index';
// images
import noImage from './../../img/no-image.png';

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentItem: (newsObj) => { dispatch(setActiveNewsListItem(newsObj)) }
    };
}

const NewsListItem = ({ news, setCurrentItem }) => {
    return (
        <div className={styles.itemContainer} onClick={() => { setCurrentItem(news) }}>
            <div className={styles.newsImageContainer}>
                <img
                    className={styles.newsImageSmall}
                    src={news.urlToImage || noImage} 
                />
            </div>
            <a
                title={news.title}
                className={styles.title}
                href={news.url}
                target='_blank'
            >{news.title}</a>
        </div>
    );
}

NewsListItem.propTypes = {
    news: PropTypes.object,
    setCurrentItem: PropTypes.func
};

export default connect(null, mapDispatchToProps)(NewsListItem);
