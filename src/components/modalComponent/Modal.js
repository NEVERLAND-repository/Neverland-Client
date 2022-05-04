import React from 'react'
import styles from './Modal.module.css'

const Modal = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img src={props.imageSrc} alt='action icon' />
      </div>

      <div>
        <p className={ styles.actionText }> {props.actionText} </p>
      </div>

      <div></div>
    </div>
  )
}

export default Modal