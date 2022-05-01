import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MusicControl from '../../components/musicComponent/MusicControl';
import ReadingComponent from '../../components/readingComponent/ReadingComponent';
import Footer from '../homePage/components/footerSection/Footer';
import Header from '../homePage/components/headerComponent/Header';
import { getUserData } from '../../store/slice/neverlandUserSlice';
import styles from './BookReading.module.css'

const BookReading = () => {
  const token = useSelector(getUserData)?.token;
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/home')
    }
  }, [])

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
