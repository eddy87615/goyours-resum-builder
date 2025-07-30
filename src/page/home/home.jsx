import "./home.css";

import Resume from "../resume/resume";
import Save from "../../components/save/save";

import { useState } from "react";

export default function Home() {
  return (
    <>
      <h1 className="home-title">高優專用履歷製作</h1>
      <div className="home-intro">
        <p>
          歡迎來到高優國際專屬履歷生成器。
          <br />
          只要依照表格做填寫，就可以獲得一份向高優申請日本工作的專屬日式履歷，讓你不用再被跑掉的排版所困擾。
          <br />
          快點來試試看吧！
        </p>
      </div>
      <Resume />
      <Save />
    </>
  );
}
