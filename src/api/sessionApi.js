import {axiosInstance} from "./axiosInstance.js";

export const logout = () => {
    return axiosInstance('session/logout');
}