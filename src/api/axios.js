import axios from 'axios';
import { store } from '../state/store';
import { logout, refreshToken } from '../features/Auth/authSlice';

const API = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL,
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return token;
  },
  (error) => Promise.reject(error),
);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.status === 401 &&
      !originalRequest._retry &&
      error.response.data.message === 'Token expired'
    ) {
      originalRequest._retry = true;
      try {
        const newAcessToken = await store.dispatch(refreshToken()).unwrap();
        originalRequest.headers.Authorization = `Bearer ${newAcessToken}`;
        return API(originalRequest);
      } catch (refreshError) {
        store.dispatch(logout());
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default API;
