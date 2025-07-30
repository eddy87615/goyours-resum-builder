import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workStartDate: "",
  workEndDate: "",
  workConditions: "",
  height: "",
  weight: "",
  shoeSize: "",
  healthCondition: "",
  visionLeft: "",
  visionRight: "",
  bloodType: "",
  hasTattoo: "",
  dominantHand: ""
};

const otherInfoSlice = createSlice({
  name: "otherInfo",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setOtherInfoState: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateField, setOtherInfoState } = otherInfoSlice.actions;
export default otherInfoSlice.reducer;