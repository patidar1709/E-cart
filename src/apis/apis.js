import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 0,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const login = (payload) => {
  const url = "api/auth/signin";
  return api.post(url, payload);
};

const signUp = (payload) => {
  const url = "api/auth/signup";
  return api.post(url, payload);
};
