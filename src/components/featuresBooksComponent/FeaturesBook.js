import React from 'react';
import SecondaryButton from '../buttonComponent/SecondaryButton';
import styles from './FeaturesBooks.module.css';

const FeaturesBook = (props) => {
  return (
    <div className={ styles.container }>
      <div className={ styles.imageDiv }>
        <div className={ styles.imageContainer }>
          <img src='https://neverland-api.s3.amazonaws.com/comics/The+Amazing+Spiderman.jpg' />
        </div>

        <div className={ styles.imageContainer }>
          <img src='https://neverland-api.s3.amazonaws.com/novels/Zikora.jpg' />
        </div>

        <div className={ styles.imageContainer }>
          <img src='https://neverland-api.s3.amazonaws.com/manga/Reincarnated+Marquis+1.jpeg' />
        </div>

        <div className={ styles.imageContainer }>
          <img src='https://neverland-api.s3.amazonaws.com/novels/The+DaVinci+Code.jpg' />
        </div>
      </div>

      <div className={ styles.buttonDiv }>
        <SecondaryButton label='Get Started' />
      </div>
    </div>
  );
}

export default FeaturesBook;
