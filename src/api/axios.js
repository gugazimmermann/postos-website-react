import axios from 'axios';

const baseURL = `${process.env.REACT_APP_API_URL}/register` || '';

const instance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
