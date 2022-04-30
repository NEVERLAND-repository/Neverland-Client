import axios from 'axios';
import getAxiosInstance from '../../services/axios';

const API_URL = 'api/v1/user/'

// update user
const updateUser = async (userData, token) => {
  const response = await getAxiosInstance(token).post(`${ API_URL }profile`, userData);
  if (response.data) {
    localStorage.setItem('UserData', JSON.stringify({...response.data, token}));
  }
  return response.data;
};

//  Logout user
const logout = () => {
  localStorage.removeItem('UserData');
};

const userService = {
  updateUser,
  logout,
};

export default userService;
