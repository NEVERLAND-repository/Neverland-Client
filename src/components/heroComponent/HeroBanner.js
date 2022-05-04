import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@chakra-ui/react';
import SecondaryButton from '../buttonComponent/SecondaryButton';
import navLogo from '../../assets/images/neverLand-logo-white.svg';
import desktopVideo from '../../assets/videos/desktopView.mp4';
import mobileVideo from '../../assets/videos/mobileView.mp4';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  const [isLesserThan740] = useMediaQuery('(max-width: 740px)');
  const [isActve, setIsActive] = useState(false);

  document.addEventListener('scroll', (e) => {
    if (window.scrollY > 150) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  })

  return (
    <section className={ styles.heroSection }>
      <div className={ styles.overlay } />
      <video autoPlay muted loop className={ styles.video }>
        <source
          src={ !isLesserThan740 ? desktopVideo : mobileVideo }
          type='video/mp4'
        />
      </video>

      <nav className={ `${ styles.nav } ${ isActve ? styles.scroll : '' }` }>
        <div className={ styles.navLogo }>
          <Link to='/'>
            <img src={ navLogo } alt='NeverLand-white-color-logo' className={ styles.imageLogo } />
          </Link>
        </div>
      </nav>

      <div className={ styles.textContainer }>
        <h1 className={ styles.primaryText }>
          Take me to Neverland, where stories come alive.
        </h1>
        <h4 className={ styles.bottomText }>
          {' '}
          Read over 100 books of various types and genres
          {' '}
        </h4>

        <SecondaryButton label='Explore' navigation='/home' />
      </div>

    </section>
  );
}

export default HeroBanner;
