import axios from 'axios';
import { HOST_URL } from '../constants/urls';

export const host = axios.create({
  baseURL: HOST_URL,
});