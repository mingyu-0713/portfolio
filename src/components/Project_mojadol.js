import React from "react";
import "../styles/mojadol.css";

const Project_mojadol = () => {
  const mojadol = "https://github.com/GBSWmojaDol/mojaDol";

  return (
    <div className="mojadol-container">
      <h1
        className="project_title_mojadol"
        onClick={() => {
          window.open(mojadol);
        }}
      >
        MOJADOL
      </h1>
      <h4 className="mojadol_link">
        맛집 정보 공유 사이트
      </h4>
    </div>
  );
};

export default Project_mojadol;
