import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addCamperToFavorite(state, { payload }) {
      state.favorite = [...state.favorite, payload];
    },
    deleteCamperFromFavorite(state, { payload }) {
      state.favorite = state.favorite.filter(
        product => product._id !== payload
      );
    },
  },
});

export const { addCamperToFavorite, deleteCamperFromFavorite } =
  favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
