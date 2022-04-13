import axios from 'axios';

const token = '';
const baseURL = process.env.NODE_ENV !== 'development' ? 'http://localhost:8800/' : 'https://neverland-test.herokuapp.com/'

const instance = axios.create({
  baseURL,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Basic ${ token }`,
//   },
});

export default instance
