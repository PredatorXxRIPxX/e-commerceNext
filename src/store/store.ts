import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
export type useAppSelector = typeof store.getState;
export default store;