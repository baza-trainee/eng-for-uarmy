import { createSlice} from "@reduxjs/toolkit";
import {
  login,
//   logout,
//   refreshUser,
} from "./auth-operations";

const initialState = {
    admin: { email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: false,
};

const handlePending = (state) => {
  state.isRefreshing = true;
}; 
const handleRejected = (state, action) => {
    state.isRefreshing = false;
    state.error = action.payload.message || false;
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, handlePending)
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.admin;
            state.token = action.payload.user.token;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.error = false;
        })
        .addCase(login.rejected, handleRejected)

        // .addCase(logout.pending, handlePending)
        // .addCase(logout.fulfilled, (state) => {
        //     state.user = {
        //     _id: null,
        //     name: null,
        //     email: null,
        //     phone: null,
        //     role: null,
        //     goodsInCart: [],
        //     };
        //     state.accessToken = null;
        //     state.refreshToken = null;

        //     state.isLoggedIn = false;
        //     state.isRefreshing = false;
        //     state.error = false;
        // })
        // .addCase(logout.rejected, handleRejected)

        // .addCase(refreshUser.pending, handlePending)
        // .addCase(
        //     refreshUser.fulfilled,
        //     (state, action) => {
        //     state.user = action.payload;

        //     state.isLoggedIn = true;
        //     state.isRefreshing = false;
        //     state.error = false;
        //     }
        // )
        // .addCase(refreshUser.rejected, handleRejected)
    },
});

export const authReducer = authSlice.reducer;