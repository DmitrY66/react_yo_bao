import { createSlice } from '@reduxjs/toolkit';
import dataJson from 'src/data/data.json';

const initialState = {
  data: dataJson,
  error: '',
};

const getDataSlice = createSlice({
  name: 'getData',
  initialState,
});

export default getDataSlice.reducer;
