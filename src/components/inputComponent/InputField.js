import React, { useState } from 'react';

import styles from './InputField.module.css';

const InputField = ({
  labelName, type, placeholder, callback, ...props
}) => {
  const callbackFunc = (e) => callback(e);

  return (
    <div>
      <label className={ styles.inputLabelContainer }>
        {labelName && (
          <p>
            {`${ labelName }`}
          </p>
        )}

        <input
          type={ type }
          name={ props.name }
          placeholder={ placeholder }
          className={ styles.inputField }
          required
          onChange={ callbackFunc }
        />
      </label>
    </div>
  );
}

export default InputField;
