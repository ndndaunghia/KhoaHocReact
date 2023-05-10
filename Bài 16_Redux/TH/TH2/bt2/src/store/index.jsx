import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./couter";

export const store = configureStore({
    reducer: {
        users: counterReducer,
    }
})