import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Important for sending cookies with requests
});

export default axiosInstance;
