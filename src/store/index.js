import { configureStore, } from "@reduxjs/toolkit";
import getDataReducer from "./getData/getDataSlice";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice";
import formReducer from "./form/formSlice";

export const store = configureStore({
  reducer: {
    getData: getDataReducer,
    order: orderReducer,
    form: formReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
