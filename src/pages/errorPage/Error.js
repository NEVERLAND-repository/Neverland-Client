import React from 'react';
import Header from '../homePage/components/headerComponent/Header';
import Footer from '../homePage/components/footerSection/Footer';
import ErrorAvatar from '../../assets/images/errorAvatar.svg';
import styles from './Error.module.css'

const Error = () => {
  return (
    <>
      <Header />

      <section className={ styles.errorSection }>
        <div className={ styles.container }>
          <div className={ styles.imageContainer }>
            <img src={ ErrorAvatar } alt='404 error' />
          </div>
          <h3 className={ styles.containerText }> page not found </h3>
        </div>

        <h3 className={ styles.errorBottomText }> Loooks like you fell into a rabbit hole </h3>
      </section>

      <Footer />
    </>
  )
}

export default Error;
