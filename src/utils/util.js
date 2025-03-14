import {dispatch} from "../redux-store/store.js";
import {hideLoader, showLoader} from "../redux-store/slices/loaderSlice.js";

export const displayLoader = () => {
    dispatch(showLoader());
}

export const closeLoader = () => {
    dispatch(hideLoader());
}