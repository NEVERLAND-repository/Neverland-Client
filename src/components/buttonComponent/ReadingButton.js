import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserData } from '../../store/slice/neverlandUserSlice';
import styles from './Button.module.css';

const ReadingButton = ({ bookId }) => {
  const { token } = useSelector(getUserData);

  return (
    <div className={ styles.readingButton }>
      <div className={ styles.firstDiv }>
        <Link to={ token ? `/overview/${ bookId }` : '/login' } className={ styles.readingLink }>
          Start Reading
        </Link>
      </div>

      <div className={ styles.secondDiv }>
        <Link to='/home' className={ styles.libraryLink }>
          +
        </Link>
      </div>
    </div>
  );
}

export default ReadingButton;
