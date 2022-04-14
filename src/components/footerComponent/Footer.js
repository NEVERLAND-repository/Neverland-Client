import React from 'react';
import footerImage from '../../assets/images/footerImage.svg';
import facebookIcon from '../../assets/images/facebookIcon.svg';
import twitterIcon from '../../assets/images/twitterIcon.svg';
import instagramIcon from '../../assets/images/instagramIcon.svg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topDiv}>
        <div className={styles.logoContainer}>
          <img src={footerImage} alt="Neverland-logo-small-size" />
        </div>
        <div className={styles.iconContainer}>
          <img src={facebookIcon} />
          <img src={twitterIcon} />
          <img src={instagramIcon} />
        </div>
      </div>

      <div className={styles.bottomDiv}>
        <p>neverland-world.netlify.app</p>
        <a href="tel:+2348035678900"> +2348035678900 </a>
        <a href="mailto:info@neverland.com"> info@neverland.com </a>
      </div>
    </footer>
  );
}

export default Footer;
