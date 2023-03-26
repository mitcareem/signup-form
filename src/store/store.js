import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../theme/themeSlice";
import captchaReducer from "./captchaSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    captcha: captchaReducer,
  },
});
