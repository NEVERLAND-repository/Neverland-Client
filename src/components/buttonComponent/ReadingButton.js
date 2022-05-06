import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import getAxiosInstance from '../../services/axios';
import { getUserData } from '../../store/slice/neverlandUserSlice';
import styles from './Button.module.css';

const ReadingButton = ({ bookId, handleClick, pageNo = undefined }) => {
  const token = useSelector(getUserData)?.token;
  const navigate = useNavigate();

  const handleChange = () => {
    if (pageNo === undefined) {
      handleClick(false)
    } else {
      handleClick(true)
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
        onClick={ token ? handleChange : navigate('/login') }
        className={ styles.secondDiv }
      >
        <button className={ styles.libraryLink }>
          {pageNo === undefined ? '+' : '-'}
        </button>
      </div>
    </div>
  );
}

export default ReadingButton;
