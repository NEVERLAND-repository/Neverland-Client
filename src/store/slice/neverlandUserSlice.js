import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAsyncHome,
  fetchAsyncLogin,
  fetchAsyncLogout,
  fetchAsyncOverview,
  updateUser,
} from './aysncThunkActions';

const userData = JSON.parse(localStorage.getItem('UserData'));
const initialState = {
  userData: userData || null,
  isSuccess: false,
  message: '',
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
      };
    },
    addHomepageData: (state, { payload }) => {
      state.homePageData = payload;
    },
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncHome.pending, (state, { payload }) => {
        state.isLoaded = false;
      })
      .addCase(fetchAsyncHome.fulfilled, (state, { payload }) => {
        return {
          ...state,
          homePageData: payload,
          isLoaded: true,
        };
      })
      .addCase(fetchAsyncHome.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
        state.userData = null;
      })
      .addCase(fetchAsyncOverview.fulfilled, (state, { payload }) => {})
      .addCase(fetchAsyncLogout.fulfilled, (state, { payload }) => {
        state.userData = null
      })
      .addCase(fetchAsyncLogin.fulfilled, (state, { payload }) => {
        return { ...state, userData: payload };
      })
      .addCase(updateUser.pending, (state, {payload}) => {
        state.isLoaded = true;
      })
      .addCase(updateUser.fulfilled, (state, {payload}) => {
        state.userData = {...state.userData, payload}
        state.isLoaded = false;
        state.isSuccess = true;
      })
      .addCase(updateUser.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
  },
});

export const {
  addUser, deleteUser, addHomepageData, reset,
} = neverlandUserSlice.actions;
export const getUserData = (state) => state.neverlandUser.userData;
export const getHomePageData = (state) => state.neverlandUser.homePageData;
export const getLoader = (state) => state.neverlandUserSlice.isLoaded;
export default neverlandUserSlice.reducer;
