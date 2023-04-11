import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_URI_PLACEHOLDER } from "src/consts";
import { clearOrder } from "../order/orderSlice";

const initialState = {
  name: '',
  phone: '',
  format: 'delivery',
  street: '',
  homenumber: '',
  flatnumber: ''
};

export const submitForm = createAsyncThunk(
  'form/submit',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        API_URI_PLACEHOLDER,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        }
      );

      if (!response.ok) {
        throw new Error(`Mr.Mckinley's mistake: ${response.statusText}`);
      }

      dispatch(clearOrder());

      return await response.json();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updadeFormValue: (state, action) => {
      state[action.payload.field] = action.payload.value;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = 'loading';
        state.response = null;
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.status = 'success';
        state.response = action.payload;
        state.name = '';
        state.phone = '';
        state.format = 'delivery';
        state.street = '';
        state.homenumber = '';
        state.flatnumber = '';
        localStorage.removeItem('order');
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
  }
});

export const { updadeFormValue } = formSlice.actions;
export default formSlice.reducer;