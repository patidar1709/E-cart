import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 0,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

api.interceptors.request.use((config) => {
  const newConfig = { ...config };
  const token = localStorage.getItem("authorization");
  newConfig.headers["authorization"] = `Bearer ${token}`;
  return newConfig;
});

export const login = (payload) => {
  const url = "api/auth/signin";
  return api.post(url, payload);
};

export const signUp = (payload) => {
  const url = "api/auth/signup";
  return api.post(url, payload);
};

export const addProduct = (payload) => {
  const url = "api/products";
  return api.post(url, payload);
};

export const productCategories = () => {
  const url = "api/products/categories";
  return api.get(url);
};

export const productList = () => {
  const url = "/api/products";
  return api.get(url);
};
