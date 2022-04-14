/* eslint-disable react/jsx-indent */
import React from 'react';
import styles from './Container.module.css';

// eslint-disable-next-line react/prop-types
export function Container({ children }) {
// eslint-disable-next-line indent
    return (
        <div className={styles.container}>
            {children}
        </div>
  );
}
