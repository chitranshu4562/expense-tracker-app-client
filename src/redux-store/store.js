import {configureStore} from "@reduxjs/toolkit";
import loaderReducer from "./slices/loaderSlice.js";

const store = configureStore({
    reducer: {
        loader: loaderReducer
    }
});

export const dispatch = store.dispatch;
export default store;