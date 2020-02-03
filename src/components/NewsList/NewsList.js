// dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// styles
import styles from './NewsList.scss';
// components
import NewsListItem from './../NewsListItem/NewsListItem';
import justJohn from './../../img/justJohn.gif';

const mapStateToProps = (state) => {
    return {
        newsList: state.newsList,
        haveAvaliableNews: state.haveAvaliableNews
    };
}

const NewsList = ({ newsList, haveAvaliableNews }) => {
    return (
        <div className={styles.newsListContainer}>
            {
                newsList.map((listItem, index) => <NewsListItem key={index} news={listItem} />)
            }
            { !haveAvaliableNews && <img className={styles.travolta} src={justJohn} /> }
        </div>
    );
};

NewsList.propTypes = {
    newsList: PropTypes.array,
    haveAvaliableNews: PropTypes.bool
};

export default connect(mapStateToProps, null)(NewsList);
