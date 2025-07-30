import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partTimeJobs: Array.from({ length: 5 }, () => ({
    date: "",
    description: "",
    status: "入社"
  })),
  workHistory: Array.from({ length: 5 }, () => ({
    date: "",
    description: "",
    status: "入社"
  })),
  licenses: Array.from({ length: 3 }, () => ({
    date: "",
    description: ""
  }))
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    updatePartTimeJob: (state, action) => {
      const { index, field, value } = action.payload;
      state.partTimeJobs[index][field] = value;
    },
    updateWorkHistory: (state, action) => {
      const { index, field, value } = action.payload;
      state.workHistory[index][field] = value;
    },
    updateLicense: (state, action) => {
      const { index, field, value } = action.payload;
      state.licenses[index][field] = value;
    },
    setExperienceState: (state, action) => {
      return action.payload;
    },
  },
});

export const { updatePartTimeJob, updateWorkHistory, updateLicense, setExperienceState } = experienceSlice.actions;
export default experienceSlice.reducer;