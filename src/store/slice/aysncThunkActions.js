import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAsyncHome = createAsyncThunk('neverlandUser/fetchAsyncHome', async (accessToken) => {})

export const fetchAsyncOverview = createAsyncThunk('neverlandUser/fetchAsyncOverview', async (accessToken) => {})

export const fetchAsyncLogin = createAsyncThunk('neverlandUser/fetchAsyncLogin', async (accessToken) => {})

export const fetchAsyncLogout = createAsyncThunk('neverlandUser/fetchAsyncLogout', async (accessToken) => {})
