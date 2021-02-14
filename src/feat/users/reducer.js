import { createSlice, current } from "@reduxjs/toolkit";

import { getUsers, toggleUser, sendSelectedUsers } from "./actions";

export const usersReducer = createSlice({
  name: "users",
  initialState: { data: [], loading: false, error: null },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.loading = false;
      state.error = "Произошла ошибка при загрузке";
    },
  },
});

export const selectedUsersReducer = createSlice({
  name: "selectedUsers",
  // Выбранные пользователи хранятся в формате обьекта, чтобы легко проверить
  // выбран он или нет для чекбокса
  initialState: { loading: false, error: null, selected: {}, data: null },
  extraReducers: {
    [toggleUser]: (state, action) => {
      // Сбрасываем предыдущее состояние ошибки
      state.error = null;

      const userId = action.payload.id;
      // Проверяем есть ли userId в обьекте selected
      const currentSelectedUsers = current(state.selected);
      const isSelected = currentSelectedUsers[userId];

      if (!isSelected) {
        state.selected[userId] = action.payload;
      } else {
        delete state.selected[userId];
      }
    },
    [sendSelectedUsers.pending]: (state) => {
      state.loading = true;
    },
    [sendSelectedUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [sendSelectedUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = `Произошла ошибка: ${action.payload}`;
    },
  },
});
