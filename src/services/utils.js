import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { USER_DATA } from '../constants';
import { addUser, deleteUser } from '../store/slice/neverlandUserSlice';
import axiosInstance from './axios';

const navigate = useNavigate()
const dispatch = useDispatch()

const login = async (e, username, password) => {
  e.preventDefault();
  const response = await axiosInstance().post('api/v1/auth/login', {
    username, password,
  })
  localStorage.setItem(USER_DATA, JSON.stringify(response.data));

  dispatch(addUser({
    token: response.data.token,
    data: response.data.data,
  }))

  if (response.data.token) {
    navigate('/home')
  }
};

const signup = async (e, fullName, username, password) => {
  e.preventDefault();
  const response = await axiosInstance().post('api/v1/auth/signup', {
    fullName, username, password,
  })

  localStorage.setItem(USER_DATA, JSON.stringify(response.data));

  dispatch(addUser({
    token: response.data.token,
    data: response.data.data,
  }))

  if (response.data.token) {
    navigate('/home')
  }
};

const signout = () => {
  localStorage.removeItem(USER_DATA);
  dispatch(deleteUser())
}

export { signout, signup, login };
