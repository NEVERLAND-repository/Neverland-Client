import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const ReadingButton = () => {
  return (
    <div className={ styles.readingButton }>
      <div className={ styles.firstDiv }>
        <Link to='/home' className={ styles.readingLink }>
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
