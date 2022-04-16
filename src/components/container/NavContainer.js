import React from 'react'
import classes from './NavContainer.module.css'

export const NavContainer = (props) => {
  return (
    <div className={ classes.container }>
      {props.children}
    </div>
  )
}
