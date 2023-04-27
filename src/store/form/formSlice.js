import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URI_PLACEHOLDER } from 'src/consts';
import { clearOrder } from '../order/orderSlice';

const initialState = {
  name: '',
  nameValid: false,
  phone: '',
  phoneValid: false,
  format: 'delivery',
  street: '',
  streetValid: false,
  homenumber: '',
  homenumberValid: false,
  flatnumber: '',
  flatnumberValid: false,
  status: '',
  response: null,
  error: null,
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
      // console.log(action);
      state[action.payload.field] = action.payload.value;
    },

    validationName: (state, action) => {
      // console.log(action);
      state.nameValid = action.payload.validName;
    },

    validationPhone: (state, action) => {
      // console.log(action);
      state.phoneValid = action.payload.validPhone;
    },

    validationStreet: (state, action) => {
      // console.log(action);
      state.streetValid = action.payload.validStreet;
    },

    validationHomenumber: (state, action) => {
      // console.log(action);
      state.homenumberValid = action.payload.validHomenumber;
    },

    validationFlatnumber: (state, action) => {
      // console.log(action);
      state.flatnumberValid = action.payload.validFlatnumber;
    },
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
        state.nameValid = false;
        state.phone = '';
        state.phoneValid = false;
        state.format = 'delivery';
        state.street = '';
        state.streetValid = false;
        state.homenumber = '';
        state.homenumberValid = false;
        state.flatnumber = '';
        state.flatnumberValid = false;
        localStorage.removeItem('order');
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const {
  updadeFormValue,
  validationName,
  validationPhone,
  validationStreet,
  validationHomenumber,
  validationFlatnumber,
} = formSlice.actions;
export default formSlice.reducer;
