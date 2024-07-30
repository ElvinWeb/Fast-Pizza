import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});
const getUsername = (state) => state.user.username;

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
export { getUsername };
