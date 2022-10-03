import { configureStore } from "@reduxjs/toolkit";
import boolReducer from "../Slices/Bool/boolSlice";
import photoReducer from "../Slices/photodisplay/photoslice";
import userReducer from "../Slices/user/userSlice";

export const store = configureStore({
  reducer: {
    bool: boolReducer,
    photos: photoReducer,
    user: userReducer,
  },
});
