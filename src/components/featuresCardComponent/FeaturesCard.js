import React from 'react'

import openBookIcon from '../../assets/images/bookIcon.svg';
import styles from './FeaturesCard.module.css'

const FeaturesCard = (props) => {
  return (
    <>
      <div className={styles.featureCard}>
        {/* <div className={styles.iconContainer}>
          <img src={openBookIcon} alt="open-book-icon" />

          {props.children}
        </div> */}

        {props.children}
        
        <div className={styles.textContainer}>
          <p className={styles.headerText}>
            {props.headerText}          
          </p>
          <p className={styles.descriptionText}>
            {props.descriptionText}
          </p>
        </div>

      </div>
    </>
  )
}

export default FeaturesCard