import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import loginSlice from "../slices/loginSlice";
import sidebarSlice from "../slices/sidebarSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      login: loginSlice,
      aside: sidebarSlice,
    },
  });

export const wrapper = createWrapper(makeStore);
