import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Button.module.css';

const SecondaryButton = (props) => {
  return (
    <div>
      <Link to='/home' className={ styles.buttonCTA }>
        {props.label}
      </Link>
    </div>
  );
}

export default SecondaryButton;
