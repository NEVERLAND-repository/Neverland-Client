import { configureStore } from '@reduxjs/toolkit';
import neverlandUserReducer from './slice/neverlandUserSlice'

export const store = configureStore({
  reducer: {
    neverlandUser: neverlandUserReducer,
  },
});
