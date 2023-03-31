import { configureStore,  } from "@reduxjs/toolkit";
import getDataReducer from "./getData/getDataSlice";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice";

export const store = configureStore({
  reducer: {
    getData: getDataReducer,
    order: orderReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
