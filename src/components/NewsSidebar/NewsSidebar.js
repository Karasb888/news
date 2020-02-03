// dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// styles
import styles from './NewsSidebar.scss';
// components
import NewsList from './../NewsList/NewsList'
import LoadMoreBtn from './../LoadMoreBtn/LoadMoreBtn';

const mapStateToProps = (state) => {
    return {
        haveAvaliableNews: state.haveAvaliableNews
    };
};

const NewsSidebar = ({ haveAvaliableNews }) => {
    return (
        <div className={styles.newsSidebar}>
            <NewsList />
                <div className={styles.btnContainer}>
                    { 
                        haveAvaliableNews
                        ? <LoadMoreBtn />
                        : <span>Cant show more, sorry(</span>
                    }
                </div>
        </div>
    );
};

NewsSidebar.propTypes = {
    haveAvaliableNews: PropTypes.bool
};

export default connect(mapStateToProps, null)(NewsSidebar);
