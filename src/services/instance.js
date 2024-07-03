import axios from "axios";

const baseURL = "https://urlshortener-backend-40am.onrender.com";

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const protectedInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enabling cookies for authentication
});

export { instance, protectedInstance };
