import { createSlice } from "@reduxjs/toolkit";
import { mockComments } from "../api.js";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    value: mockComments,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value = [...action.payload, ...state.value];
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = commentsSlice.actions;

export default commentsSlice.reducer;
