import React from "react";
import Card from "../../components/authCardComponent/Card";
import FormCard from "../../components/formCardComponent/FormCard";
import Form from "../../components/formComponent/Form";

import styles from "./authPages.module.css";

const LogIn = (props) => {
  const formDetails = [
    {
      labelName: "Username",
      placeholder: "johndoe123",
      type: "text"
    },
    {
      labelName: "Password",
      placeholder: "8 characters",
      type: "password"
    },
  ];

  return (
    <section>
      <Card className={styles.formContainer}>
        <FormCard formTitle={"Welcome Back!"}
          bottomText={'Don\'t have an account? '}
          altAction={'Sign up'}
          className={styles.loginCard}
        >
          
        <Form formDetails={formDetails} label={"Log In"} />
        
        </FormCard>
      </Card>
    </section>
  );
};

export default LogIn;
