import React from 'react';
import "../styles/quiz.css"

const Project_quizApp = () => {

    const quiz = "https://github.com/mingyu-0713/quiz-app";

  return (
    <div className="quiz-container">
      <h1
        className="project_title_quiz"
        onClick={() => {
          window.open(quiz);
        }}
      >
        QUIZ APP
      </h1>
      <h4 className="quiz_link">
        전공 퀴즈를 푸는 사이트
      </h4>
    </div>
  )
}

export default Project_quizApp;