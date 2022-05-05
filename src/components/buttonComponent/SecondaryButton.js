import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Button.module.css';

const SecondaryButton = ({
  label, navigation, transparent, alert, alertTransparent,
}) => {
  let btn;

  if (alert) {
    btn = 'alert'
  } else if (alertTransparent) {
    btn = 'alertTransparent'
  } else if (transparent) {
    btn = 'transparent'
  } else {
    btn = 'primary'
  }

  return (
    <div>
      <Link to={ navigation } className={ `${ styles.buttonCTA } ${ styles[btn] }` }>
        {label}
      </Link>
    </div>
  );
}

export default SecondaryButton;
