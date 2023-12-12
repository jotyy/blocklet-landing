import axios from 'axios';

import storage from './storage';

axios.interceptors.request.use(
  (config) => {
    const prefix = window.blocklet ? window.blocklet.prefix : '/';
    config.baseURL = prefix || '';
    config.timeout = 200000;

    const token = storage.getToken();
    if (!config.headers) {
      config.headers = {};
    }
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    config.headers.Accept = 'application/json';
    return config;
  },
  (error) => Promise.reject(error),
);

export default axios;
