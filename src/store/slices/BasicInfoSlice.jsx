import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  nameEn: "",
  birthday: "",
  gender: "",
  address: "",
  addressKana: "", // 現住所平假名
  japanAddress: "無",
  japanAddressKana: "", // 日本住所平假名
  phone1: "",
  phone2: "",
  photo: "", // 添加照片欄位，存儲base64數據
};

const basicInfoSlice = createSlice({
  name: "basicInfo",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { updateField } = basicInfoSlice.actions;
export default basicInfoSlice.reducer;
