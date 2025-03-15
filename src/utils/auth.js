import {AUTH_TOKEN, TOKEN_EXPIRATION_TIME_IN_SECONDS, USER_DATA} from "../constants.js";
import {dispatch} from "../redux-store/store.js";
import {storeAuthToken, storeUserData} from "../redux-store/slices/authSlice.js";

export const handleAuthData = (authData) => {
    const {authToken, user, expiresIn} = authData;
    saveAuthTokenInLocalStorage(authToken);
    saveUserDataInLocalStorage(user);
    saveTokenExpInLocalStorage(expiresIn);
    dispatch(storeAuthToken(authToken));
    dispatch(storeUserData(user))
}

export const saveAuthTokenInLocalStorage = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
}

export const removeAuthTokenFromLocalStorage = () => {
    localStorage.removeItem(AUTH_TOKEN);
}

export const getAuthTokenInLocalStorage = () => {
    return localStorage.getItem(AUTH_TOKEN);
}

export const saveUserDataInLocalStorage = (userData) => {
    localStorage.setItem(USER_DATA, JSON.stringify(userData));
}

export const removeUserDataFromLocalStorage = () => {
    localStorage.removeItem(USER_DATA);
}

export const getUserDataInLocalStorage = () => {
    return JSON.parse(localStorage.getItem(USER_DATA));
}

export const saveTokenExpInLocalStorage = (timeInSeconds) => {
    localStorage.setItem(TOKEN_EXPIRATION_TIME_IN_SECONDS, JSON.stringify(timeInSeconds));
}

export const getTokenExpFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(TOKEN_EXPIRATION_TIME_IN_SECONDS));
}

export const removeTokenExpFromLocalStorage = () => {
    localStorage.removeItem(TOKEN_EXPIRATION_TIME_IN_SECONDS);
}

export const removeAuthDataFromLocalStorage = () => {
    removeAuthTokenFromLocalStorage();
    removeUserDataFromLocalStorage();
    removeTokenExpFromLocalStorage();
}