import React from 'react';
import FeaturesCard from '../featuresCardComponent/FeaturesCard';
import FeaturesBook from '../featuresBooksComponent/FeaturesBook';

import closedBookIcon from '../../assets/images/closedBook.svg';
import musicIcon from '../../assets/images/musicIcon.svg';
import openBookIcon from '../../assets/images/bookIcon.svg';
import quoteImage from '../../assets/images/quoteImage.png';
import styles from './Features.module.css';

function Features(props) {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.quoteSection}>
        <div className={styles.imageContainer}>
          <img src={quoteImage} alt="Quote icon" />
        </div>

        <div className={styles.textContainer}>
          <h3>
            Would you like an adventure now, or would you like to have tea
            first?
          </h3>
        </div>
      </div>

      <div className={styles.baloonSection}>
        <div className={styles.cardContainer}>
          <FeaturesCard
            headerText="Read novels, comics and manga"
            descriptionText=" A brief description of the feature in the page"
          >
            <div className={styles.iconContainer}>
              <img src={closedBookIcon} alt="open-book-icon" />
            </div>
          </FeaturesCard>

          <FeaturesCard
            headerText="Listen to music as you read"
            descriptionText=" A brief description of the feature in the page"
          >
            <div className={styles.iconContainer}>
              <img src={musicIcon} alt="open-book-icon" />
            </div>
          </FeaturesCard>

          <FeaturesCard
            headerText="Have your own personalised collection"
            descriptionText=" A brief description of the feature in the page"
          >
            <div className={styles.iconContainer}>
              <img src={openBookIcon} alt="open-book-icon" />
            </div>
          </FeaturesCard>
        </div>
      </div>

      <FeaturesBook />
    </section>
  );
}

export default Features;
