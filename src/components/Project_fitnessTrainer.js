import React from "react";
import "../styles/fitness.css";

const Project_fitnessTrainer = () => {
  const fitness = "https://github.com/jinhyo-dev/Fitness-Trainer";

  return (
    <div className="fitness-container">
      <h1
        className="project_title_fitness"
        onClick={() => {
          window.open(fitness);
        }}
      >
        FITNESS_TRAINER
      </h1>
      <h4 className="fitness_link">
        운동 초보자들을 위한 사이트
      </h4>
    </div>
  );
};

export default Project_fitnessTrainer;
