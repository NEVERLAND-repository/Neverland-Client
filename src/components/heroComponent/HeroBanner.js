import React from 'react'

import navLogo from '../../assets/images/neverLandLogo-orange.png';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}> 
        <nav>
          <a href='#'>
            <img src={navLogo} alt="NeverLand-orange-color-logo" />
          </a>
        </nav>
      </div>

      <div className={styles.textContainer}> 
        <h1> Take me to Neverland, where stories come alive. </h1>
        <h4> Read over 30 books of various types and genres </h4>

        <button type='submit'> Get Started </button>

      </div>

      
    </section>
  )
}

export default HeroBanner