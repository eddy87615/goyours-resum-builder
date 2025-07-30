import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myPR: ""
};

const myPRSlice = createSlice({
  name: "myPR",
  initialState,
  reducers: {
    updateMyPR: (state, action) => {
      state.myPR = action.payload;
    },
    setMyPRState: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateMyPR, setMyPRState } = myPRSlice.actions;
export default myPRSlice.reducer;