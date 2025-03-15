import {createSlice} from "@reduxjs/toolkit";

const initialValue = {
    authToken: '',
    user: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialValue,
    reducers: {
        storeAuthToken: (state, action) => {
            state.authToken = action.payload;
        },
        deleteAuthToken: (state) => {
            state.authToken = '';
        },
        storeUserData: (state, action) => {
            state.user = action.payload;
        },
        deleteUserData: (state, payload) => {
            state.user = null;
        }
    }
});

export const { storeAuthToken, deleteAuthToken, storeUserData, deleteUserData} = authSlice.actions;
export default authSlice.reducer;