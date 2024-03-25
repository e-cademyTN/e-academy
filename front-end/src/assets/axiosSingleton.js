import axios from 'axios';

const token = localStorage.getItem("token");

const instance = axios.create();

instance.interceptors.request.use(config => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
