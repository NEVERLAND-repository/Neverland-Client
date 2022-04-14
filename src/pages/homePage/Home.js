/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import Footer from '../../components/footerComponent/Footer';
import Header from '../../components/headerComponent/Header';
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.home}>
            <Header />
            <Footer />
        </div>
    );
}

export default Home;
