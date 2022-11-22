import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import loginSlice from "../slices/loginSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      login: loginSlice,
    },
  });

export const wrapper = createWrapper(makeStore);
