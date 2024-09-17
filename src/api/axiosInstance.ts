import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
   baseURL: 'https://api.quicksell.co/v1/internal',
   timeout: 10000,
   headers: {
      'Content-Type': 'application/json',
   },
});

axiosInstance.interceptors.response.use(
   (response: AxiosResponse) => response,
   (error: AxiosError) => {
      return Promise.reject(error);
   }
);

export default axiosInstance;
