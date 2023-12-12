import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";

// creation du STORE dans lequel je vais piocher

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    },
});
