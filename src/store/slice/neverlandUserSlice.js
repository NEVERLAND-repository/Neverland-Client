import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {},
  isLoaded: false,
  token: '',
};

const neverlandUserSlice = createSlice({
  name: 'neverlandUser',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.userData = payload;
    },
    deleteUser: (state) => {
      return {
        ...state,
        userData: {},
        isLoaded: false,
        token: '',
      }
    },
  },
});

export const { addUser, deleteUser } = neverlandUserSlice.actions;
export const getUserData = (state) => state.neverlandUser.userData;
export const getLoader = (state) => state.neverlandUserSlice.isLoaded;
export default neverlandUserSlice.reducer;
