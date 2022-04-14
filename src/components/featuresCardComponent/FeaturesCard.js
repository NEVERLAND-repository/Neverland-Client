import React from 'react'

import styles from './FeaturesCard.module.css'

const FeaturesCard = (props) => {
  return (
    <>
      <div className={styles.featureCard}>
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