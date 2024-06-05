import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestFetchCamper } from 'api/campers-api';

export const fetchCamper = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await requestFetchCamper();
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
