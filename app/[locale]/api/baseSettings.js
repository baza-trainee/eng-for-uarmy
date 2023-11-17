import axios from 'axios';
console.log(process.env.NEXT_PUBLIC_HOST_URL, "process.env.HOST_URL");

export const host = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_URL,
});