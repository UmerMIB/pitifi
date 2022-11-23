import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginuser: (state, action) => {
      state.list = [
        ...state.list,
        {
          email: action.payload.email,
          password: action.payload.password,
        },
      ];
    },
  },
});

export default loginSlice.reducer;
export const { loginuser } = loginSlice.actions;
