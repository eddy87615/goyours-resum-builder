import "../page/resume/resume.css";
import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../store/slices/OtherInfoSlice";

export default function OtherInfo() {
  const dispatch = useDispatch();
  const otherInfo = useSelector((state) => state.otherInfo);

  const handleChange = (e) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };

  return (
    <>
      <form className="resume-form">
        <legend>其他必須資料</legend>
        <label>
          <p>勤務可能時間</p>
          <input
            type="date"
            name="workStartDate"
            value={otherInfo.workStartDate}
            onChange={handleChange}
          />
          から
          <input
            type="date"
            name="workEndDate"
            value={otherInfo.workEndDate}
            onChange={handleChange}
          />
          まで
        </label>
        <label>
          <p>身高</p>
          <input
            name="height"
            value={otherInfo.height}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>体重</p>
          <input
            name="weight"
            value={otherInfo.weight}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>鞋子尺寸</p>
          <input
            name="shoeSize"
            value={otherInfo.shoeSize}
            onChange={handleChange}
          />
          cm
        </label>
        <label>
          <p>
            健康狀況
            <span className="input-notice">良好or是否有開刀，先天疾病等</span>
          </p>
          <input
            name="healthCondition"
            value={otherInfo.healthCondition}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>視力</p>
          左：
          <input
            name="visionLeft"
            value={otherInfo.visionLeft}
            onChange={handleChange}
          />
          右：
          <input
            name="visionRight"
            value={otherInfo.visionRight}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>血液型</p>
          <input
            name="bloodType"
            value={otherInfo.bloodType}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>是否有刺青</p>
          <input
            name="hasTattoo"
            value={otherInfo.hasTattoo}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>慣用手</p>
          <input
            name="dominantHand"
            value={otherInfo.dominantHand}
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
}
