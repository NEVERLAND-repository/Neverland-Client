import React from 'react';
import Card from '../../components/authCardComponent/Card';
import FormCard from '../../components/formCardComponent/FormCard';
import Form from '../../components/formComponent/Form';

import styles from './authPages.module.css';

const SignUp = () => {
  const formDetails = [
    {
      labelName: 'Name',
      placeholder: 'John Doe',
    },
    {
      labelName: 'Username',
      placeholder: 'johndoe123',
    },
    {
      labelName: 'Password',
      placeholder: '8 characters',
    },
  ];

  return (
    <div>
      <Card className={ styles.formContainer }>

        <FormCard
          formTitle='Create Account'
          altAction='Sign in'
          bottomText='Already have an account? '
          route='/login'
        >

          <Form formDetails={ formDetails } label='Create account' />

        </FormCard>
      </Card>
    </div>
  );
}

export default SignUp;
