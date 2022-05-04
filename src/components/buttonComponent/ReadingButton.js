import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import addToLibrary from '../../services/utils';
import { getUserData } from '../../store/slice/neverlandUserSlice';
import styles from './Button.module.css';

const ReadingButton = ({ bookId, handleClick }) => {
  const token = useSelector(getUserData)?.token;
  const navigate = useNavigate()

  const addToLibrary = async () => {
    console.log('Hellllo')
    //   const response = await getAxiosInstance(token).post(
    //     `api/v1/book/add/?bookId=${ bookId }`,
    //   )
  }

  return (
    <div className={ styles.readingButton }>
      <div className={ styles.firstDiv }>
        <Link
          to={ token ? `/book/${ bookId }` : '/login' }
          className={ styles.readingLink }
        >
          Start Reading
        </Link>
      </div>

      <div
        onClick={ token ? handleClick : navigate('/login') }
        className={ styles.secondDiv }
      >
        <button className={ styles.libraryLink }>
          <span>&#43;</span>
        </button>
      </div>
    </div>
  );
}

export default ReadingButton;
