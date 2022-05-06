import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FormCard.module.css';
import styles2 from '../../pages/authPages/authPages.module.css'

const FormCard = ({
  formTitle, bottomText, altAction, children, route,
}) => {
  return (
    <div className={ `${ styles.card } ${ styles2.loginCard }` }>
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
