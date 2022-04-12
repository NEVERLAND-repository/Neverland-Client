import React from 'react'

import quoteImage from '../../assets/images/quoteImage.png';
import styles from './Features.module.css'

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.quoteSection}>
        <div className={styles.imageContainer}>
          <img src={quoteImage} alt='Quote icon' />
        </div>

        <div className={styles.textContainer}> 
          <h3> Would you like an adventure now, or would you like to have tea first? </h3>
        </div>
      </div>

      <div className={styles.baloonSection}> 
        <h1> Hello world </h1>

        <div className={styles.textContainer}> 
          <h3> Would you like an adventure now, or would you like to have tea first? </h3>
        </div>

      </div>
    </section>
  )
}

export default Features;