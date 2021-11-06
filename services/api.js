import axios from 'axios';

const API_URL = 'https://clinic-front-seven.vercel.app';

const api = axios.create({
  baseURL: API_URL,
});

export { api };
