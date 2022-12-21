import React from "react";
import '../styles/codewave.css'

const Project_codewave = () => {
  const codewave = "https://github.com/gbsw-spaghetti-coder";

  return (
    <div className="codewave-container">
      <h1
        className="project_title_codewave"
        onClick={() => {
          window.open(codewave);
        }}
      >
        CODE WAVE
      </h1>
      <h4 className="codewave_link">코드를 피드백해주는 사이트</h4>
    </div>
  );
};

export default Project_codewave;
