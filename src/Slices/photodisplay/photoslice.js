import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photo: null,
  title: null,
};
const PhotoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotoDisplay: (state, actions) => {
      state.photo = actions.payload.photo;
      state.title = actions.payload.title;
    },
  },
});
export const { setPhotoDisplay } = PhotoSlice.actions;

export const selectPhotoDisplay = (state) => state.photos.photo;
export const selectTitleDisplay = (state) => state.photos.title;

export default PhotoSlice.reducer;
