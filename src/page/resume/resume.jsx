import "./resume.css";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import BasicInfo from "../../components/BasicInfo";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import MyPR from "../../components/MyPR";
import OtherInfo from "../../components/OtherInfo";
import EmergencyContact from "../../components/EmergencyContact";
import PDFComponent from "../../components/PDFcomponent/PDFcomponent";

export default function Resume() {
  // const [profileName, setProfileName] = useState("");
  // const [profileURL, setProfileURL] = useState("");
  // const dispatch = useDispatch();

  return (
    <>
      <div className="resume">
        <BasicInfo />
        <Education />
        <Experience />
        <MyPR />
        <OtherInfo />
        <EmergencyContact />
        <PDFComponent />
      </div>
    </>
  );
}
