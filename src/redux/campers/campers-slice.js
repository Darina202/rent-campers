import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper } from './campers-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const camperSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    resetCampers: state => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamper.pending, handlePending)
      .addCase(fetchCamper.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload?.length
          ? [...state.items, ...payload]
          : state.items;
      })
      .addCase(fetchCamper.rejected, handleRejected);
  },
});

export const { resetCampers } = camperSlice.actions;

export const camperReducer = camperSlice.reducer;
