import React from "react";
import "../styles/header.css";
import { BsInstagram, BsGithub, BsFillPhoneFill } from "react-icons/bs";

const header = () => {
  const instagram = "https://www.instagram.com/ming._.0713/";
  const github = "https://github.com/mingyu-0713";

  return (
    <div className="header-container">
      <BsInstagram
        className="instagram_logo"
        onClick={() => {
          window.open(instagram);
        }}
      />
      <BsGithub
        className="github_logo"
        onClick={() => {
          window.open(github);
        }}
      />
      <div className="phone_layout">
          <span className="phone_text">010-5743-9570</span>
      </div>
    </div>
  );
};

export default header;
