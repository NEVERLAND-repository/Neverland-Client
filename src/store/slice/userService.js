import axios from 'axios';
import getAxiosInstance from '../../services/axios';

const API_URL = 'api/v1/user/'

const updateUser = async (userData, token) => {
  const response = await getAxiosInstance(token).post(`${ API_URL }profile`, userData);
  if (response.data) {
    localStorage.setItem('UserData', JSON.stringify({...response.data, token}));
  }
  return response.data;
};
const userService = {
  updateUser,
};

export default userService;
