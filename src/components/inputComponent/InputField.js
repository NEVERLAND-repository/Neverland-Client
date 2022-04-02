import React from 'react'

import styles from './InputField.module.css';

const InputField = (props) => {
  return (
    <div>
      <label className={styles.inputLabelContainer}>
        <p> {`${props.labelName}:`} </p>

        <input
          type={props.type}
          placeholder={props.placeholder}
          className={styles.inputField}
        />

        
      </label>
    </div>
  );
}

export default InputField;