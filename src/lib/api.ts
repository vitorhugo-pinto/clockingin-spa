import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if(token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => [
    console.log('Error during interceptors request: ', error)
  ]
)