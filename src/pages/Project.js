import React from "react";
import Project_codewave from "../components/Project_codewave";
import Project_fitnessTrainer from "../components/Project_fitnessTrainer";
import Project_mojadol from "../components/Project_mojadol";
import Project_quizApp from "../components/Project_quizApp";
import "../styles/project.css";

const Project = () => {
  return (
    <div className="project-container">
      <h1 className="project-text">PROJECT</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Project_mojadol />
        <Project_codewave />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Project_fitnessTrainer />
        <Project_quizApp />
      </div>
      <p className="project-name-link">프로젝트 이름 누르면 깃허브로 이동</p>
    </div>
  );
};

export default Project;
