import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    userAcc: userReducer,
  },
});
export default store;
