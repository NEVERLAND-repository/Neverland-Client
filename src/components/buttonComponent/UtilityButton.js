import React from 'react';
import styles from './Button.module.css';

const UtilityButton = ({ label, removeModal }) => {
  return (
    <div>
      <button
        className={ `${ styles.buttonCTA } ${ styles.transparent }` }
        onClick={ removeModal }
      >
        {' '}
        {label}
        {' '}
      </button>
    </div>
  );
};
export default UtilityButton;
