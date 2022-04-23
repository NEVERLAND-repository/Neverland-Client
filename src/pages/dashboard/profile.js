import React, { useState } from 'react';
import logo from '../../assets/images/neverLandLogo-orange.png';
import Hamburger from '../../assets/icons/burger.svg';
import profilePatterns from '../../assets/dashboard/patterns.svg';
import profileIcon from '../../assets/dashboard/profile-icon-dummy.svg';
import PrimaryButton from '../../components/buttonComponent/PrimaryButton';
// import Footer from '../homePage/components/footerSection/Footer';
import { FormWrapper, DashboardForm } from './form.styles';
import { ProfileContainer } from './profile.styles';

const Profile = () => {
  const [person, setPerson] = useState({
    username: '',
    FullName: '',
    gender: 'other',
  });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName || person.email || person.age) {
      const newPerson = { ...person };
      setPeople([...people, newPerson]);
    }
  };
  return (
    <ProfileContainer>
      <header className='mobile__header'>
        <div className='logo'>
          <img src={ logo } alt={ logo } className='logo__img' />
        </div>
        <div className='hamburger'>
          <img src={ Hamburger } alt={ Hamburger } />
        </div>
      </header>
      <section className='profile__overview'>
        <div className='profile__patterns'>
          <img
            src={ profilePatterns }
            alt={ profilePatterns }
            className='patterns'
          />
        </div>
        <div className='profile '>
          <div className='profile__pic'>
            <img
              src={ profileIcon }
              alt={ profileIcon }
              className='profile__pic__icon '
            />
          </div>
        </div>
      </section>
      <FormWrapper>
        <DashboardForm>
          <div className='form__group'>
            <div className='form__group__content__side'>
              <h1 className='title'>Full name</h1>
              <p className='subtitle'>Customise your accounts</p>
            </div>
            <div className='form_group_input__side'>
              <input
                type='text'
                name='FullName'
                id='FullName'
                value={ person.FullName }
                className='form__group__input'
                onChange={ handleChange }
              />
            </div>
          </div>
          <div className='form__group'>
            <div className='form__group__content__side'>
              <h1 className='title '>Username</h1>
              <p className='subtitle'>Personalise your library</p>
            </div>
            <div className='form_group_input__side'>
              <input
                type='text'
                name='username'
                id='username'
                value={ person.username }
                className='form__group__input '
                onChange={ handleChange }
              />
            </div>
          </div>
          <div className='form__group'>
            <div className='form__group__content__side '>
              <h1 className='title'>Gender</h1>
              <p className='subtitle'>How you like to be identified</p>
            </div>
            <div className='form_group_input__side radio'>
              <div className='radio__control'>
                <input
                  id='male'
                  type='radio'
                  value='male'
                  name='gender'
                  checked={ person.gender === 'male' }
                  onChange={ handleChange }
                />
                <label htmlFor='male'>Male</label>
              </div>
              <div className='radio__control '>
                <input
                  id='female'
                  type='radio'
                  value='female'
                  name='gender'
                  checked={ person.gender === 'female' }
                  onChange={ handleChange }
                />
                <label htmlFor='female'>Female</label>
              </div>
              <div className='radio__control'>
                <input
                  id='other'
                  type='radio'
                  value='other'
                  name='gender'
                  checked={ person.gender === 'other' }
                  onChange={ handleChange }
                />
                <label htmlFor='other'>Other</label>
              </div>
            </div>
          </div>
          <div className='save__changes__btn'>
            <PrimaryButton label='Save Changes' />
          </div>
        </DashboardForm>
      </FormWrapper>
      {/* <Footer /> */}
    </ProfileContainer>
  );
};

export default Profile;
