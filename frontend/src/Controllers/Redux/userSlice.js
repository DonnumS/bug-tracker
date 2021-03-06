import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "Sebastian" });
      state.push({ name: "John" });
    },
  },
});

export default slice.reducer;
export const { getUser } = slice.actions;
