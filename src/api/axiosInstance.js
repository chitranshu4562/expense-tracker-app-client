import axios from "axios";
import {baseURL} from "../environments/development.js";
import {getAuthTokenInLocalStorage} from "../utils/auth.js";

export const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Add token in Authorization
axiosInstance.interceptors.request.use((config) => {
    const token = getAuthTokenInLocalStorage();

    if (Boolean(token)) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
})