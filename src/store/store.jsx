import { configureStore } from "@reduxjs/toolkit";
import basicInfoReducer from "./slices/BasicInfoSlice";
import educationReducer from "./slices/EducationSlice";
import experienceReducer from "./slices/ExperienceSlice";
import myPRReducer from "./slices/MyPRSlice";
import otherInfoReducer from "./slices/OtherInfoSlice";
import emergencyContactReducer from "./slices/EmergencyContactSlice";

export const store = configureStore({
  reducer: {
    basicInfo: basicInfoReducer,
    education: educationReducer,
    experience: experienceReducer,
    myPR: myPRReducer,
    otherInfo: otherInfoReducer,
    emergencyContact: emergencyContactReducer,
  },
});
