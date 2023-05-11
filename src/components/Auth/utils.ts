import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  // TODO: Use the url from env file
  //   baseURL: process.env.REACT_APP_API_URL,
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

export default axiosInstance;
