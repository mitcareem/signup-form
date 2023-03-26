import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  captcha: "",
};

export const captchaSlice = createSlice({
  name: "captcha",
  initialState,
  reducers: {
    updateCaptcha: (state, action) => {
      state.captcha = action.payload;
    },
  },
});

export const { updateCaptcha } = captchaSlice.actions;

export default captchaSlice.reducer;
