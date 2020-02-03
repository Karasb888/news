// dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// styles
import styles from './LoadMoreBtn.scss';
// actions
import { getNewsList } from './../../actions/index';

const mapDispatchToProps = dispatch => {
    return {
        getNewsList: () => { dispatch(getNewsList()) }
    };
};

const LoadMoreBtn = ({ getNewsList }) => {
    return (
        <div onClick={getNewsList} className={styles.loadMoreBtn}>Load more</div>
    );
};

LoadMoreBtn.propTypes = {
    getNewsList: PropTypes.func
};

export default connect(null, mapDispatchToProps)(LoadMoreBtn);