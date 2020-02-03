// dependencies
import React from 'react';
// styles
import styles from './Loading.scss';
// images
import loadingGif from './../../img/loading-gif.gif';

const Loading = () => {
    return (
        <img className={styles.loadingGif} src={loadingGif} />
    );
};

export default Loading;
