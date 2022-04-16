/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import Footer from './components/footerSection/Footer';
import Header from './components/headerComponent/Header';
import BooksLayout from './components/booksSection/BooksLayout';
import Hero from './components/heroSection/Hero';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={ styles.home }>
            <Header />
            <Hero />
            <BooksLayout />
            <Footer />
        </div>
    );
}

export default Home;
