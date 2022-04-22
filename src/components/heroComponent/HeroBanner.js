import React from 'react';
import { Link } from 'react-router-dom';
import SecondaryButton from '../buttonComponent/SecondaryButton';
import navLogo from '../../assets/images/neverLand-logo-white.svg';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <section className={ styles.heroSection }>
      <div className={ styles.container }>
        <nav>
          <div className={ styles.navLogo }>
            <Link to='/home'>
              <img src={ navLogo } alt='NeverLand-white-color-logo' />
            </Link>
          </div>
        </nav>
      </div>

      <div className={ styles.textContainer }>
        <h1 className={ styles.primaryText }> Take me to Neverland, where stories come alive. </h1>
        <h4 className={ styles.bottomText }> Read over 30 books of various types and genres </h4>

        <SecondaryButton label='Get Started' />
      </div>

    </section>
  );
}

export default HeroBanner;
