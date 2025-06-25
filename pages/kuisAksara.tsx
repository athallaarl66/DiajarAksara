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
      question:
        "Question 1: Apa nama aksara Sunda yang digunakan untuk menulis bahasa Sunda?",
      options: ["Aksara Jawa", "Aksara Bali", "Aksara Sunda", "Aksara Bugis"],
      correctAnswer: "Aksara Sunda",
    },
    {
      question: "Question 2: Bagaimana cara membaca aksara Sunda secara umum?",
      options: [
        "Dari kanan ke kiri",
        "Dari kiri ke kanan",
        "Dari atas ke bawah",
        "Dari bawah ke atas",
      ],
      correctAnswer: "Dari kiri ke kanan",
    },
    {
      question:
        "Question 3: Apa nama aksara Sunda yang digunakan untuk menulis konsonan?",
      options: [
        "Hanacaraka",
        "Aksara kawih",
        "Aksara dasar",
        "Aksara ngalamun",
      ],
      correctAnswer: "Aksara dasar",
    },
    {
      question: "Question 4: Berapa jumlah dasar aksara Sunda?",
      options: ["15", "18", "20", "23"],
      correctAnswer: "23",
    },
    {
      question:
        "Question 5: Apa nama simbol dalam aksara Sunda yang digunakan untuk menulis vokal?",
      options: ["Tanda vokal", "Sandhi", "Tanda diakritik", "Huruf vokal"],
      correctAnswer: "Tanda vokal",
    },
    {
      question:
        "Question 6: Di bawah ini mana yang termasuk aksara Sunda yang digunakan untuk penulisan huruf 'Ka'?",
      options: ["ᮊ", "ᮞ", "ᮏ", "ᮚ"],
      correctAnswer: "ᮊ",
    },
    {
      question:
        "Question 7: Simbol apa yang digunakan dalam aksara Sunda untuk menulis kata 'di' dalam bahasa Indonesia?",
      options: ["ᮓᮤ", "ᮊᮨ", "ᮓᮈ", "ꦤ"],
      correctAnswer: "ᮓᮤ",
    },
    {
      question:
        "Question 8: Aksara Sunda memiliki karakter yang disebut 'carakan.' Apa yang dimaksud dengan carakan?",
      options: ["Tanda baca", "Huruf dasar", "Angka", "Vokal"],
      correctAnswer: "Huruf dasar",
    },
    {
      question:
        "Question 9: Apa fungsi dari aksara 'sandhangan' dalam aksara Sunda?",
      options: [
        "Untuk menulis angka",
        "Sebagai tanda baca",
        "Menambah atau mengubah bunyi vokal",
        "Sebagai kata penghubung",
      ],
      correctAnswer: "Menambah atau mengubah bunyi vokal",
    },
    {
      question:
        "Question 10: Siapa yang memperkenalkan aksara Sunda pada zaman dahulu?",
      options: [
        "Raja Siliwangi",
        "Pangeran Diponegoro",
        "Sunan Gunung Jati",
        "Sultan Agung",
      ],
      correctAnswer: "Raja Siliwangi",
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
      <Head>
        <title>Diajar - Quiz</title>

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1B1E9FSFPX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1B1E9FSFPX');
            `,
          }}
        />
      </Head>

      <div className={styles.header}>
        <h1>Diajar - Quiz</h1>
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
