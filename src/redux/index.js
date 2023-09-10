import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todosSlice";
import loginSlice from "./loginSlice";

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
    [loginSlice.name]: loginSlice.reducer,
  },
});
