import React from 'react';
import logo from '../../../assets/images/neverLandLogo-orange.png';
import Hamburger from '../../../assets/icons/burger.svg';
import { MobileNavigation } from '../profile.styles';

const Navigation = ({showSidebar}) => {
  return (
    <MobileNavigation>
      <div className='logo'>
        <img src={ logo } alt={ logo } className='logo__img' />
      </div>
      <div className='hamburger'>
        <img src={ Hamburger } alt={ Hamburger } onClick={ showSidebar } />
      </div>
    </MobileNavigation>
  );
};

export default Navigation;
