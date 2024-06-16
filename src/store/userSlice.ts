import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface User {
    auth: boolean;
    username: string;
    email: string;
    orders: string[];

}

const initialState:User = {
    auth: false,
    username: "",
    email: "",
    orders: [],
    
};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action:PayloadAction<User>) => {
            state.auth = action.payload.auth;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.orders = action.payload.orders;
        },
        logout: () => {
            return initialState;
        },
        addOrder:(state,action)=>{
            state.orders.push(action.payload);
        }
    },
});

export const { login, logout,addOrder } = userSlice.actions;
export const selectUser = (state:User) => state;
export default userSlice;