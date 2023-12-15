import { host } from '../../app/api/baseSettings';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
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
            // After successful login, add the token to the HTTP header
            setAuthHeader(data.admin.token);

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);