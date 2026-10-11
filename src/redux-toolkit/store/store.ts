import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import userServerSlice from "../slices/userServerSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    userServer: userServerSlice,
  },
});

export default store;
