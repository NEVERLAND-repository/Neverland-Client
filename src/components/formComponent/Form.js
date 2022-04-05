import React from 'react'
import InputField from "../inputComponent/InputField";
import PrimaryButton from "../buttonComponent/PrimaryButton";

import styles from './Form.module.css';

const Form = (props) => {

  return (
    <form>
      <div className={styles.formField}>
        {props.formDetails.map((formDetails) => (
          <InputField
            labelName={formDetails.labelName}
            placeholder={formDetails.placeholder}
          />
        ))}
      </div>
      <div className={styles.submitButton}>
        <PrimaryButton label={"Login"} />
      </div>
    </form>
  );
}

export default Form