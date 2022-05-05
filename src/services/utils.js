// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { USER_DATA } from '../constants';
// import { addUser, deleteUser, getUserData } from '../store/slice/neverlandUserSlice';
// import getAxiosInstance from './axios';
// // import axiosInstance from './axios';

// const navigate = useNavigate()
// const dispatch = useDispatch()
// const token = useSelector(getUserData)?.token;

// const login = async (e, username, password) => {
//   e.preventDefault();
//   //   const response = await getAxiosInstance().post('api/v1/auth/login', {
//   //     username, password,
//   //   })
//   //   localStorage.setItem(USER_DATA, JSON.stringify(response.data));

//   //   dispatch(addUser({
//   //     token: response.data.token,
//   //     data: response.data.data,
//   //   }))

// //   if (response.data.token) {
// //     navigate('/home')
// //   }
// };

// const signup = async (e, fullName, username, password) => {
//   e.preventDefault();
//   //   const response = await getAxiosInstance().post('api/v1/auth/signup', {
//   //     fullName, username, password,
//   //   })

//   //   localStorage.setItem(USER_DATA, JSON.stringify(response.data));

//   //   dispatch(addUser({
//   //     token: response.data.token,
//   //     data: response.data.data,
//   //   }))

// //   if (response.data.token) {
// //     navigate('/home')
// //   }
// };

// const signout = () => {
//   localStorage.removeItem(USER_DATA);
//   dispatch(deleteUser())
// }

// // const addToLibrary = async (bookId) => {
// //   console.log('Hellllo')
// // //   const response = await getAxiosInstance(token).post(
// // //     `api/v1/book/add/?bookId=${ bookId }`,
// // //   )
// // }

// const addToLibrary = {
//   signout, signup, login,
// };

// export default addToLibrary;
