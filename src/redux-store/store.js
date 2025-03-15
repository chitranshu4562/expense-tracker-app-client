import {configureStore} from "@reduxjs/toolkit";
import loaderReducer from "./slices/loaderSlice.js";
import authReducer from "./slices/authSlice.js";

const store = configureStore({
    reducer: {
        loader: loaderReducer,
        auth: authReducer
    }
});

export const dispatch = store.dispatch;
export default store;