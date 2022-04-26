import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@chakra-ui/react';
import SecondaryButton from '../buttonComponent/SecondaryButton';
import navLogo from '../../assets/images/neverLand-logo-white.svg';
import desktopVideo from '../../assets/videos/desktopView.mp4';
import mobileVideo from '../../assets/videos/mobileView.mp4';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  const [isLesserThan740] = useMediaQuery('(max-width: 740px)');

  return (
    <section className={ styles.heroSection }>
      <video autoPlay muted loop className={ styles.video }>
        <source src={ !isLesserThan740 ? desktopVideo : mobileVideo } type='video/mp4' />
      </video>
      <div className={ styles.heroSubSection }>
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
          <h1 className={ styles.primaryText }>
            Take me to Neverland, where stories come alive.
          </h1>
          <h4 className={ styles.bottomText }> Read over 100 books of various types and genres </h4>

          <SecondaryButton label='Get Started' />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
