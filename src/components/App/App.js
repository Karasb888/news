// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// styles
import styles from './App.scss';
// actions
import { getNewsList, setActiveNewsListItem } from './../../actions/index';
// components
import NewsSection from './../NewsSection/NewsSection';
import Loading from './../Loading/Loading';
import Footer from './../Footer/Footer';

const mapStateToProps = (state) => {
    return {
        newsList: state.newsList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNewsList: () => dispatch(getNewsList()),
        setPreviewItem: (listItem) => dispatch(setActiveNewsListItem(listItem))
    };
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            canShowApp: false
        };
    }

    componentDidMount() {
        // just for fun
        const timer = setTimeout(() => {
            this.setState({ canShowApp: true });
            clearTimeout(timer);
        }, 1500);

        this.props.getNewsList().then(() => {
            this.props.setPreviewItem(this.props.newsList[0]);
        });
    }

    render() {
        return (
            <div className={styles.app}>
                { 
                    (this.props.newsList.length && this.state.canShowApp)
                    ? <NewsSection /> 
                    : <Loading />
                }
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    newsList: PropTypes.array,
    getNewsList: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);