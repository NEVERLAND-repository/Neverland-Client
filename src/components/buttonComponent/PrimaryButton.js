import React from 'react';

import styles from './Button.module.css';

const PrimaryButton = ({ label }) => {
  return (
    <div>
      <button className={ styles.primary__button }>
        {' '}
        {label}
        {' '}
      </button>
    </div>
  );
}
export default PrimaryButton;
