import React from "react";
import "../styles/intro_text.css";

const Intro_text = () => {
  return (
    <div className="text-container">
      <div className="intro-layout">
        <h1 className="aboutMe">나를 소개합니다!</h1>
        <p>이름: 박민규</p>
        <p>생년월일: 2005월 07월 13일</p>
        <p>이메일: renge57439570@gmail.com</p>
      </div>
      <div className="intro-layout2">
        <div>
        <h2 className="a-text1">수상경력</h2>
        <p>경북 SW해커톤 대회 창의융합상 (1위)</p>
        <p>교내 캡스톤 프로젝트 3위</p>
        </div>
        <div>
        <h2 className="a-text2">자격증</h2>
        <p>정보처리기능사</p>
        </div>
        <div>
        <h2 className="a-text3">학력</h2>
        <p>경북소프트웨어고등학교 재학 중 (2021 03 ~ )</p> 
        </div>
      </div>
    </div>
  );
};

export default Intro_text;
