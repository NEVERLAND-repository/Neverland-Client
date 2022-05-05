import React from 'react'
import SecondaryButton from '../buttonComponent/SecondaryButton';
import UtilityButton from '../buttonComponent/UtilityButton';
import BellIcon from '../../assets/icons/bell.svg';
import BinIcon from '../../assets/icons/bin.svg';
import styles from './Modal.module.css';

const Modal = ({
  actionText, remove, handleremoveModal,
}) => {
  return (
    <div className={ styles.backdrop }>
      <div className={ styles.modalContainer }>
        <div className={ styles.modal }>
          <div className={ styles.imageContainer }>
            <img src={ remove ? BinIcon : BellIcon } alt='action icon' />
          </div>

          <div>
            <p className={ styles.actionText }>
              {' '}
              {actionText}
              {' '}
            </p>
          </div>

          <div className={ styles.buttonContainer }>
            <UtilityButton label='Cancel' removeModal={ handleremoveModal } />
            <SecondaryButton label='Add' navigation='/' />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Modal
