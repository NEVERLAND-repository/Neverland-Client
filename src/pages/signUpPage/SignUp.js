import React from 'react'
import Card from '../../components/authCardComponent/Card'
import FormCard from '../../components/formCardComponent/FormCard'

import styles from './SignUp.module.css'

const SignUp = () => {
  return (
    <section>
      <Card className={styles.formContainer}>
        
        <FormCard formTitle={'Create your account'} />
        
      </Card>
    </section>
  );
}

export default SignUp