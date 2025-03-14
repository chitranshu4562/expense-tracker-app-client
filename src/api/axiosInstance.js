import axios from "axios";
import {baseURL} from "../environments/development.js";

export const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})