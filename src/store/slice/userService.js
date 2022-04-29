import getAxiosInstance from '../../services/axios';

const updateUser = async (userData, token) => {
  const response = await getAxiosInstance(token).post('api/v1/user/profile', userData);
  console.log('response', response.data)
  return response.data;
};

const userService = {
  updateUser,
};

export default userService;
