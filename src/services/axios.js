import axios from 'axios';
import { BASE_URL } from '../constants';

const getAxiosInstance = (token = '') => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  if (token !== '') {
    instance.defaults.headers.authorization = `Bearer ${ token }`;
  } else {
    instance.defaults.headers.authorization = '';
  }

  return instance
}

export default getAxiosInstance;
