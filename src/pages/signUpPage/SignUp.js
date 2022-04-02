import React from 'react'
import Card from '../../components/authCardComponent/Card'
import FormCard from '../../components/formCardComponent/FormCard'

import whiteLogo from '../../assets/images/neverLand-logo.png';
import styles from './SignUp.module.css'

const SignUp = () => {
  return (
    <div>
      <Card className={styles.formContainer}>
        <div className={styles.imgContainer}>
          <img src={whiteLogo} alt='NeverLand Logo Color White'/>
        </div>

        <FormCard />
      </Card>
    </div>
  );
}

export default SignUp