import React from 'react';
import styles from './Button.module.css';

const SecondaryButton = (props) => {
  return (
    <div>
      <a href='#' className={ styles.buttonCTA }>
        {' '}
        {props.label}
        {' '}
      </a>
    </div>
  );
}

export default SecondaryButton;
