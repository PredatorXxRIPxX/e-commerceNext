import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { adminSlice } from "./adminSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        admin: adminSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
export type useAppSelector = typeof store.getState;
export default store;