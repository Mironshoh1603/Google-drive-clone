import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  photo: null,
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogIn: (state, actions) => {
      state.uid = actions.payload.uid;
      state.photo = actions.payload.photo;
    },
    setLogout: (state) => {
      state.uid = null;
      state.photo = null;
    },
  },
});

export const { setLogIn, setLogout } = UserSlice.actions;

export const selectUid = (state) => state.user.uid;
export const selectPhoto = (state) => state.user.photo;

export default UserSlice.reducer;
