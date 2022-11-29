import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
};

const sidebarSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    opensidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

export default sidebarSlice.reducer;
export const { opensidebar } = sidebarSlice.actions;
