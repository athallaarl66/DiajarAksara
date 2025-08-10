import { useState, useEffect } from "react";
import styles from "../styles/Quiz.module.css";
import Head from "next/head"; // Impor Head dari next/head

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]); // Store selected answers
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  const questions = [
    {
      question: "Question 1: Apa itu Aksara Sunda Swara?",
      options: [
        "Aksara yang digunakan untuk menulis vokal",
        "Aksara yang digunakan untuk menulis konsonan",
        "Aksara yang digunakan untuk angka",
        "Aksara yang digunakan untuk tanda baca",
      ],
      correctAnswer: "Aksara yang digunakan untuk menulis vokal",
    },
    {
      question: "Question 2: Berapa jumlah Aksara Swara dalam aksara Sunda?",
      options: ["5", "7", "8", "10"],
      correctAnswer: "7",
    },
    {
      question:
        "Question 3: Huruf mana yang digunakan untuk menulis suara 'a' dalam Aksara Sunda?",
      options: ["ᮃ", "ᮄ", "ᮅ", "ᮆ"],
      correctAnswer: "ᮃ",
    },
    {
      question:
        "Question 4: Apa simbol yang digunakan untuk melambangkan suara 'i' dalam Aksara Sunda?",
      options: ["ᮀ", "ᮄ", "ᮆ", "ᮇ"],
      correctAnswer: "ᮄ",
    },
    {
      question:
        "Question 5: Huruf mana yang digunakan untuk menulis suara 'u' dalam Aksara Sunda?",
      options: ["ᮇ", "ᮈ", "ᮉ", "ᮊ"],
      correctAnswer: "ᮇ",
    },
    {
      question:
        "Question 6: Apa simbol yang digunakan untuk suara 'e' dalam Aksara Sunda?",
      options: ["ᮏ", "ᮐ", "ᮑ", "ᮒ"],
      correctAnswer: "ᮏ",
    },
    {
      question:
        "Question 7: Huruf mana yang digunakan untuk menulis suara 'o' dalam Aksara Sunda?",
      options: ["ᮒ", "ᮓ", "ᮔ", "ᮕ"],
      correctAnswer: "ᮒ",
    },
    {
      question:
        "Question 8: Apa simbol yang digunakan untuk menulis suara 'ai' dalam Aksara Sunda?",
      options: ["ᮅᮃ", "ᮄᮃ", "ᮆᮏ", "ᮇᮇ"],
      correctAnswer: "ᮅᮃ",
    },
    {
      question:
        "Question 9: Aksara Sunda angka berapa yang digunakan untuk angka '1'?",
      options: ["᮱", "᮲", "᮳", "᮴"],
      correctAnswer: "᮱",
    },
    {
      question:
        "Question 10: Apa nama simbol dalam Aksara Sunda untuk angka '5'?",
      options: ["᮷", "᮶", "᮵", "᮶"],
      correctAnswer: "᮷",
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
      alert("Masukan nama.");
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
      <Head>
        <title>Kuis - Baca Aksara</title>
      </Head>

      {/* Maze Script for testing */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function (m, a, z, e) {
              var s, t;
              try {
                t = m.sessionStorage.getItem('maze-us');
              } catch (err) {}
        
              if (!t) {
                t = new Date().getTime();
                try {
                  m.sessionStorage.setItem('maze-us', t);
                } catch (err) {}
              }
        
              s = a.createElement('script');
              s.src = z + '?apiKey=' + e;
              s.async = true;
              a.getElementsByTagName('head')[0].appendChild(s);
              m.mazeUniversalSnippetApiKey = e;
            })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', 'd16b8531-f168-49fe-bd59-a59a4c18d3bf');
          `,
        }}
      />

      <div className={styles.header}>
        <h1>Kuis - Baca Aksara</h1>
      </div>

      {!isStarted ? (
        <div className={styles.nameInputBox}>
          <h2>Masukan Nama Anda</h2>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Masukan nama"
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
        <p>© 2025 Diajar Aksara. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Quiz;
