import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FormCard.module.css';

const FormCard = ({
  formTitle, bottomText, altAction, children, route, login,
}) => {
  return (
    <div className={`${login ? styles.loginCard : styles.card} ` }>
      <p className={ styles.formTitle }>
        {formTitle}
      </p>

      {children}

      <p className={ styles.bottomText }>
        {bottomText}
        <span className={ styles.altAction }>
          <Link to={ route }>
            {altAction}
          </Link>
        </span>
      </p>
    </div>
  );
}

export default FormCard;
