import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../services/axios';
import InputField from '../inputComponent/InputField';
import PrimaryButton from '../buttonComponent/PrimaryButton';
import { signup, login } from '../../store/slice/aysncThunkActions';
import styles from './Form.module.css';
import { addUser, reset } from '../../store/slice/neverlandUserSlice';
import { USER_DATA } from '../../constants';
import LoadingComponent from '../loadingComponent/LoadingComponent';

const Form = ({ label }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
  });
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    userData, isLoaded, isError, isSuccess, message,
  } = useSelector(
    (state) => state.neverlandUser,
  );
  const { fullName, username, password } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      if (userData.status === 'error') {
        toast.error(message)
      } else {
        toast.success(message)
      }
    }
    if (userData.token) {
      navigate('/home');
    }
    return () => dispatch(reset());
  }, [userData, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitSignup = (e) => {
    e.preventDefault();
    if (!password || !username || !fullName) {
      toast.error("Fields can't be left empty");
    } else {
      const userDetails = {
        fullName,
        username,
        password,
      };
      dispatch(signup(userDetails));
    }
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    if ( !username || !password) {
      toast.error("Fields can't be left empty");
    } else {
      const userDetails = {
        username,
        password,
      };
      dispatch(login(userDetails));
    }
  };

  const renderLogin = () => (
    <>
      <InputField
        labelName='Username'
        name='username'
        type='text'
        placeholder='johndoe123'
        callback={ onChange }
      />
      <div className={ styles.passwordInput }>
        <InputField
          labelName='Password'
          name='password'
          type={ !active ? 'password' : 'text' }
          placeholder='8 characters'
          callback={ onChange }
        />

        {!active ? (
          <svg
            width='21'
            height='20'
            viewBox='0 0 21 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={ () => setActive(!active) }
          >
            <path
              d='M19.5093 7.76982C18.7567 6.53734 17.8073 5.43643 16.6988 4.51078L19.0333 2.17635C19.1852 2.01911 19.2692 1.80851 19.2673 1.58991C19.2654 1.37131 19.1777 1.1622 19.0231 1.00762C18.8685 0.853041 18.6594 0.765359 18.4408 0.763459C18.2222 0.76156 18.0116 0.845595 17.8544 0.997464L15.3157 3.53949C13.742 2.60474 11.9428 2.11754 10.1124 2.1305C4.95082 2.1305 2.00944 5.66383 0.715496 7.76982C0.315748 8.41638 0.104004 9.16151 0.104004 9.92166C0.104004 10.6818 0.315748 11.4269 0.715496 12.0735C1.46815 13.306 2.41754 14.4069 3.52599 15.3325L1.19155 17.667C1.11192 17.7439 1.04841 17.8359 1.00471 17.9376C0.96102 18.0393 0.938021 18.1487 0.937059 18.2594C0.936097 18.3701 0.957191 18.4799 0.999112 18.5824C1.04103 18.6848 1.10294 18.7779 1.18122 18.8562C1.2595 18.9345 1.35259 18.9964 1.45505 19.0383C1.55751 19.0802 1.6673 19.1013 1.778 19.1004C1.8887 19.0994 1.9981 19.0764 2.09982 19.0327C2.20154 18.989 2.29353 18.9255 2.37044 18.8459L4.91497 16.3013C6.48677 17.2359 8.28378 17.724 10.1124 17.7128C15.274 17.7128 18.2154 14.1795 19.5093 12.0735C19.9091 11.4269 20.1208 10.6818 20.1208 9.92166C20.1208 9.16151 19.9091 8.41638 19.5093 7.76982V7.76982ZM2.13616 11.2006C1.89867 10.8163 1.77287 10.3734 1.77287 9.92166C1.77287 9.46989 1.89867 9.02704 2.13616 8.64273C3.24835 6.83688 5.76204 3.79795 10.1124 3.79795C11.4966 3.79019 12.8614 4.1238 14.086 4.76924L12.4077 6.44753C11.6072 5.91611 10.6476 5.678 9.69158 5.77358C8.73557 5.86917 7.84207 6.29257 7.1627 6.97194C6.48333 7.65132 6.05992 8.54481 5.96434 9.50083C5.86875 10.4568 6.10687 11.4165 6.63828 12.2169L4.71238 14.1428C3.69115 13.3172 2.81968 12.3219 2.13616 11.2006V11.2006ZM12.6136 9.92166C12.6136 10.585 12.3501 11.2212 11.881 11.6903C11.412 12.1593 10.7758 12.4228 10.1124 12.4228C9.741 12.4214 9.37474 12.3359 9.04108 12.1727L12.3635 8.85033C12.5266 9.18398 12.6122 9.55025 12.6136 9.92166V9.92166ZM7.61124 9.92166C7.61124 9.25831 7.87476 8.62213 8.34382 8.15306C8.81288 7.684 9.44906 7.42049 10.1124 7.42049C10.4838 7.42192 10.8501 7.50743 11.1838 7.6706L7.86136 10.993C7.69819 10.6593 7.61268 10.2931 7.61124 9.92166ZM18.0887 11.2006C16.9765 13.0064 14.4628 16.0454 10.1124 16.0454C8.72821 16.0531 7.36343 15.7195 6.13888 15.0741L7.81717 13.3958C8.6176 13.9272 9.57724 14.1653 10.5333 14.0697C11.4893 13.9742 12.3828 13.5508 13.0621 12.8714C13.7415 12.192 14.1649 11.2985 14.2605 10.3425C14.3561 9.38649 14.118 8.42685 13.5866 7.62642L15.5125 5.70051C16.5337 6.52613 17.4052 7.52141 18.0887 8.64273C18.3262 9.02704 18.452 9.46989 18.452 9.92166C18.452 10.3734 18.3262 10.8163 18.0887 11.2006V11.2006Z'
              fill='#0E0B0B'
            />
          </svg>
        ) : (
          <AiOutlineEye
            className={ styles.icon }
            onClick={ () => setActive(!active) }
          />
        )}
      </div>
    </>
  );

  const renderSignUp = () => (
    <>
      <InputField
        labelName='Name'
        type='text'
        name='fullName'
        placeholder='John Doe'
        callback={ onChange }
      />
      <InputField
        labelName='Username'
        name='username'
        type='text'
        placeholder='johndoe123'
        callback={ onChange }
      />
      <div className={ styles.passwordInput }>
        <InputField
          labelName='Password'
          name='password'
          type={ !active ? 'password' : 'text' }
          placeholder='8 characters'
          callback={ onChange }
        />

        {!active ? (
          <svg
            width='21'
            height='20'
            viewBox='0 0 21 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={ () => setActive(!active) }
          >
            <path
              d='M19.5093 7.76982C18.7567 6.53734 17.8073 5.43643 16.6988 4.51078L19.0333 2.17635C19.1852 2.01911 19.2692 1.80851 19.2673 1.58991C19.2654 1.37131 19.1777 1.1622 19.0231 1.00762C18.8685 0.853041 18.6594 0.765359 18.4408 0.763459C18.2222 0.76156 18.0116 0.845595 17.8544 0.997464L15.3157 3.53949C13.742 2.60474 11.9428 2.11754 10.1124 2.1305C4.95082 2.1305 2.00944 5.66383 0.715496 7.76982C0.315748 8.41638 0.104004 9.16151 0.104004 9.92166C0.104004 10.6818 0.315748 11.4269 0.715496 12.0735C1.46815 13.306 2.41754 14.4069 3.52599 15.3325L1.19155 17.667C1.11192 17.7439 1.04841 17.8359 1.00471 17.9376C0.96102 18.0393 0.938021 18.1487 0.937059 18.2594C0.936097 18.3701 0.957191 18.4799 0.999112 18.5824C1.04103 18.6848 1.10294 18.7779 1.18122 18.8562C1.2595 18.9345 1.35259 18.9964 1.45505 19.0383C1.55751 19.0802 1.6673 19.1013 1.778 19.1004C1.8887 19.0994 1.9981 19.0764 2.09982 19.0327C2.20154 18.989 2.29353 18.9255 2.37044 18.8459L4.91497 16.3013C6.48677 17.2359 8.28378 17.724 10.1124 17.7128C15.274 17.7128 18.2154 14.1795 19.5093 12.0735C19.9091 11.4269 20.1208 10.6818 20.1208 9.92166C20.1208 9.16151 19.9091 8.41638 19.5093 7.76982V7.76982ZM2.13616 11.2006C1.89867 10.8163 1.77287 10.3734 1.77287 9.92166C1.77287 9.46989 1.89867 9.02704 2.13616 8.64273C3.24835 6.83688 5.76204 3.79795 10.1124 3.79795C11.4966 3.79019 12.8614 4.1238 14.086 4.76924L12.4077 6.44753C11.6072 5.91611 10.6476 5.678 9.69158 5.77358C8.73557 5.86917 7.84207 6.29257 7.1627 6.97194C6.48333 7.65132 6.05992 8.54481 5.96434 9.50083C5.86875 10.4568 6.10687 11.4165 6.63828 12.2169L4.71238 14.1428C3.69115 13.3172 2.81968 12.3219 2.13616 11.2006V11.2006ZM12.6136 9.92166C12.6136 10.585 12.3501 11.2212 11.881 11.6903C11.412 12.1593 10.7758 12.4228 10.1124 12.4228C9.741 12.4214 9.37474 12.3359 9.04108 12.1727L12.3635 8.85033C12.5266 9.18398 12.6122 9.55025 12.6136 9.92166V9.92166ZM7.61124 9.92166C7.61124 9.25831 7.87476 8.62213 8.34382 8.15306C8.81288 7.684 9.44906 7.42049 10.1124 7.42049C10.4838 7.42192 10.8501 7.50743 11.1838 7.6706L7.86136 10.993C7.69819 10.6593 7.61268 10.2931 7.61124 9.92166ZM18.0887 11.2006C16.9765 13.0064 14.4628 16.0454 10.1124 16.0454C8.72821 16.0531 7.36343 15.7195 6.13888 15.0741L7.81717 13.3958C8.6176 13.9272 9.57724 14.1653 10.5333 14.0697C11.4893 13.9742 12.3828 13.5508 13.0621 12.8714C13.7415 12.192 14.1649 11.2985 14.2605 10.3425C14.3561 9.38649 14.118 8.42685 13.5866 7.62642L15.5125 5.70051C16.5337 6.52613 17.4052 7.52141 18.0887 8.64273C18.3262 9.02704 18.452 9.46989 18.452 9.92166C18.452 10.3734 18.3262 10.8163 18.0887 11.2006V11.2006Z'
              fill='#0E0B0B'
            />
          </svg>
        ) : (
          <AiOutlineEye
            className={ styles.icon }
            onClick={ () => setActive(!active) }
          />
        )}
      </div>
    </>
  );

  return (
    <form onSubmit={ label === 'Log In' ? onSubmitLogin : onSubmitSignup }>
      <div className={ styles.formField }>
        {label === 'Log In' ? renderLogin() : renderSignUp()}
      </div>

      <div className={ styles.submitButton }>
        <PrimaryButton label={ label } />
      </div>
    </form>
  );
};

export default Form;
