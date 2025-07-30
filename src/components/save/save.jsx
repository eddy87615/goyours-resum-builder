import "./save.css";
import { FaRegSave } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Save() {
  const basicInfo = useSelector((state) => state.basicInfo);
  const education = useSelector((state) => state.education);
  const experience = useSelector((state) => state.experience);
  const myPR = useSelector((state) => state.myPR);
  const otherInfo = useSelector((state) => state.otherInfo);
  const emergencyContact = useSelector((state) => state.emergencyContact);

  // 暫時存檔功能
  const saveToLocalStorage = () => {
    try {
      const resumeData = {
        basicInfo,
        education,
        experience,
        myPR,
        otherInfo,
        emergencyContact,
        savedAt: new Date().toISOString(),
      };

      console.log("準備存檔的資料:", resumeData);
      localStorage.setItem("resume-temp-save", JSON.stringify(resumeData));
      console.log("存檔成功!");
      alert("資料已暫時存檔到本地！");
    } catch (error) {
      console.error("存檔失敗:", error);
      alert("存檔失敗，請重試！");
    }
  };

  return (
    <>
      <div className="save-btn" onClick={saveToLocalStorage}>
        <p>暫時存檔</p>
        <FaRegSave />
      </div>
    </>
  );
}
