import React from 'react';
import ReadingButton from '../../components/buttonComponent/ReadingButton';
import styles from './OverviewPage.module.css';
import BookImage from '../../assets/images/bookImage.png';

const OverviewPage = () => {
  return (
    <div>
      <div className={ styles.upperDiv }>
        <div className={ styles.containerDiv }>
          <div className={ styles.imageDiv }>
            <img
              src='https://neverland-api.s3.amazonaws.com/manga/Reincarnated+Marquis+1.jpeg'
              alt='Attack-on-Titans-book-cover'
            />
          </div>
          <div className={ styles.textDiv }>
            <h3> Attack on Titan Episode 1</h3>
            <p> Author&apos;s name </p>
            <span className={ styles.spanTags }>
              <p> Tag</p>
              <p> &#8226;&#8195;Tag</p>
              <p> &#8226;&#8195;Tag</p>
            </span>
            <ReadingButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
