import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  loginList: [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    adduser: (state, action) => {
      state.userList = [
        ...state.userList,
        {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
        },
      ];
    },
    loginuser: (state, action) => {
      state.loginList = [
        {
          email: action.payload.email,
          password: action.payload.password,
        },
      ];
    },
  },
});

export default loginSlice.reducer;
export const { adduser, loginuser } = loginSlice.actions;
