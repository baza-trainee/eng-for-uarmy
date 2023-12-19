import { host } from '@/app/api/baseSettings';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = token => {
  host.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  host.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /api/auth/login
 * body: { email, password }
 */
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await host.post('/api/auth/login', credentials);
      console.log("data", data);
            
      setAuthHeader(data.admin.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /api/auth/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await host.get('/api/auth/logout');
            
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /api/auth/current
 * headers: Authorization: Bearer token
 */
export const refreshAdmin = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch admin');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await host.get('/api/auth/current');
      console.log('res.data', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);