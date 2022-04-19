import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {},
  isLoaded: false,
  homePageData: {},
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
        homePageData: {},
      }
    },
    addHomepageData: (state, {payload}) => {
      state.homePageData = payload;
    },
  },
});

export const { addUser, deleteUser, addHomepageData } = neverlandUserSlice.actions;
export const getUserData = (state) => state.neverlandUser.userData;
export const getHomePageData = (state) => state.neverlandUser.homePageData;
export const getLoader = (state) => state.neverlandUserSlice.isLoaded;
export default neverlandUserSlice.reducer;
