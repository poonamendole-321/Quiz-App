import React, { useState } from "react";
import { QuizData } from "../Data/QuizData";
import "../Components/Quiz.css";

function Quiz() {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [score, setscore] = useState(0);
  const [clickedOption, setclickedOption] = useState(0);

  const changeQuestion = () => {
    optionselected();
    if (currentQuestion < QuizData.length - 1) {
      setcurrentQuestion(currentQuestion + 1);
    } else {
      setcurrentQuestion(0);
    }
  };

  const optionselected = () => {
    if (clickedOption === QuizData[currentQuestion].answer) setscore(score + 1);
  };

  return (
    <div>
      <p className="heading_text">QUIZ APP</p>
      <div className="container">
        <div className="question">
          <span id="question-number">{currentQuestion + 1}.</span>
          <span id="question-text">{QuizData[currentQuestion].Question}</span>
        </div>
        <div className="option_container">
          {QuizData[currentQuestion].options.map((option, i) => {
            return (
              <button
                className = {`option_btn $ { clickedOption === i+1 ? "checked":null}`}
                onClick={() => setclickedOption(i + 1)}
                key={i}
              >
                {option}
              </button>
            );
          })}
        </div>
        <input
          type="button"
          value="next"
          id="next-button"
          onClick={() => changeQuestion()}
        />
      </div>
    </div>
  );
}

export default Quiz;
