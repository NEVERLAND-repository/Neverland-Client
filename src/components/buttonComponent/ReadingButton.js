import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import getAxiosInstance from '../../services/axios';
import { getUserData } from '../../store/slice/neverlandUserSlice';
import styles from './Button.module.css';

const ReadingButton = ({ bookId, handleClick, pageNo = undefined }) => {
  const token = useSelector(getUserData)?.token;
  const navigate = useNavigate();

  const addToLibrary = async () => {
    const response = await getAxiosInstance(token).post(
      `api/v1/book/add/?bookId=${ bookId }`,
    )
    console.log('added', response)
  }

  const removeFromLibrary = async () => {
    const response = await getAxiosInstance(token).post(
      `api/v1/book/remove/?bookId=${ bookId }`,
    )
    console.log('removed', response)
  }

  const updateLibrary = () => {
    if (pageNo === undefined) {
      addToLibrary()
    } else {
      removeFromLibrary()
    }
  }

  return (
    <div className={ styles.readingButton }>
      <div className={ styles.firstDiv }>
        <Link
          to={ token ? `/book/${ bookId }` : '/login' }
          className={ styles.readingLink }
        >
          {pageNo === undefined || pageNo === 0
            ? 'Start Reading'
            : 'Continue reading'}
        </Link>
      </div>

      <div
        onClick={ token ? handleClick : navigate('/login') }
        className={ styles.secondDiv }
      >
        <button className={ styles.libraryLink }>
          {pageNo === undefined ? '+' : '--'}
        </button>
      </div>
    </div>
  );
}

export default ReadingButton;
