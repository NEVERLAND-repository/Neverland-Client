import React from 'react'
import SecondaryButton from '../buttonComponent/SecondaryButton';
import BellIcon from '../../assets/icons/bell.svg';
import styles from './Modal.module.css';

const Modal = ({ imageSrc, actionText }) => {
  return (
    <div className={styles.backdrop}>
      <div className={ styles.modalContainer}>
        <div className={ styles.modal }>
          <div className={ styles.imageContainer }>
            <img src={ imageSrc } alt='action icon' />
          </div>

          <div>
            <p className={ styles.actionText }>
              {' '}
              {actionText}
              {' '}
            </p>
          </div>

          <div className={ styles.buttonContainer }>
            <SecondaryButton label='Cancel' transparent navigation='/' />
            <SecondaryButton label='Add' navigation='/' />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Modal
