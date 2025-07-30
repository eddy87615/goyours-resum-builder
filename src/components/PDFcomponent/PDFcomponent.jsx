import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./PDFcomponent.css";
import "../../index.css";

export default function PDFComponent() {
  const basicInfo = useSelector((state) => state.basicInfo);
  const education = useSelector((state) => state.education);
  const experience = useSelector((state) => state.experience);
  const myPR = useSelector((state) => state.myPR);
  const otherInfo = useSelector((state) => state.otherInfo);
  const emergencyContact = useSelector((state) => state.emergencyContact);

  // 計算年齡的函數
  const calculateAge = (birthDate) => {
    if (!birthDate) return "";
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  // 格式化生日顯示
  const formatBirthday = (birthDate) => {
    if (!birthDate) return "西暦　　年　　月　　日生（滿　　歲）";
    const date = new Date(birthDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const age = calculateAge(birthDate);

    return `西暦${year}年${month}月${day}日生（滿${age}歲）`;
  };

  const generatePDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = 210; // A4 寬度 (mm)
    const pdfHeight = 297; // A4 高度 (mm)

    // 處理第一頁
    const page1Element = document.getElementById("page-1");
    const canvas1 = await html2canvas(page1Element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      width: page1Element.scrollWidth,
      height: page1Element.scrollHeight,
      backgroundColor: "#ffffff",
    });

    const imgData1 = canvas1.toDataURL("image/png");

    // 滿版添加第一頁到PDF (無邊距)
    pdf.addImage(imgData1, "PNG", 0, 0, pdfWidth, pdfHeight);

    // 處理第二頁
    const page2Element = document.getElementById("page-2");
    const canvas2 = await html2canvas(page2Element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      width: page2Element.scrollWidth,
      height: page2Element.scrollHeight,
      backgroundColor: "#ffffff",
    });

    const imgData2 = canvas2.toDataURL("image/png");

    // 添加新頁面並滿版插入第二頁 (無邊距)
    pdf.addPage();
    pdf.addImage(imgData2, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save("履歷表.pdf");

    // 下載完成後清除暫存資料
    localStorage.removeItem("resume-temp-save");
    alert("PDF下載完成，暫存資料已清除！");
  };

  return (
    <div className="preview">
      <h3>【履歷預覽】</h3>
      <div className="preview-window">
        <div id="pdf-content" className="pdf-content">
          {/* 第一頁 */}
          <div className="pdf-page" id="page-1">
            <div className="resume-header">
              <h1>高優會員履歷書</h1>
            </div>
            <h2>履歴書</h2>
            <div className="resume-wrapper">
              <div className="basic-info-section">
                <table className="basic-info-table">
                  <tbody>
                    <tr>
                      <td
                        className="label-cell spelling no-right-border"
                        colSpan="7"
                      >
                        英文拼音&emsp;{basicInfo.nameEn}
                      </td>
                      {/* <td className="name-en-cell spelling" colSpan="3">
                      {basicInfo.nameEn}
                    </td> */}
                      <td className="photo-cell" rowSpan="3">
                        {basicInfo.photo && (
                          <div className="pdf-photo-wrapper">
                            <img
                              src={basicInfo.photo}
                              alt="證件照"
                              className="pdf-photo"
                            />
                          </div>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="label-cell name no-right-border"
                        colSpan="7"
                      >
                        氏&emsp;&emsp;名
                        <br />
                        <span className="name-filled">{basicInfo.name}</span>
                      </td>
                      {/* <td className="name-jp-cell name" colSpan="3">
                      {basicInfo.name}
                    </td> */}
                    </tr>
                    <tr>
                      <td className="label-cell birthday-cell" colSpan="5">
                        {formatBirthday(basicInfo.birthday)}
                      </td>
                      <td className="label-cell sex-cell" colSpan="2">
                        性別
                        <br />
                        <span className="sex-filled">{basicInfo.gender}</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="label-cell spelling no-right-border"
                        colSpan="7"
                      >
                        ふりがな&emsp;
                        {basicInfo.addressKana}
                      </td>
                      <td className="label-cell spelling">電話</td>
                      {/* <td className="value-cell spelling" colSpan="4">
                      {basicInfo.addressKana}
                    </td> */}
                    </tr>
                    <tr>
                      <td
                        className="label-cell no-right-border"
                        colSpan="7"
                        rowSpan="2"
                      >
                        現住所 <br />
                        <span className="address-filled">
                          {basicInfo.address}
                        </span>
                      </td>
                      <td className="value-cell">{basicInfo.phone1}</td>

                      {/* <td className="value-cell">{basicInfo.address}</td> */}
                    </tr>
                    <tr>
                      <td className="value-cell">{basicInfo.phone2}</td>
                    </tr>
                    <tr>
                      <td
                        className="label-cell spelling no-right-border"
                        colSpan="7"
                      >
                        ふりがな&emsp;
                        {basicInfo.japanAddressKana}
                      </td>
                      <td className="label-cell spelling">電話</td>
                    </tr>

                    <tr>
                      <td
                        className="label-cell no-right-border"
                        colSpan="7"
                        rowSpan={2}
                      >
                        日本住所
                        <br />
                        <span className="address-filled">
                          {basicInfo.japanAddress}
                        </span>
                      </td>
                      <td className="value-cell"></td>
                    </tr>
                    <tr>
                      <td className="value-cell"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="history-section">
                <table className="history-table">
                  <tbody>
                    {/* 表格標題行 */}
                    <tr>
                      <td className="table-header-year">西暦年</td>
                      <td className="table-header-month">月</td>
                      <td className="table-header-content">
                        学歴・アルバイト歴・職歴（各別にまとめて書く）
                      </td>
                    </tr>

                    {/* 學歷區塊標題 */}
                    <tr>
                      <td className="section-header" colSpan="3">
                        学歴
                      </td>
                    </tr>
                    {/* 學歷內容 */}
                    {Array.from({ length: 5 }).map((_, index) => {
                      const dateStr = education.education[index]?.date || "";
                      const [year, month] = dateStr
                        ? dateStr.split("-")
                        : ["", ""];
                      return (
                        <tr key={`edu-${index}`}>
                          <td className="year-cell">{year || ""}</td>
                          <td className="month-cell">
                            {month ? parseInt(month) : ""}
                          </td>
                          <td>
                            <span className="experience-name">
                              {education.education[index]?.description || ""}
                            </span>
                            <span className="experience-status">
                              {education.education[index]?.description &&
                                education.education[index]?.status &&
                                ` (${education.education[index].status})`}
                            </span>
                          </td>
                        </tr>
                      );
                    })}

                    {/* 打工經歷區塊標題 */}
                    <tr>
                      <td className="section-header" colSpan="3">
                        アルバイト歴
                      </td>
                    </tr>
                    {/* 打工經歷內容 */}
                    {Array.from({ length: 5 }).map((_, index) => {
                      const dateStr =
                        experience.partTimeJobs[index]?.date || "";
                      const [year, month] = dateStr
                        ? dateStr.split("-")
                        : ["", ""];
                      return (
                        <tr key={`part-${index}`}>
                          <td className="year-cell">{year || ""}</td>
                          <td className="month-cell">
                            {month ? parseInt(month) : ""}
                          </td>
                          <td className="description-cell">
                            <span className="experience-name">
                              {experience.partTimeJobs[index]?.description ||
                                ""}
                            </span>
                            <span className="experience-status">
                              {experience.partTimeJobs[index]?.description &&
                                experience.partTimeJobs[index]?.status &&
                                ` (${experience.partTimeJobs[index].status})`}
                            </span>
                          </td>
                        </tr>
                      );
                    })}

                    {/* 職歷區塊標題 */}
                    <tr>
                      <td className="section-header" colSpan="3">
                        職歴
                      </td>
                    </tr>
                    {/* 職歷內容 */}
                    {Array.from({ length: 5 }).map((_, index) => {
                      const dateStr = experience.workHistory[index]?.date || "";
                      const [year, month] = dateStr
                        ? dateStr.split("-")
                        : ["", ""];
                      return (
                        <tr key={`work-${index}`}>
                          <td className="year-cell">{year || ""}</td>
                          <td className="month-cell">
                            {month ? parseInt(month) : ""}
                          </td>
                          <td className="description-cell">
                            <span className="experience-name">
                              {experience.workHistory[index]?.description || ""}
                            </span>
                            <span className="experience-status">
                              {experience.workHistory[index]?.description &&
                                experience.workHistory[index]?.status &&
                                ` (${experience.workHistory[index].status})`}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 第二頁 */}
          <div className="pdf-page" id="page-2">
            <div className="resume-header">
              <h1>高優會員履歷書</h1>
            </div>
            <div className="resume-wrapper">
              {/* 免許・資格區塊 */}
              <div className="licenses-section">
                <table className="history-table">
                  <tbody>
                    {/* 表格標題行 */}
                    <tr>
                      <td className="table-header-year">西暦年</td>
                      <td className="table-header-month">月</td>
                      <td className="table-header-content">免許・資格</td>
                    </tr>

                    {/* 免許・資格內容 */}
                    {Array.from({ length: 3 }).map((_, index) => {
                      const dateStr = experience.licenses[index]?.date || "";
                      const [year, month] = dateStr
                        ? dateStr.split("-")
                        : ["", ""];
                      return (
                        <tr key={`license-${index}`}>
                          <td className="year-cell">{year || ""}</td>
                          <td className="month-cell">
                            {month ? parseInt(month) : ""}
                          </td>
                          <td className="description-cell">
                            {experience.licenses[index]?.description || ""}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="pr-section">
                <table className="info-table">
                  <tbody>
                    <tr>
                      <td className="pr-content-cell">{myPR.myPR}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="other-info-section">
                <table className="info-table">
                  <tbody>
                    <tr>
                      <td className="label-cell" colSpan="6">
                        勤務可能期間： 西暦
                        {otherInfo.workStartDate
                          ? new Date(otherInfo.workStartDate).getFullYear()
                          : ""}
                        年
                        {otherInfo.workStartDate
                          ? new Date(otherInfo.workStartDate).getMonth() + 1
                          : ""}
                        月
                        {otherInfo.workStartDate
                          ? new Date(otherInfo.workStartDate).getDate()
                          : ""}
                        日 から{" "}
                        {otherInfo.workEndDate
                          ? new Date(otherInfo.workEndDate).getFullYear()
                          : ""}
                        年
                        {otherInfo.workEndDate
                          ? new Date(otherInfo.workEndDate).getMonth() + 1
                          : ""}
                        月
                        {otherInfo.workEndDate
                          ? new Date(otherInfo.workEndDate).getDate()
                          : ""}
                        日 まで {otherInfo.workConditions}
                      </td>
                    </tr>
                    <tr>
                      <td className="label-cell" colSpan="2">
                        身高：{otherInfo.height} cm
                      </td>
                      <td className="label-cell" colSpan="2">
                        体重：{otherInfo.weight} kg
                      </td>
                      <td className="label-cell" colSpan="2">
                        鞋子尺寸：{otherInfo.shoeSize} cm
                      </td>
                    </tr>
                    <tr>
                      <td className="label-cell" colSpan="6">
                        健康狀況：{otherInfo.healthCondition}
                      </td>
                    </tr>
                    <tr>
                      <td className="label-cell" colSpan="2">
                        視力：左&ensp;{otherInfo.visionLeft}&emsp;右&ensp;
                        {otherInfo.visionRight}
                      </td>
                      <td className="label-cell">
                        血液型：{otherInfo.bloodType}型
                      </td>
                      <td className="label-cell">
                        慣用手：{otherInfo.dominantHand}
                      </td>
                      <td className="label-cell" colSpan="2">
                        是否有刺青：{otherInfo.hasTattoo}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="emergency-contact-section">
                <table className="info-table">
                  <tbody>
                    <tr>
                      <td className="label-cell" colSpan="4">
                        国内連絡人&emsp;続柄&emsp;
                        {emergencyContact.relationship}
                      </td>
                    </tr>
                    <tr>
                      <td className="label-cell" colSpan="1">
                        氏名
                        <br />
                        <span className="contact-filled">
                          {emergencyContact.name}
                        </span>
                      </td>
                      <td className="label-cell" colSpan="3">
                        住所
                        <br />
                        <span className="contact-filled">
                          {emergencyContact.address}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="label-cell">連絡先電話番号</td>
                      <td className="value-cell" colSpan="3">
                        {emergencyContact.phone}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <p className="final-sign">
                  <em>以上の記載内容は事実と相違ありません。</em>
                  <br />
                  本人（法定代理人）の署名／履歴書作成年月日
                  <br />
                  <br />
                  （署名）{emergencyContact.signature}&emsp;西暦&ensp;
                  {emergencyContact.signDate
                    ? new Date(emergencyContact.signDate).getFullYear()
                    : ""}
                  &ensp;年&ensp;
                  {emergencyContact.signDate
                    ? new Date(emergencyContact.signDate).getMonth() + 1
                    : ""}
                  &ensp;月&ensp;
                  {emergencyContact.signDate
                    ? new Date(emergencyContact.signDate).getDate()
                    : ""}
                  &ensp;日
                  <br />
                  <small>
                    ※每次視訊面試，均有錄影。立書人同意本公司製作面試影音後，加密上傳至雇主能接收影音平台，僅供雇主參考用。
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download-btn-wrapper">
        <p>
          <em>**確認下載將刪除暫存檔案**</em>
        </p>
        <button onClick={generatePDF} className="download-btn">
          下載PDF履歷
        </button>
      </div>
    </div>
  );
}
