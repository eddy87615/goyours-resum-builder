import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  education: Array.from({ length: 5 }, () => ({
    date: "",
    description: "",
    status: "入学"
  }))
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    updateEducation: (state, action) => {
      const { index, field, value } = action.payload;
      state.education[index][field] = value;
    },
    setEducationState: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateEducation, setEducationState } = educationSlice.actions;
export default educationSlice.reducer;