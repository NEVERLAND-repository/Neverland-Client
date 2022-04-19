import axios from 'axios';
import { BASE_URL } from '../constants';

const getAxiosInstance = (token = '') => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  instance.defaults.headers.authorization = `Bearer ${ token }`;

  return instance
}

export default getAxiosInstance;
