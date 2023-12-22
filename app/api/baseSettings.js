import axios from 'axios';

export const host = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_URL
});