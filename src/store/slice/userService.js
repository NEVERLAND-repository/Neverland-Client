import axios from 'axios';
import getAxiosInstance from '../../services/axios';

const API_URL = 'api/v1/user/'
const API_AUTH = 'api/v1/auth/'

// register user
const signup = async (userData) => {
  const response = await getAxiosInstance().post(`${ API_AUTH }signup`, userData);
  if (response.data) {
    localStorage.setItem('UserData', JSON.stringify(response.data));
  }
  return response.data;
};

// login user
const login = async (userData) => {
  const response = await await getAxiosInstance().post(`${ API_AUTH }login`, userData);
  if (response.data.token) {
    localStorage.setItem('UserData', JSON.stringify(response.data));
  }
  return response.data;
};
// update user
const updateUser = async (userData, token) => {
  const response = await getAxiosInstance(token).post(`${ API_URL }profile`, userData);
  if (response.data) {
    localStorage.setItem('UserData', JSON.stringify({...response.data, token}))
  }
  return response.data;
};

//  Logout user
const logout = () => {
  localStorage.removeItem('UserData');
};

const userService = {
  updateUser,
  signup,
  login,
  logout,
};

export default userService;
