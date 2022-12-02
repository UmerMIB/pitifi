import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: false,
  loginList: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    adduser: (state, action) => {
      state.userList = action.payload;
    },
    loginuser: (state, action) => {
      state.loginList = action.payload;
    },
  },
});

export default loginSlice.reducer;
export const { adduser, loginuser } = loginSlice.actions;
