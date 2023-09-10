import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    token: null,
    id: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },

    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.idl = null;
    },
  },
});

export const { setUser, removeUser } = loginSlice.actions;

export default loginSlice;
