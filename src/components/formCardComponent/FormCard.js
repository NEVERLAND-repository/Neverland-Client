import React from 'react';

import styles from './FormCard.module.css'

const FormCard = ({formTitle, bottomText, altAction, children, className}) => {
  

  return (
    <div className={`${styles.card} ${className}`}>
      <p className={styles.formTitle}> {formTitle} </p>

      {children}

      <p className={styles.bottomText}> {bottomText} <a href="#">{altAction} </a></p>
    </div>
  );
}



export default FormCard;