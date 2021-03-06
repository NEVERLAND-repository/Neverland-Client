import styled from 'styled-components';

export const FormWrapper = styled.section`
  padding: 7rem 2rem;
`;

export const DashboardForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  .title {
    font-size: 2.3rem;
    font-weight: 600;
  }

  .subtitle {
    font-size: 1.5rem;
    color: ${ ({ theme }) => theme.color.secondaryColor };
  }

  .form__group {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (min-width: 48rem) {
      display: grid;
      grid-template-columns: 30% 70%;
      align-items: center;
      gap: 3rem;
    }
  }

  .form_group_input__side {
    width: 100%;
  }
  .form__group__input {
    width: 90%;
    outline: none;
    border: 1px solid #c4c4c4;
    height: 4rem;
    border-radius: 0.8rem;
    padding: 2rem;
    font-size: 2rem;

    &:focus {
    color: var(--subtitle-color);
    /* outline: none; */
    border: 1px solid ${ ({ theme }) => theme.color.primaryColor };
  }

    @media screen and (min-width:48rem) {
      width: 60%;
    }
  }


  
  .radio {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (min-width:48rem){
      flex-direction: row;
      gap: 3rem;
    }
  }
  .radio__control {
    display: flex;
    gap: 2rem;

  input[type="radio"] {
  display: none; 
}

input[type="radio"]+label:before {
  content: "";
  /* create custom radiobutton appearance */
  display: inline-block;
  width: 25px;
  height: 25px;
  padding: 2px;
  margin-right: 6px;
  /* background-color only for content */
  background-clip: content-box;
  border: 2px solid #bbbbbb;

  border-radius: 50%;
}

/* appearance for checked radiobutton */
input[type="radio"]:checked + label:before {
  background-color: ${ ({ theme }) => theme.color.primaryColor };
  border: 2px solid ${ ({ theme }) => theme.color.primaryColor };
}
}



  .form_group_input__side label {
    font-size: 2rem;
  display: flex;
  align-items: center;

  }

  .save__changes__btn {
    margin: 4rem auto 0 auto;
  }
`;
