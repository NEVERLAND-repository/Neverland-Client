import React from 'react';
import Card from '../../components/authCardComponent/Card';
import FormCard from '../../components/formCardComponent/FormCard';
import Form from '../../components/formComponent/Form';

import styles from './authPages.module.css';

const LogIn = () => {
  return (
    <section>
      <Card className={ styles.formContainer }>
        <FormCard
          formTitle='Welcome Back!'
          bottomText={ 'Don\'t have an account? ' }
          altAction='Sign up'
          route='/register'
          login
        >

          <Form label='Log In' />

        </FormCard>
      </Card>
    </section>
  );
}

export default LogIn;
