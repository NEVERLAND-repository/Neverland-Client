import React from 'react';

import whiteLogo from '../../assets/images/neverLand-logo.png';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={ `${ styles.card } ${ props.className }` }>
      <div className={ styles.imgContainer }>
        <img src={ whiteLogo } alt='NeverLand Logo Color White' />
      </div>

      {props.children}

    </div>
  );
}

export default Card;
