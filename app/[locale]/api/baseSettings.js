import axios from 'axios';

export const host = axios.create({
  baseURL: 'https://eng-for-uarmy-backend.onrender.com',
});