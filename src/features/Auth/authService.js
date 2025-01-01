import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
});

// Login API
export const login = async (credentials) => {
  const { data } = await API.post("/auth/login", credentials);
  return data;
};

// Register API
export const register = async (userData) => {
  const { data } = await API.post("/auth/register", userData);
  return data;
};

// Forgot Password API
export const forgotPassword = async (email) => {
  const { data } = API.post("/auth/forgot-password", email);
  return data;
};

// Token Refresh API
export const refreshToken = async () => {
  const { data } = API.get("/auth/refresh-token");
  return data;
};
