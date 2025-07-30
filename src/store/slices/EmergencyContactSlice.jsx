import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  relationship: "",
  address: "",
  phone: "",
  signature: "", // 署名
  signDate: "" // 作成年月日
};

const emergencyContactSlice = createSlice({
  name: "emergencyContact",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setEmergencyContactState: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateField, setEmergencyContactState } = emergencyContactSlice.actions;
export default emergencyContactSlice.reducer;