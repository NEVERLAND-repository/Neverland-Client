import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SecondaryButton from '../buttonComponent/SecondaryButton';
import UtilityButton from '../buttonComponent/UtilityButton';
import BellIcon from '../../assets/icons/bell.svg';
import BinIcon from '../../assets/icons/bin.svg';
import styles from './Modal.module.css';
import { getUserData } from '../../store/slice/neverlandUserSlice';
import getAxiosInstance from '../../services/axios';

const Modal = ({
  actionText, remove, handleremoveModal, bookId,
}) => {
  const token = useSelector(getUserData)?.token;
  const navigate = useNavigate();

  const addToLibrary = async () => {
    // const response = await getAxiosInstance(token).post(
    //   `api/v1/book/add/?bookId=${ bookId }`,
    // )
    console.log('added', 'response')
  }

  const removeFromLibrary = async () => {
    // const response = await getAxiosInstance(token).post(
    //   `api/v1/book/remove/?bookId=${ bookId }`,
    // )
    console.log('removed', 'response')
  }

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
            <SecondaryButton label='Add' navigation='/' callback={ addToLibrary } />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Modal
