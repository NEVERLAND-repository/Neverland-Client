import React from 'react';
import { NavLink } from 'react-router-dom';
import footerImage from '../../../../assets/images/footerImage.svg';
import facebookIcon from '../../../../assets/images/facebookIcon.svg';
import twitterIcon from '../../../../assets/images/twitterIcon.svg';
import instagramIcon from '../../../../assets/images/instagramIcon.svg';
import styles from './Footer.module.css';

const Footer = () => {
  const navLinks = [
    { name: 'Comics', path: 'comics' },
    { name: 'Mangas', path: 'mangas' },
    { name: 'Novels', path: 'novels' },
  ];

  return (
    <footer className={ styles.footer }>
      <div className={ styles.topDiv }>
        <div className={ styles.logoContainer }>
          <img src={ footerImage } alt='Neverland-logo-small-size' />
        </div>
        <nav className={ styles.navbar }>
          <ul className={ styles.navbarList }>
            {navLinks.map(({ name, path }) => (
              <li key={ name } className={ styles.navbarItem }>
                <NavLink
                  to={ path }
                  className={ styles.navLink }
                  activeClassName={ styles.active }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={ styles.iconContainer }>
          <a href='#'>
            <img src={ facebookIcon } alt='Link-to-Neverland-facebook-page' />
          </a>
          <a href='#'>
            <img src={ twitterIcon } alt='Link-to-Neverland-twitter-handle' />
          </a>
          <a href='#'>
            <img src={ instagramIcon } alt='Link-to-Neverland-instagram-page' />
          </a>
        </div>
      </div>

      <div className={ styles.bottomDiv }>
        <div className={ styles.copyright }>
          <p>neverland-world.netlify.app</p>
          <a href='tel:+2348035678900'> +2348035678900 </a>
          <a href='mailto:info@neverland.com'> info@neverland.com </a>
        </div>
        <div className={ styles.iconMobile }>
          <a href='#'>
            <img src={ facebookIcon } alt='Link-to-Neverland-facebook-page' />
          </a>
          <a href='#'>
            <img src={ twitterIcon } alt='Link-to-Neverland-twitter-handle' />
          </a>
          <a href='#'>
            <img src={ instagramIcon } alt='Link-to-Neverland-instagram-page' />
          </a>
        </div>
      </div>
      <div className={ styles.line } />
    </footer>
  );
}

export default Footer;
