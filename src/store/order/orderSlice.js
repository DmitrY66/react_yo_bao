import { createSlice } from "@reduxjs/toolkit";

const getOrderList = () => {
  const orderList = JSON.parse(localStorage.getItem('order'))
    ? JSON.parse(localStorage.getItem('order')).orderList : [];
  return orderList;
}

const getTotalCount = () => {
  const totalCount = JSON.parse(localStorage.getItem('order'))
    ? JSON.parse(localStorage.getItem('order')).totalCount : 0;
  return totalCount;
}

const getTotalPrice = () => {
  const totalPrice = JSON.parse(localStorage.getItem('order'))
    ? JSON.parse(localStorage.getItem('order')).totalPrice : 0;
  return totalPrice;
}

const initialState = {
  orderList: getOrderList(),
  totalCount: getTotalCount(),
  totalPrice: getTotalPrice(),
  error: []
};

export const localStorageMiddleware = store => next => action => {
  const nextAction = next(action);

  if (nextAction.type.startsWith('order/')) {
    const order = store.getState().order;
    localStorage.setItem('order', JSON.stringify(order));
  }

  return nextAction;
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productOrderList = state.orderList
        .find(item => item.id === action.payload.id);

      state.totalCount = state.orderList.reduce((acc, item) =>
        acc + item.count, 1);

      state.totalPrice = state.orderList.reduce((acc, item) =>
        acc + item.count * item.price, 1);

      if (productOrderList) {
        productOrderList.count += 1;
      } else {
        state.orderList.push({ ...action.payload, count: 1 });
      }
    }
  }
});

export const { addProduct } = orderSlice.actions;
export default orderSlice.reducer;
