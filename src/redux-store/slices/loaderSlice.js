import {createSlice} from "@reduxjs/toolkit";

const initialValue = { isLoading: false };

const loaderSlice = createSlice({
    name: 'loader',
    initialState: initialValue,
    reducers: {
        showLoader: (state) => {
            state.isLoading = true
        },
        hideLoader: (state) => {
            state.isLoading = false;
        }
    }
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;