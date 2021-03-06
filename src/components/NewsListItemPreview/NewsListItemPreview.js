// dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// styles
import styles from './NewsListItemPreview.scss';

const mapStateToProps = (state) => {
    return {
        newsItem: state.currentNewsListItem
    };
};

const NewsListItemPreview = ({ newsItem }) => {
    return (
        <div className={styles.container}>
            <img className={styles.preview} src={newsItem.urlToImage} />
            <a href={newsItem.url} className={styles.title}>{newsItem.title}</a>
        </div>
    );
};

NewsListItemPreview.propTypes = {
    newsItem: PropTypes.object
};

export default connect(mapStateToProps, null)(NewsListItemPreview);