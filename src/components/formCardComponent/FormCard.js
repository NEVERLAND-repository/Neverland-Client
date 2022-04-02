import React from 'react';
import InputField from '../inputComponent/InputField';
import PrimaryButton from '../buttonComponent/PrimaryButton';

import styles from './FormCard.module.css'

const FormCard = (props) => {
  const formDetails = [
    {
      labelName: 'Name',
      placeholder: 'Enter name here'
    },
    {
      labelName: 'Username',
      placeholder: 'Enter password'
    },
    {
      labelName: 'Password',
      placeholder: '8 characters'
    }
  ]


  return (
    <div className={styles.card}>
      <p className={styles.formTitle}> Create your account </p>

      <form>
        <div className={styles.formField}>
          {formDetails.map((formDetails) => (
            <InputField
              labelName={formDetails.labelName}
              placeholder={formDetails.placeholder}
            />
          ))}
        </div>
        <div className={styles.submitButton}>
          <PrimaryButton />
        </div>
      </form>

      <p className={styles.bottomText}> Already have an account? <a href="#">Sign in </a></p>
    </div>
  );
}

export default FormCard;