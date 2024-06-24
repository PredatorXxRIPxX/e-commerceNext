import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface Admin {
    auth: boolean;
    username: string;
    email: string;
}

const initialState:Admin = {
    auth: false,
    username: "",
    email: "",
    
};

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        loginAdmin: (state, action:PayloadAction<Admin>) => {
            state.auth = action.payload.auth;
            state.username = action.payload.username;
            state.email = action.payload.email;
        },
        logoutAdmin: () => {
            return initialState;
        },
    },
});

export const { loginAdmin, logoutAdmin } = adminSlice.actions;
export const selectAdmin = (state:Admin) => state;
export default adminSlice;