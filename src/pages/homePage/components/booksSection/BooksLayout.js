import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Container } from '../../../../components/container/Container';
import LoadingComponent from '../../../../components/loadingComponent/LoadingComponent';
import { getHomePageData } from '../../../../store/slice/neverlandUserSlice';
import { Books } from '../books';

import styles from './BooksLayout.module.css';

const BooksLayout = ({ category }) => {
  return (
    <section className={ styles.booksLayout }>
      <Container className={ styles.container }>
        <Books category={ category } />
      </Container>
    </section>
  )
}

export default BooksLayout;
