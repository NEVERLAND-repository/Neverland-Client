import React from 'react';
import logo from '../../assets/dashboard/mobile-logo.svg';
import Hamburger from '../../assets/icons/burger.svg';
import profilePatterns from '../../assets/dashboard/patterns.svg';
import profileIcon from '../../assets/dashboard/profile-icon-dummy.svg';
import styles from './dashboard.module.css';

const Profile = () => {
  return (
    <>
      <header className={ `${ styles.profile__Nav } ${ styles.header }` }>
        <div className={ styles.logo }>
          <img src={ logo } alt={ logo } className={ styles.logo__img } />
        </div>
        <div className={ styles.hamburger }>
          <img src={ Hamburger } alt={ Hamburger } />
        </div>
      </header>
      <section className={ styles.profile__overview }>
        <div className={ styles.profile__patterns }>
          <img
            src={ profilePatterns }
            alt={ profilePatterns }
            className={ styles.patterns }
          />
        </div>
        <div className={ styles.profile }>
          <div className={ styles.profile__pic }>
            <img
              src={ profileIcon }
              alt={ profileIcon }
              className={ styles.profile__pic__icon }
            />
          </div>
        </div>
      </section>
      <form>
        <div>
          <div>
            <h1 className='title'>Full name</h1>
            <p className='subtitle'>Customise your accounts</p>
          </div>
          <div className='input'>
            <input
              type='text'
              name='username'
              id='username'
              value={ username }
              className={ styles.form__control }
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Profile;
