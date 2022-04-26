import React from 'react';
import MusicControl from '../../components/musicComponent/MusicControl';
import ReadingComponent from '../../components/readingComponent/ReadingComponent';
import Footer from '../homePage/components/footerSection/Footer';
import Header from '../homePage/components/headerComponent/Header';
import styles from './BookReading.module.css'

const BookReading = () => {
  return (
    <div className={ styles.wrapper }>
      <Header />
      <ReadingComponent />
      <MusicControl />
      <Footer />
    </div>
  )
}

export default BookReading;
