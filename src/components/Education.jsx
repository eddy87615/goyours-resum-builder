import "../page/resume/resume.css";
import { useSelector, useDispatch } from "react-redux";
import { updateEducation } from "../store/slices/EducationSlice";

export default function Education() {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.education);

  const handleChange = (index, field, value) => {
    dispatch(updateEducation({ index, field, value }));
  };

  return (
    <>
      <form className="resume-form">
        <legend>
          学歴
          <span className="input-notice">寫到最終學歷，包含語言學校</span>
        </legend>
        {education.education.map((item, index) => (
          <label key={index} className="experience">
            <input
              type="month"
              value={item.date}
              onChange={(e) => handleChange(index, "date", e.target.value)}
            />
            <input
              value={item.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
            />
            <select
              value={item.status}
              onChange={(e) => handleChange(index, "status", e.target.value)}
            >
              <option value="入学">入学</option>
              <option value="卒業">卒業</option>
              <option value="在学中">在学中</option>
            </select>
          </label>
        ))}
      </form>
    </>
  );
}
