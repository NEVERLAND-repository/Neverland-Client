import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import profilePatterns from '../../assets/dashboard/patterns.svg';
import profileIcon from '../../assets/dashboard/profile-icon-dummy.svg';
import PrimaryButton from '../../components/buttonComponent/PrimaryButton';
import { getUserData } from '../../store/slice/neverlandUserSlice';
import { updateUser } from '../../store/slice/aysncThunkActions'
import Footer from '../homePage/components/footerSection/Footer';
import { FormWrapper, DashboardForm } from './form.styles';
import { ProfileContainer } from './profile.styles';
import { reset } from '../../store/slice/neverlandUserSlice';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector(getUserData);
  const [person, setPerson] = useState({
    username: data.username,
    fullName: data.fullName,
    gender: data.gender,
  });
  const { username, fullName, gender } = person;
  const {
    userData,
    isLoading, isError, isSuccess, message,
  } = useSelector(
    (state) => state.neverlandUser,
  );

  useEffect(() => {
    // console.log('dataaa', people)
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success('User details updated');
    }

    dispatch(reset())
  }, [userData, isError, isSuccess, message, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const { value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName) {
      toast.error('Name filled can"t be empty')
    }
    const newPerson = { ...person };
    dispatch(updateUser(newPerson))
  };

  return (
    <ProfileContainer>
      <section className='profile__overview'>
        <h1 className='title profile-title'>Profile</h1>
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
        <DashboardForm onSubmit={ handleSubmit }>
          <div className='form__group margin-b'>
            <div className='form__group__content__side'>
              <h1 className='title'>Full name</h1>
              <p className='subtitle'>Customise your accounts</p>
            </div>
            <div className='form_group_input__side'>
              <input
                type='text'
                name='fullName'
                id='fullName'
                value={ fullName }
                className='form__group__input'
                onChange={ handleChange }
              />
            </div>
          </div>
          <div className='form__group margin-b'>
            <div className='form__group__content__side'>
              <h1 className='title '>Username</h1>
              <p className='subtitle'>Personalise your library</p>
            </div>
            <div className='form_group_input__side'>
              <input
                type='text'
                name='username'
                id='username'
                disabled
                value={ username }
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
                  checked={ gender === 'male' }
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
                  checked={ gender === 'female' }
                  onChange={ handleChange }
                />
                <label htmlFor='female'>Female</label>
              </div>
              <div className='radio__control'>
                <input
                  id='none'
                  type='radio'
                  value='none'
                  name='gender'
                  checked={ gender === 'none' }
                  onChange={ handleChange }
                />
                <label htmlFor='none'>None</label>
              </div>
            </div>
          </div>
          <div className='save__changes__btn'>
            <PrimaryButton label='Save Changes' btnType='submit' />
          </div>
        </DashboardForm>
      </FormWrapper>
      <Footer />
    </ProfileContainer>
  );
};

export default Profile;
