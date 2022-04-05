import React from 'react';
import Card from '../../components/authCardComponent/Card';
import FormCard from '../../components/formCardComponent/FormCard';
import Form from '../../components/formComponent/Form';

import styles from '../signUpPage/SignUp.module.css'

const LogIn = (props) => {
  const formDetails = [
    {
      labelName: "Username",
      placeholder: "Enter password",
    },
    {
      labelName: "Password",
      placeholder: "8 characters",
    },
  ];


  return (
    <section>
      <Card className={styles.formContainer}>
        <FormCard formTitle={"Welcome Back!"}>
          <Form formDetails={formDetails} />
        </FormCard>
      </Card>
    </section>
  );
}

export default LogIn;