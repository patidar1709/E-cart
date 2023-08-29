import axios from "axios";

//axios interceptor
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
  newConfig.headers["x-auth-token"] = `${token}`;
  return newConfig;
});

//login signup api
export const login = (payload) => {
  const url = "api/auth/signin";
  return api.post(url, payload);
};

export const signUp = (payload) => {
  const url = "api/auth/signup";
  return api.post(url, payload);
};

// product api
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

export const getProduct = (id) => {
  const url = `/api/products/${id}`;
  return api.get(url);
};

export const modifyProduct = (id, payload) => {
  const url = `/api/products/${id}`;
  return api.put(url, payload);
};

export const deleteProduct = (id) => {
  const url = `/api/products/${id}`;
  return api.delete(url);
};

//address api
export const getAddress = () => {
  const url = `/api/addresses`;
  return api.get(url);
};

export const saveAddress = (payload) => {
  const url = `/api/addresses`;
  return api.post(url, payload);
};

//order apis
export const orderItem = (payload) => {
  const url = `/api/orders`;
  return api.post(url, payload);
};
