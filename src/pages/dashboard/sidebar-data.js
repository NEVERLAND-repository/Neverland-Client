import React from 'react'
import Library from './library';
import Profile from './profile';
import libraryImg from '../../assets/icons/pro-icon.svg';
import profileImg from '../../assets/icons/book.svg';

const sidebar = [
  {
    category: ' Dashboard',
    sideclass: 'dashboard',
    img: libraryImg,
    imgclass: 'img-dash',
    subsideclass: 'each-us',
    component: <Library />,
  },
  {
    category: ' Billing',
    sideclass: 'billing',
    img: profileImg,
    imgclass: 'img-billing',
    subsideclass: 'each-us',
    component: <Profile />,
  },
];

export default nav;
