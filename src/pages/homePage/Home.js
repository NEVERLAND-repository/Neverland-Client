import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/footerSection/Footer';
import Header from './components/headerComponent/Header';
import BooksLayout from './components/booksSection/BooksLayout';
import Hero from './components/heroSection/Hero';
import styles from './Home.module.css';
import { addHomepageData, getUserData } from '../../store/slice/neverlandUserSlice';
import getAxiosInstance from '../../services/axios';

const Home = () => {
  const [category, setCategory] = useState('')
  const {token} = useSelector(getUserData);
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const fetch = async () => {
      const response = await getAxiosInstance(token).post(
        `api/v1/home/?category=${ category }`,
      )
      console.log(response.data)

      if (response.data.status === 'success') {
        dispatch(addHomepageData(response.data))
      }
    }
    fetch()
  }, [token])

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
