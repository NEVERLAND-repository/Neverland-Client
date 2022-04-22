import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ReadingComponent from '../../components/readingComponent/ReadingComponent';
import Header from '../homePage/components/headerComponent/Header';
import styles from './BookReading.module.css'

const BookReading = () => {
  return (
    <div className={ styles.wrapper }>
      <Header />
      <ReadingComponent />
    </div>
  )
}

export default BookReading;
