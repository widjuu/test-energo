import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { extra: { api }, rejectWithValue }) => {
    try {
      const data = api.getUsers();

      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const toggleUser = createAction("selectedUsers/toggle");

export const sendSelectedUsers = createAsyncThunk(
  "selectedUsers/sendSelectedUsers",
  async (selectedUsers, { extra: { api }, rejectWithValue }) => {
    const preparedValues = Object.keys(selectedUsers).map((userId) => {
      const user = selectedUsers[userId];

      return {
        id: user.id,
        zipcode: user.address.zipcode,
      };
    });

    try {
      const data = await api.sendUsers(preparedValues);

      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);
