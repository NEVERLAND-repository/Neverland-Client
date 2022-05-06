import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAsyncHome,
  fetchAsyncLogin,
  fetchAsyncLogout,
  fetchAsyncOverview,
  updateUser,
  logout,
  login,
  signup,
} from './aysncThunkActions';

const userData = JSON.parse(localStorage.getItem('UserData'));

const initialState = {
  userData: userData || {},
  isSuccess: false,
  message: '',
  isLoaded: false,
  homePageData: {},
  book: {},
  pageCount: 1,
  change: false,
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
        book: {},
        change: false,
      };
    },
    addHomepageData: (state, { payload }) => {
      return { ...state, homePageData: payload };
    },
    addBookData: (state, { payload }) => {
      return { ...state, book: payload };
    },
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    updatePageCount: (state, { payload }) => {
      console.log(state.pageCount, payload)
      return {
        ...state, pageCount: payload,
      }
    },
    changeState: (state, { payload }) => {
      console.log(payload)
      return {
        ...state, change: payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncHome.pending, (state, { payload }) => {
        state.isLoaded = true;
      })
      .addCase(fetchAsyncHome.fulfilled, (state, { payload }) => {
        return {
          ...state,
          homePageData: payload,
          isLoaded: false,
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
        state.userData = null;
      })
      .addCase(fetchAsyncLogin.fulfilled, (state, { payload }) => {
        return { ...state, userData: payload };
      })
      .addCase(signup.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.isSuccess = true;
        state.userData = action.payload;
        state.message = action.payload.message
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoaded = false;
        state.isError = true;
        state.message = action.payload;
        state.userData = {};
      })
      .addCase(login.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.isSuccess = true;
        state.userData = action.payload;
        state.message = action.payload.message
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoaded = false;
        state.isError = true;
        state.message = action.payload;
        state.userData = {};
      })
      .addCase(updateUser.pending, (state, { payload }) => {
        state.isLoaded = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.userData = { ...state.userData, payload };
        state.isLoaded = false;
        state.isSuccess = true;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userData = {};
        state.isLoaded = false;
        state.homePageData = {};
        state.book = {};
      });
  },
});

export const {
  addUser, deleteUser, addHomepageData, addBookData, reset, updatePageCount, changeState,
} = neverlandUserSlice.actions;
export const getUserData = (state) => state.neverlandUser.userData;
export const getHomePageData = (state) => state.neverlandUser.homePageData;
export const getBook = (state) => state.neverlandUser.book;
export const getLoader = (state) => state.neverlandUserSlice.isLoaded;
export const getPageCount = (state) => state.neverlandUserSlice.pageCount;
export const getChange = (state) => state.neverlandUserSlice.change;
export default neverlandUserSlice.reducer;
