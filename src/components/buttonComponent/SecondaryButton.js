import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Button.module.css';

const SecondaryButton = ({label, navigation}) => {
  return (
    <div>
      <Link to={ navigation } className={ styles.buttonCTA }>
        {label}
      </Link>
    </div>
  );
}

export default SecondaryButton;
