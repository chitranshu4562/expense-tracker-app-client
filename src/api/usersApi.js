import {axiosInstance} from "./axiosInstance.js";

export const userRegistration = (userData) => {
    return axiosInstance.post('user/registration', userData);
}