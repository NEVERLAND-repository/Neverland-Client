import React from 'react'
import SecondaryButton from '../buttonComponent/SecondaryButton';
import styles from './Modal.module.css';

const Modal = ({ imageSrc, actionText }) => {
  return (
    <div className={ styles.modalContainer }>
      <div className={ styles.imageContainer }>
        <img src={ imageSrc } alt='action icon' />
      </div>

      <div>
        <p className={ actionText }>
          {' '}
          {actionText}
          {' '}
        </p>
      </div>

      <div>
        <SecondaryButton label='Cancel' transparent navigation='/' />
        <SecondaryButton label='Add' navigation='/' />
      </div>

      <div />
    </div>
  );
};

export default Modal
