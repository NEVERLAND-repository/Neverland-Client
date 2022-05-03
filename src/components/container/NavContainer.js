import React from 'react'
import styles from './NavContainer.module.css'

export const NavContainer = (props) => {
  return (
    <div className={ styles.container }>
      {props.children}
    </div>
  )
}
