import { createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

export const fetchAsyncHome = createAsyncThunk(
  'neverlandUser/fetchAsyncHome',
  async (accessToken) => {},
);

export const fetchAsyncOverview = createAsyncThunk(
  'neverlandUser/fetchAsyncOverview',
  async (accessToken) => {},
);

export const fetchAsyncLogin = createAsyncThunk(
  'neverlandUser/fetchAsyncLogin',
  async (accessToken) => {},
);

export const fetchAsyncLogout = createAsyncThunk(
  'neverlandUser/fetchAsyncLogout',
  async (accessToken) => {},
);

// Update user
export const updateUser = createAsyncThunk(
  'neverlandUser/update',
  async (userData, thunkAPI) => {
    try {
      const {token} = thunkAPI.getState().neverlandUser.userData;
      return await userService.updateUser(userData, token);
    } catch (error) {
      const message = (error.response
          && error.response.data
          && error.response.data.message)
        || error.message
        || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);
