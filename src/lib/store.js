import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import api from "./api";
import { usersReducer, selectedUsersReducer } from "../feat/users/reducer";

const isDev = process.env.NODE_ENV !== "production";

const store = configureStore({
  reducer: {
    users: usersReducer.reducer,
    selectedUsers: selectedUsersReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
    }).concat(isDev ? [logger] : []),
  devTools: isDev,
});

export default store;
