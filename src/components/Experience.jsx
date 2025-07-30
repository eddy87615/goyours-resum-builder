import "../page/resume/resume.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updatePartTimeJob,
  updateWorkHistory,
  updateLicense,
} from "../store/slices/ExperienceSlice";

export default function Experience() {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.experience);

  const handlePartTimeJobChange = (index, field, value) => {
    dispatch(updatePartTimeJob({ index, field, value }));
  };

  const handleWorkHistoryChange = (index, field, value) => {
    dispatch(updateWorkHistory({ index, field, value }));
  };

  const handleLicenseChange = (index, field, value) => {
    dispatch(updateLicense({ index, field, value }));
  };

  return (
    <>
      <form className="resume-form">
        <legend>アルバイト歴</legend>
        {experience.partTimeJobs.map((item, index) => (
          <label key={index} className="experience">
            <input
              type="month"
              value={item.date}
              onChange={(e) =>
                handlePartTimeJobChange(index, "date", e.target.value)
              }
            />
            <input
              value={item.description}
              onChange={(e) =>
                handlePartTimeJobChange(index, "description", e.target.value)
              }
            />
            <select
              value={item.status}
              onChange={(e) =>
                handlePartTimeJobChange(index, "status", e.target.value)
              }
            >
              <option value="入社">入社</option>
              <option value="退社">退社</option>
              <option value="在職中">在職中</option>
            </select>
          </label>
        ))}
        <legend>職歴</legend>
        {experience.workHistory.map((item, index) => (
          <label key={index} className="experience">
            <input
              type="month"
              value={item.date}
              onChange={(e) =>
                handleWorkHistoryChange(index, "date", e.target.value)
              }
            />
            <input
              value={item.description}
              onChange={(e) =>
                handleWorkHistoryChange(index, "description", e.target.value)
              }
            />
            <select
              value={item.status}
              onChange={(e) =>
                handleWorkHistoryChange(index, "status", e.target.value)
              }
            >
              <option value="入社">入社</option>
              <option value="退社">退社</option>
              <option value="在職中">在職中</option>
            </select>
          </label>
        ))}
        <legend>免許・資格</legend>
        {experience.licenses.map((item, index) => (
          <label key={index} className="experience">
            <input
              type="month"
              value={item.date}
              onChange={(e) =>
                handleLicenseChange(index, "date", e.target.value)
              }
            />
            <input
              value={item.description}
              onChange={(e) =>
                handleLicenseChange(index, "description", e.target.value)
              }
            />
          </label>
        ))}
      </form>
    </>
  );
}
