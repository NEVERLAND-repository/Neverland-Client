import axios from 'axios';
import { BASE_URL } from '../constants';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    console.log(config)
    if (token) {
      config.headers.Authorization = `Bearer ${ token }`;
    }
  },
  (error) => {
    return Promise.reject(error)
  },
);

export default instance
