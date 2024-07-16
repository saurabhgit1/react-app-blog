import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "dave",
  },
  { id: "2", name: "jack" },
  {
    id: "1",
    name: "luke",
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;

export const selectAllUsers = (state) => state.users;
