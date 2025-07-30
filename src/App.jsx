import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { routes } from "../src/page/route/route";

import "./App.css";

import Footer from "./components/footer/footer";
import Navigation from "./components/navigation/navigation";

// 導入所有的action
import { updateField as updateBasicInfo } from "./store/slices/BasicInfoSlice";
import { setEducationState } from "./store/slices/EducationSlice";
import { setExperienceState } from "./store/slices/ExperienceSlice";
import { setMyPRState } from "./store/slices/MyPRSlice";
import { setOtherInfoState } from "./store/slices/OtherInfoSlice";
import { setEmergencyContactState } from "./store/slices/EmergencyContactSlice";

function App() {
  const dispatch = useDispatch();
  const router = createBrowserRouter(routes);

  useEffect(() => {
    // 應用啟動時載入暫存資料
    const loadSavedData = () => {
      try {
        const savedData = localStorage.getItem('resume-temp-save');
        if (savedData) {
          const data = JSON.parse(savedData);
          const savedDate = new Date(data.savedAt).toLocaleString();
          
          const shouldLoad = window.confirm(`發現本地暫存資料（存檔時間：${savedDate}），是否要載入？`);
          
          if (shouldLoad) {
            // 載入各個slice的資料
            if (data.basicInfo) {
              Object.keys(data.basicInfo).forEach(key => {
                dispatch(updateBasicInfo({ field: key, value: data.basicInfo[key] }));
              });
            }
            if (data.education) {
              dispatch(setEducationState(data.education));
            }
            if (data.experience) {
              dispatch(setExperienceState(data.experience));
            }
            if (data.myPR) {
              dispatch(setMyPRState(data.myPR));
            }
            if (data.otherInfo) {
              dispatch(setOtherInfoState(data.otherInfo));
            }
            if (data.emergencyContact) {
              dispatch(setEmergencyContactState(data.emergencyContact));
            }
            
            alert('暫存資料載入成功！');
          }
        }
      } catch (error) {
        console.error('載入暫存資料失敗:', error);
      }
    };

    loadSavedData();
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
