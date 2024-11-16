import axios from 'axios'
export const axiosInstance = axios.create({
  baseURL: "http://localhost:7774/api",
  timeout: 4000,
  headers: { "Content-Type":"application/json" ,
    'Accept':'/*',
  },
});
