import React from 'react';

import styles from './PrimaryButton.module.css';

const PrimaryButton = props => {
  return (
    <div>
        <button className={styles.primary__button}> {props.label} </button>
    </div>
  ); 
}
export default PrimaryButton;