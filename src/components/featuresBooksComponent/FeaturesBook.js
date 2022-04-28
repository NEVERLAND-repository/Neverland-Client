import React from 'react';
import SecondaryButton from '../buttonComponent/SecondaryButton';
import styles from './FeaturesBooks.module.css';

const FeaturesBook = () => {
  return (
    <div className={ styles.container }>
      <div className={ styles.imageDiv }>
        <div className={ styles.imageContainer }>
          <img src='https://neverland-api.s3.amazonaws.com/comics/The+Amazing+Spiderman.jpg' alt='The-Amazing-Spiderman-Book-Cover' />
        </div>

        <div className={ styles.imageContainer }>
          <img src='https://neverland-api.s3.amazonaws.com/novels/Zikora.jpg' alt='Zikora-Book-Cover' />
        </div>

        <div className={ styles.imageContainer }>
          <img src='https://neverland-api.s3.amazonaws.com/manga/Reincarnated+Marquis+1.jpeg' alt='The-Reincarnated-Marquis-1-Book-Cover' />
        </div>

        <div className={ styles.imageContainer }>
          <img src='https://neverland-api.s3.amazonaws.com/novels/The+DaVinci+Code.jpg' alt='The-DaVinci-Code-Book-Cover' />
        </div>
      </div>

      <div className={ styles.buttonDiv }>
        <SecondaryButton label='Get Started' navigation='/home' />
      </div>
    </div>
  );
}

export default FeaturesBook;
