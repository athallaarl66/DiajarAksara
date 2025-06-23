import { useState } from "react";
import "../styles/globals.css"; // Import file global CSS
import styles from "../styles/Quiz.module.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]); // Store selected answers with explicit type
  const [isFinished, setIsFinished] = useState(false); // Track if the quiz is finished
  const [score, setScore] = useState(0); // Track the score

  // Define questions and correct answers
  const questions = [
    {
      question: "Question 1: What is your name?",
      options: ["John", "Jane", "Doe", "Alice"],
      correctAnswer: "John",
    },
    {
      question: "Question 2: What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "Question 3: What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Question 4: What is the speed of light?",
      options: [
        "300,000 km/s",
        "150,000 km/s",
        "1,000,000 km/s",
        "500,000 km/s",
      ],
      correctAnswer: "300,000 km/s",
    },
    {
      question: "Question 5: Which language is used for web development?",
      options: ["Python", "JavaScript", "Java", "C++"],
      correctAnswer: "JavaScript",
    },
    {
      question: "Question 6: What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Question 7: What is the boiling point of water?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      correctAnswer: "100°C",
    },
    {
      question: "Question 8: What is 5 x 5?",
      options: ["20", "25", "30", "35"],
      correctAnswer: "25",
    },
    {
      question: "Question 9: Who wrote 'Romeo and Juliet'?",
      options: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"],
      correctAnswer: "Shakespeare",
    },
    {
      question: "Question 10: What is the square root of 64?",
      options: ["6", "8", "10", "12"],
      correctAnswer: "8",
    },
  ];

  // Handle next and previous buttons
  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If it's the last question, show the result
      calculateScore();
      setIsFinished(true);
    }
  };

  // Handle Finish Attempt
  const handleFinish = () => {
    calculateScore();
    setIsFinished(true);
  };

  // Store the selected answer for each question with explicit typing
  const handleOptionChange = (answer: string) => {
    // Declare 'answer' as a string type
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer; // Update the selected answer for the current question
    setSelectedAnswers(newAnswers);
  };

  // Calculate score based on selected answers
  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
  };

  // Handle clicking on question numbers to jump to specific questions
  const handleQuestionClick = (index: number) => {
    // Declare 'index' as a number type
    setCurrentQuestion(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Diajar - Quiz</h1>
      </div>

      {isFinished ? (
        <div className={styles.resultBox}>
          <h2>Quiz Complete!</h2>
          <p>
            Your score: {score} / {questions.length}
          </p>
        </div>
      ) : (
        <div className={styles.quizBox}>
          <h2>{questions[currentQuestion].question}</h2>
          <div className={styles.options}>
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index} className={styles.option}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedAnswers[currentQuestion] === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            ))}
          </div>
          <div className={styles.navButtons}>
            <button
              onClick={handlePrev}
              className={styles.navButton}
              disabled={currentQuestion === 0}
            >
              Prev
            </button>
            {currentQuestion === questions.length - 1 ? (
              <button onClick={handleFinish} className={styles.navButton}>
                Finish Attempt
              </button>
            ) : (
              <button onClick={handleNext} className={styles.navButton}>
                Next
              </button>
            )}
          </div>
        </div>
      )}

      {/* Question Box with clickable numbers */}
      <div className={styles.questionBox}>
        <h3>Questions</h3>
        <div className={styles.questionList}>
          {questions.map((_, index) => (
            <div
              key={index}
              className={`${styles.questionNumber} ${
                currentQuestion === index ? styles.active : ""
              }`}
              onClick={() => handleQuestionClick(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Copyright © MyCourse.io 2024, All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Quiz;
