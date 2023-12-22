import { createSlice} from "@reduxjs/toolkit";
import { getContacts, updateContacts, getMedia, getSocials } from "./admin-operathions";

const initialState = {
    contacts: {},
    socials: {},
    isRefreshing: false,
    error: false,
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getContacts.fulfilled, (state, action) => {
                state.contacts = action.payload;
            })
            .addCase(getSocials.fulfilled, (state, action) => {
                state.socials = action.payload;
            })
            .addCase(updateContacts.fulfilled, (state, action) => {
                state.contacts = action.payload;
            })
    }
});    
export const adminReducer = adminSlice.reducer;