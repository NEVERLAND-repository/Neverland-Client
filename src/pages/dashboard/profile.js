import React, { useState } from 'react';
import logo from '../../assets/images/neverLandLogo-orange.png';
import Hamburger from '../../assets/icons/burger.svg';
import profilePatterns from '../../assets/dashboard/patterns.svg';
import profileIcon from '../../assets/dashboard/profile-icon-dummy.svg';
import styles from './dashboard.module.css';
import PrimaryButton from '../../components/buttonComponent/PrimaryButton';
import Footer from '../homePage/components/footerSection/Footer';

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
    <>
      <header className={ `${ styles.profile__Nav } ${ styles.header }` }>
        <div className={ styles.logo }>
          <img src={ logo } alt={ logo } className={ styles.logo__img } />
        </div>
        <div className={ styles.hamburger }>
          <img src={ Hamburger } alt={ Hamburger } />
        </div>
      </header>
      <section className={ styles.profile__overview }>
        <div className={ styles.profile__patterns }>
          <img
            src={ profilePatterns }
            alt={ profilePatterns }
            className={ styles.patterns }
          />
        </div>
        <div className={ styles.profile }>
          <div className={ styles.profile__pic }>
            <img
              src={ profileIcon }
              alt={ profileIcon }
              className={ styles.profile__pic__icon }
            />
          </div>
        </div>
      </section>
      <section className={ styles.form__section }>
        <form className={ styles.form }>
          <div className={ styles.form__group }>
            <div className={ styles.form__group__content__side }>
              <h1 className={ styles.title }>Full name</h1>
              <p className={ styles.subtitle }>Customise your accounts</p>
            </div>
            <div className={ styles.form_group_input__side }>
              <input
                type='text'
                name='FullName'
                id='FullName'
                value={ person.FullName }
                className={ styles.form__group__input }
                onChange={ handleChange }
              />
            </div>
          </div>
          <div className={ styles.form__group }>
            <div className={ styles.form__group__content__side }>
              <h1 className={ styles.title }>Username</h1>
              <p className={ styles.subtitle }>Personalise your library</p>
            </div>
            <div className={ styles.form_group_input__side }>
              <input
                type='text'
                name='username'
                id='username'
                value={ person.username }
                className={ styles.form__group__input }
                onChange={ handleChange }
              />
            </div>
          </div>
          <div className={ styles.form__group }>
            <div className={ styles.form__group__content__side }>
              <h1 className={ styles.title }>Gender</h1>
              <p className={ styles.subtitle }>How you like to be identified</p>
            </div>
            <div className={ `${ styles.form_group_input__side } ${ styles.radio }` }>
              <div className={ styles.radio__control }>
                <input
                  id='male'
                  type='radio'
                  value='male'
                  name='gender'
                  checked={ person.gender === 'male' }
                  onChange={ handleChange }
                />
                <label htmlFor='male'>
                  Male
                </label>
              </div>
              <div className={ styles.radio__control }>
                <input
                  id='female'
                  type='radio'
                  value='female'
                  name='gender'
                  checked={ person.gender === 'female' }
                  onChange={ handleChange }
                />
                <label htmlFor='female'>
                  Female
                </label>
              </div>
              <div className={ styles.radio__control }>
                <input
                  id='other'
                  type='radio'
                  value='other'
                  name='gender'
                  checked={ person.gender === 'other' }
                  onChange={ handleChange }
                />
                <label htmlFor='other'>
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className={ styles.save__changes__btn }>
            <PrimaryButton label='Save Changes' />
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
