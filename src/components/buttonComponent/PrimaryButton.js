import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

const PrimaryButton = ({ label, navigation, btnType }) => {
  const navigate = useNavigate()

  return (
    <div>
      <button
        type={ btnType }
        className={ styles.primary__button }
        onClick={ () => navigate(navigation) }
      >
        {' '}
        {label}
        {' '}
      </button>
    </div>
  );
}
export default PrimaryButton;
