import { createSlice, legacy_createStore } from "@reduxjs/toolkit";
import { clearAlluser } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload)
    },
    removeUser(state, action) {
      state.splice(action.payload, 1)
    },
    deleteUsers(state, action) {
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(clearAlluser, () => {
      return [];
    })
  }
});

export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;
