import "../page/resume/resume.css";
import { useSelector, useDispatch } from "react-redux";
import { updateMyPR } from "../store/slices/MyPRSlice";

export default function MyPR() {
  const dispatch = useDispatch();
  const myPR = useSelector((state) => state.myPR);

  const handleChange = (e) => {
    dispatch(updateMyPR(e.target.value));
  };

  return (
    <>
      <form className="resume-form">
        <legend>
          自己PR
          <span className="input-notice">
            請同時注意預覽畫面排版，避免文字超出
          </span>
        </legend>
        <label>
          <textarea name="myPR" value={myPR.myPR} onChange={handleChange} />
        </label>
      </form>
    </>
  );
}
