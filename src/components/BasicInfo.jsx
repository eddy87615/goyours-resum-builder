import "../page/resume/resume.css";

import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../store/slices/BasicInfoSlice";

export default function BasicInfo() {
  const dispatch = useDispatch();
  const basicInfo = useSelector((state) => state.basicInfo);

  const handleChange = (e) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        dispatch(updateField({ field: "photo", value: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <form className="resume-form">
        <legend>基本資料</legend>
        <div className="form-basicinfo-container">
          <div className="form-basicinfo-01">
            <label>
              <p>氏名</p>
              <input
                name="name"
                value={basicInfo.name}
                onChange={handleChange}
              />
            </label>
            <label>
              <p>英文拼音</p>
              <input
                name="nameEn"
                value={basicInfo.nameEn}
                onChange={handleChange}
              />
            </label>
            <label>
              <p>誕生日</p>
              <input
                type="date"
                name="birthday"
                value={basicInfo.birthday}
                onChange={handleChange}
              />
            </label>
            <label>
              <p>性別</p>
              <input
                name="gender"
                value={basicInfo.gender}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="photo-upload-section">
            <div className="photo-upload-container">
              {basicInfo.photo ? (
                <div className="photo-preview">
                  <img src={basicInfo.photo} alt="大頭貼" />
                  <button
                    type="button"
                    className="photo-remove-btn"
                    onClick={() =>
                      dispatch(updateField({ field: "photo", value: "" }))
                    }
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className="photo-placeholder">
                  <span>點擊上傳證件照</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="photo-input"
              />
            </div>
          </div>
        </div>
        <label>
          <p>現住所</p>
          <input
            name="address"
            value={basicInfo.address}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>現住所(平假名)</p>
          <input
            name="addressKana"
            value={basicInfo.addressKana}
            onChange={handleChange}
            placeholder="げんじゅうしょ"
          />
        </label>
        <label>
          <p>日本住所</p>
          <input
            name="japanAddress"
            value={basicInfo.japanAddress}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>日本住所(平假名)</p>
          <input
            name="japanAddressKana"
            value={basicInfo.japanAddressKana}
            onChange={handleChange}
            placeholder="にほんじゅうしょ"
          />
        </label>
        <div className="form-basicinfo-02">
          <label>
            <p>手機</p>
            <input
              name="phone1"
              value={basicInfo.phone1}
              onChange={handleChange}
            />
          </label>
          <label>
            <p>市話</p>
            <input
              name="phone2"
              value={basicInfo.phone2}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
    </>
  );
}
