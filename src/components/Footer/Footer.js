// dependencies
import React from 'react';
// styles
import styles from './Footer.scss';

const Footer = () => {
    return (
        <div className={styles.creds}>Powered by <a target='_blank' href='https://newsapi.org/'>https://newsapi.org/</a></div>
    );
};

export default Footer;
