// dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// styles
import styles from './NewsSection.scss';
// components
import NewsSidebar from './../NewsSidebar/NewsSidebar';
import NewsListItemPreview from './../NewsListItemPreview/NewsListItemPreview';

const mapStateToProps = (state) => {
    return {
        selectedNewsItem: state.currentNewsListItem
    };
};

const NewsSection = ({ selectedNewsItem }) => {
    return (
        <div className={styles.newsSection}>
            <NewsSidebar />
            { selectedNewsItem && <NewsListItemPreview /> }
        </div>
    );
};

NewsSection.propTypes = {
    selectedNewsItem: PropTypes.object
};

export default connect(mapStateToProps, null)(NewsSection);
