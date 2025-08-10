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
      question: "Apa yang dimaksud dengan Rarangken dalam aksara Sunda?",
      options: [
        "Tanda baca",
        "Huruf vokal",
        "Simbol penghubung",
        "Huruf yang digunakan untuk menulis konsonan",
      ],
      correctAnswer: "Simbol penghubung",
    },
    {
      question:
        "Huruf mana yang digunakan untuk menulis Rarangken 'ka' dalam aksara Sunda?",
      options: ["᮪", "ᮌ", "ᮊ", "ᮔ"],
      correctAnswer: "ᮌ",
    },
    {
      question: "Bagaimana cara menggunakan Rarangken dalam aksara Sunda?",
      options: [
        "Ditempatkan setelah vokal",
        "Ditempatkan setelah konsonan",
        "Ditempatkan di atas vokal",
        "Ditempatkan di bawah konsonan",
      ],
      correctAnswer: "Ditempatkan setelah konsonan",
    },
    {
      question:
        "Rarangken digunakan untuk menyambungkan huruf vokal dengan huruf konsonan pada aksara Sunda. Apa manfaat utama dari Rarangken?",
      options: [
        "Mengganti huruf vokal",
        "Membentuk konsonan baru",
        "Mengubah bunyi konsonan",
        "Memudahkan penulisan vokal setelah konsonan",
      ],
      correctAnswer: "Memudahkan penulisan vokal setelah konsonan",
    },
    {
      question:
        "Apa simbol Rarangken yang digunakan untuk suara 'sa' dalam aksara Sunda?",
      options: ["ᮞ", "ᮤ", "ᮯ", "ᮠ"],
      correctAnswer: "ᮞ",
    },
    {
      question:
        "Rarangken mana yang digunakan untuk menghubungkan suara 'ta' dengan vokal 'i' dalam aksara Sunda?",
      options: ["᮱", "᮳", "᮷", "ᮦ"],
      correctAnswer: "᮳",
    },
    {
      question:
        "Apa yang terjadi jika Rarangken tidak digunakan pada aksara Sunda?",
      options: [
        "Kata menjadi tidak lengkap",
        "Tidak ada perubahan dalam penulisan",
        "Tanda baca menjadi tidak jelas",
        "Huruf menjadi kabur",
      ],
      correctAnswer: "Kata menjadi tidak lengkap",
    },
    {
      question:
        "Simbol Rarangken yang digunakan untuk menyambungkan suara 'da' dengan vokal 'a' dalam aksara Sunda adalah?",
      options: ["ᮕ", "ᮙ", "ᮗ", "ᮖ"],
      correctAnswer: "ᮗ",
    },
    {
      question:
        "Manakah yang termasuk dalam penggunaan Rarangken yang benar dalam aksara Sunda?",
      options: [
        "Menyambungkan dua vokal tanpa konsonan",
        "Menyambungkan konsonan dengan vokal setelahnya",
        "Mengubah makna kata",
        "Mengganti huruf dasar",
      ],
      correctAnswer: "Menyambungkan konsonan dengan vokal setelahnya",
    },
    {
      question:
        "Apa nama Rarangken yang digunakan untuk menyambungkan suara 'pa' dengan vokal 'u' dalam aksara Sunda?",
      options: ["ᮯ", "᮷", "᮸", "ᮠ"],
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
        <title>Kuis - Rarangken</title>
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
        <h1>Kuis - Rarangken</h1>
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
