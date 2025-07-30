import "../page/resume/resume.css";
import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../store/slices/EmergencyContactSlice";

export default function EmergencyContact() {
  const dispatch = useDispatch();
  const emergencyContact = useSelector((state) => state.emergencyContact);

  const handleChange = (e) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };

  return (
    <>
      <form className="resume-form">
        <legend>国内連絡人</legend>
        <label>
          <p>氏名</p>
          <input
            name="name"
            value={emergencyContact.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>
            続柄<span className="input-notice">例：親（母）</span>
          </p>
          <input
            name="relationship"
            value={emergencyContact.relationship}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>住所</p>
          <input
            name="address"
            value={emergencyContact.address}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>連絡先電話番号</p>
          <input
            name="phone"
            value={emergencyContact.phone}
            onChange={handleChange}
          />
        </label>
        <hr />
        <label>
          <p>署名</p>
          <input 
            name="signature" 
            value={emergencyContact.signature}
            onChange={handleChange} 
          />
        </label>
        <label>
          <p>作成年月日</p>
          <input 
            type="date" 
            name="signDate" 
            value={emergencyContact.signDate}
            onChange={handleChange} 
          />
        </label>
      </form>
    </>
  );
}
