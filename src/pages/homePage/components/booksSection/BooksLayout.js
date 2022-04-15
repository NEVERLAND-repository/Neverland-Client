import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../../../../components/container/Container';

import styles from './BooksLayout.module.css';

const BooksLayout = () => {
  return (
    <section className={ styles.booksLayout }>
      <Container className={ styles.container }>
        <Outlet />
      </Container>
    </section>
  )
}

export default BooksLayout;
