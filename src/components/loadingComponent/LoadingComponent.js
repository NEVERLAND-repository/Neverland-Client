import React from 'react';
import loader from '../../assets/icons/loader.svg';
import styles from './LoadingComponent.module.css'

const LoadingComponent = () => {
  return (
    <div className={ styles.loader }>
      <img src={ loader } alt='Loader' />
    </div>
  )
}

export default LoadingComponent;
