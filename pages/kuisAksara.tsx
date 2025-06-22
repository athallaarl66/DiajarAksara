// pages/quiz.js
import { useState } from "react";
import "../styles/globals.css"; // Import file global CSS
import styles from "../styles/Quiz.module.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      question: "Quiz question one here?",
      options: [
        "Option one here",
        "Option Two here",
        "Option Three here",
        "Option Four here",
      ],
    },
  ];

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Diajar</h1>
      </div>
      <div className={styles.quizBox}>
        <h2>{questions[currentQuestion].question}</h2>
        <div className={styles.options}>
          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className={styles.option}>
              <input type="radio" name="option" value={option} />
              {option}
            </label>
          ))}
        </div>
        <div className={styles.navButtons}>
          <button onClick={handlePrev} className={styles.navButton}>
            Prev
          </button>
          <button onClick={handleNext} className={styles.navButton}>
            Next
          </button>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>Copyright © MyCourse.io 2024, All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Quiz;
