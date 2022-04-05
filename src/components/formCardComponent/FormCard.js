import React from 'react';
import Form from '../formComponent/Form';

import styles from './FormCard.module.css'

const FormCard = (props) => {
  // const formDetails = [
  //   {
  //     labelName: "Name",
  //     placeholder: "Enter name here",
  //   },
  //   {
  //     labelName: "Username",
  //     placeholder: "Enter password",
  //   },
  //   {
  //     labelName: "Password",
  //     placeholder: "8 characters",
  //   },
  // ];

  return (
    <div className={styles.card}>
      <p className={styles.formTitle}> {props.formTitle} </p>
      {props.children}
      
      {/* <Form formDetails={formDetails}/> */}
      <p className={styles.bottomText}> Already have an account? <a href="#">Sign in </a></p>
    </div>
  );
}

export default FormCard;