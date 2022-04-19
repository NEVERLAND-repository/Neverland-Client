import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/footerSection/Footer';
import Header from './components/headerComponent/Header';
import BooksLayout from './components/booksSection/BooksLayout';
import Hero from './components/heroSection/Hero';
import styles from './Home.module.css';
import { addHomepageData, getUserData } from '../../store/slice/neverlandUserSlice';
import getAxiosInstance from '../../services/axios';

const Home = () => {
  const {token} = useSelector(getUserData);
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const fetch = async () => {
      const response = await getAxiosInstance(token).post(
        `api/v1/home/?category=${ category || '' }`,
      )
      console.log(response.data.data.categoryBooks)

      if (response.data.status === 'success') {
        dispatch(addHomepageData(response.data))
      }
      setLoaded(true)
    }
    fetch()
  }, [token, category])

  return (
    <div className={ styles.home }>
      <Header />
      <Hero />
      {loaded && <BooksLayout category={ category } />}
      <Footer />
    </div>
  );
}

export default Home;
