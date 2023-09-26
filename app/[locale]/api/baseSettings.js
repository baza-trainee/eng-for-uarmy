import axios from 'axios';

export const host = axios.create({
  baseURL: process.env.HOST_URL,
});