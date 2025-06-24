import { useState, useEffect } from "react";
import styles from "../styles/Quiz.module.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]); // Store selected answers
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  const questions = [
    {
      question: "Apa itu Aksara Ngalagena dalam aksara Sunda?",
      options: ["Huruf vokal", "Huruf konsonan", "Tanda baca", "Huruf angka"],
      correctAnswer: "Huruf konsonan",
    },
    {
      question:
        "Berapa jumlah huruf dasar (Aksara Ngalagena) dalam aksara Sunda?",
      options: ["12", "15", "18", "23"],
      correctAnswer: "18",
    },
    {
      question:
        "Huruf mana dalam Aksara Ngalagena yang digunakan untuk melambangkan suara 'ka'?",
      options: ["ᮌ", "ᮊ", "ᮎ", "ᮕ"],
      correctAnswer: "ᮊ",
    },
    {
      question:
        "Apa nama huruf dalam Aksara Ngalagena yang digunakan untuk melambangkan suara 'sa'?",
      options: ["ᮞ", "ᮠ", "ᮊ", "ᮕ"],
      correctAnswer: "ᮞ",
    },
    {
      question:
        "Dalam Aksara Ngalagena, huruf mana yang digunakan untuk menuliskan suara 'ba'?",
      options: ["ꦧ", "ꦕ", "ꦏ", "꦳"],
      correctAnswer: "ꦧ",
    },
    {
      question:
        "Huruf mana dalam Aksara Ngalagena yang digunakan untuk menuliskan suara 'ga'?",
      options: ["ᮒ", "ᮠ", "ᮌ", "ᮚ"],
      correctAnswer: "ᮌ",
    },
    {
      question:
        "Apa nama huruf dalam Aksara Ngalagena yang digunakan untuk melambangkan suara 'na'?",
      options: ["ᮚ", "ᮒᮢ", "ᮔ", "ᮙ"],
      correctAnswer: "ᮔ",
    },
    {
      question:
        "Di antara huruf-huruf berikut, mana yang termasuk Aksara Ngalagena?",
      options: ["᮱", "᮶", "ᮑ", "Semua di atas"],
      correctAnswer: "ᮑ",
    },
    {
      question:
        "Huruf mana yang digunakan untuk melambangkan suara 'pa' dalam Aksara Ngalagena?",
      options: ["ᮕ", "ᮑ", "ꦧ", "᮱"],
      correctAnswer: "ᮕ",
    },
    {
      question:
        "Apa yang dimaksud dengan 'carakan' dalam konteks Aksara Sunda?",
      options: ["Huruf vokal", "Rangkaian dasar aksara", "Tanda baca", "Angka"],
      correctAnswer: "Rangkaian dasar aksara",
    },
  ];

  // Load saved answers and username from Local Storage when the component is mounted
  useEffect(() => {
    const savedAnswers = localStorage.getItem("selectedAnswers");
    const savedUserName = localStorage.getItem("userName");
    if (savedAnswers) {
      setSelectedAnswers(JSON.parse(savedAnswers));
    }
    if (savedUserName) {
      setUserName(savedUserName);
    }
  }, []);

  // Handle start quiz by saving the username to Local Storage
  const handleStartQuiz = () => {
    if (userName.trim() !== "") {
      localStorage.setItem("userName", userName);
      setIsStarted(true);
    } else {
      alert("Please enter your name before starting the quiz.");
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setIsFinished(true);
    }
  };

  const handleFinish = () => {
    calculateScore();
    setIsFinished(true);
  };

  const handleOptionChange = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
    localStorage.setItem("selectedAnswers", JSON.stringify(newAnswers));
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
  };

  const handleQuestionClick = (index: number) => {
    setCurrentQuestion(index);
  };

  // Reset everything and clear localStorage for a new quiz
  const startNewQuiz = () => {
    // Reset state and clear everything
    localStorage.removeItem("selectedAnswers"); // Remove previous answers
    localStorage.removeItem("userName"); // Remove user name
    setIsStarted(false); // Reset quiz state
    setCurrentQuestion(0);
    setSelectedAnswers([]); // Reset selected answers
    setIsFinished(false);
    setUserName(""); // Reset user name
    setScore(0); // Reset score
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Kuis - Ngalagena</h1>
      </div>

      {!isStarted ? (
        <div className={styles.nameInputBox}>
          <h2>Enter your name to start the quiz</h2>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            className={styles.nameInput}
          />
          <button onClick={handleStartQuiz} className={styles.startButton}>
            Mulai
          </button>
        </div>
      ) : (
        <>
          {isFinished ? (
            <div className={styles.resultBox}>
              <h2>Kuis selesai!</h2>
              <p>
                {userName}, Nilai: {score} / {questions.length}
              </p>
              {/* Display score */}
              <div className={styles.resultButtons}>
                <button
                  onClick={() => (window.location.href = "/dashboard")}
                  className={styles.navButton}
                >
                  Kembali ke menu
                </button>
                <button onClick={startNewQuiz} className={styles.navButton}>
                  Kuis lainnya
                </button>
              </div>
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
        </>
      )}

      <footer className={styles.footer}>
        <p>Copyright © MyCourse.io 2024, All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Quiz;
