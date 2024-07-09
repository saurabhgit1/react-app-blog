import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 23,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmt: (state, action) => {
      state.count += Number(action.payload);
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, incrementByAmt, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
