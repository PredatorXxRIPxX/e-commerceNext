import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface User {
    auth: boolean;
    id:string;
    username: string;
    email: string;
    orders: string[];

}

const initialState:User = {
    auth: false,
    id:'',
    username: "",
    email: "",
    orders: [],
    
};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action:PayloadAction<User>) => {
            state.auth = action.payload.auth;
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.orders = action.payload.orders;
        },
        logoutUser: () => {
            return initialState;
        },
        addOrder:(state,action)=>{
            state.orders.push(action.payload);
        }
    },
});

export const { loginUser, logoutUser,addOrder } = userSlice.actions;
export const selectUser = (state:User) => state;
export default userSlice;