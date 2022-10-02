import { configureStore } from "@reduxjs/toolkit";
import boolReducer from "../Slices/Bool/boolSlice";

export const store = configureStore({
  reducer: {
    bool: boolReducer,
  },
});
