import React, { useRef, useState, useEffect } from "react";
import "../styles/globals.css";
import Header from "../components/headerFitur";
import Footer from "../components/footerFitur";
import styles from "../styles/latihanRarangken.module.css";
import Head from "next/head"; // Impor Head dari next/head

const aksaraData = [
  {
    label: "Panéléng",
    imageClass: "panéléng",
    sound: "Merubah suara /a/ pada aksara ngalagena menjadi /é/",
  },
  {
    label: "Panghulu",
    imageClass: "panghulu",
    sound: "Merubah suara /a/ pada aksara ngalagena menjadi /i/",
  },
  {
    label: "Panyecek",
    imageClass: "panyecek",
    sound: "Menambahkan suara /ng/ pada akhir kata dari aksara ngalagena",
  },
  {
    label: "Panolong",
    imageClass: "panolong",
    sound: " Merubah suara /a/ pada aksara ngalagena menjadi /o/ ",
  },
  {
    label: "Pamaeh",
    imageClass: "pamaeh",
    sound: " Menghilangkan suara /a/ dari aksara ngalagena ",
  },
  {
    label: "Pangwisad",
    imageClass: "pangwisad",
    sound: " Menambahkan suara /h/ pada akhir kata dari aksara ngalagena",
  },
  {
    label: "Pamingkal",
    imageClass: "pamingkal",
    sound: " Menambahkan suara /y/ di tengah aksara ngalagena",
  },
  {
    label: "Pamepet",
    imageClass: "pamepet",
    sound: "Merubah suara /a/ pada aksara ngalagena menjadi /e/ ",
  },
  {
    label: "Paneuleung",
    imageClass: "paneuleung",
    sound: "merubah suara /a/ menjadi /eu/",
  },
  {
    label: "Panyuku",
    imageClass: "panyuku",
    sound: "Merubah suara /a/ pada aksara ngalagena menjadi /u/ ",
  },
  {
    label: "Panyiku",
    imageClass: "panyiku",
    sound: " Menambahkan  /i/ pada tengah aksara ngalagena",
  },
  {
    label: "Panglayar",
    imageClass: "panglayar",
    sound:
      " Menambahkan suara  suara /r/ pada akhir kata dari aksara ngalagena",
  },
  {
    label: "Panyakra",
    imageClass: "panyakra",
    sound: "  Merubah suara /a/ pada aksara ngalagena menjadi /u/ ",
  },
];

const ColorWindow = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [penColor, setPenColor] = useState("#000000");
  const [selectedLabel, setSelectedLabel] = useState("Panéléng");
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 400 }); // Initial canvas size
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Adjust canvas size when the window size changes (responsiveness)
    const handleResize = () => {
      const width = window.innerWidth * 0.9; // 90% of the screen width
      const height = width * (400 / 600); // Maintain aspect ratio
      setCanvasSize({ width, height });
    };

    handleResize(); // Call the function to set the initial size
    window.addEventListener("resize", handleResize); // Listen to window resize event

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  const handlePrevious = () => {
    const currentIndex = aksaraData.findIndex(
      (item) => item.label === selectedLabel
    );
    const previousIndex =
      currentIndex === 0 ? aksaraData.length - 1 : currentIndex - 1;
    setSelectedLabel(aksaraData[previousIndex].label);
  };

  const handleNext = () => {
    const currentIndex = aksaraData.findIndex(
      (item) => item.label === selectedLabel
    );
    const nextIndex =
      currentIndex === aksaraData.length - 1 ? 0 : currentIndex + 1;
    setSelectedLabel(aksaraData[nextIndex].label);
  };

  // Drawing functions
  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const { offsetX, offsetY } = e.nativeEvent as MouseEvent;
    setIsDrawing(true);
    setLastPosition({ x: offsetX, y: offsetY });
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !canvasRef.current) return;

    const { offsetX, offsetY } = e.nativeEvent as MouseEvent;
    const context = canvasRef.current.getContext("2d");
    if (context) {
      context.beginPath();
      context.moveTo(lastPosition.x, lastPosition.y);
      context.lineTo(offsetX, offsetY);
      context.strokeStyle = penColor;
      context.lineWidth = 5;
      context.lineJoin = "round";
      context.lineCap = "round";
      context.stroke();
    }
    setLastPosition({ x: offsetX, y: offsetY });
  };

  const clearCanvas = () => {
    const context = canvasRef.current?.getContext("2d");
    if (context) {
      context.clearRect(0, 0, canvasSize.width, canvasSize.height);
    }
  };

  const handleColorChange = (color: string) => {
    setPenColor(color);
  };

  // Handle touch events to ensure mobile compatibility
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDrawing || !canvasRef.current) return;
    const touch = e.touches[0];
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const offsetX = touch.clientX - canvasRect.left;
    const offsetY = touch.clientY - canvasRect.top;

    const context = canvasRef.current.getContext("2d");
    if (context) {
      context.beginPath();
      context.moveTo(lastPosition.x, lastPosition.y);
      context.lineTo(offsetX, offsetY);
      context.strokeStyle = penColor;
      context.lineWidth = 5;
      context.lineJoin = "round";
      context.lineCap = "round";
      context.stroke();
    }
    setLastPosition({ x: offsetX, y: offsetY });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    const offsetX = touch.clientX - (canvasRect?.left || 0);
    const offsetY = touch.clientY - (canvasRect?.top || 0);
    setIsDrawing(true);
    setLastPosition({ x: offsetX, y: offsetY });
  };

  const handleTouchEnd = () => {
    setIsDrawing(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Latihan Rarangken</title>

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

      <Header />
      <section className={styles.tableSection}>
        <h3 className={styles.title}>Aksara Ngalagena Characters</h3>
        <div className={styles.grid}>
          {aksaraData.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => {
                setSelectedLabel(item.label);
              }}
            >
              <div
                className={`${styles.symbol} ${styles[item.imageClass]}`}
              ></div>
              <div className={styles.label}>{item.label}</div>
              <div className={styles.sound}>{item.sound}</div>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.digitBoard}>
        <div className={styles.digitBoardContent}>
          <h4>Contoh Aksara Ngalagena</h4>
          <div className={styles.displayCharacter} style={{ color: "#000000" }}>
            <div
              className={`${styles.symbolcontoh} ${
                styles[selectedLabel.toLowerCase().replace(/\s+/g, "")]
              }`}
            ></div>
          </div>
          <div className={styles.displayLabel} style={{ color: "#000000" }}>
            {selectedLabel}
          </div>
        </div>
      </div>
      <div className={styles.arrowButtons}>
        <button className={styles.arrowButton} onClick={handlePrevious}>
          ←
        </button>
        <button className={styles.arrowButton} onClick={handleNext}>
          →
        </button>
      </div>
      <div className={styles.kotak}>
        <div className={styles.circles}>
          <div
            className={`${styles.circle} ${styles.white}`}
            onClick={() => handleColorChange("#ffffff")}
          ></div>
          <div
            className={`${styles.circle} ${styles.black}`}
            onClick={() => handleColorChange("#000000")}
          ></div>
          <div
            className={`${styles.circle} ${styles.red}`}
            onClick={() => handleColorChange("#ff0000")}
          ></div>
          <div
            className={`${styles.circle} ${styles.yellow}`}
            onClick={() => handleColorChange("#ffff00")}
          ></div>
          <div
            className={`${styles.circle} ${styles.green}`}
            onClick={() => handleColorChange("#00ff00")}
          ></div>
          <div
            className={`${styles.circle} ${styles.blue}`}
            onClick={() => handleColorChange("#0000ff")}
          ></div>
        </div>
      </div>
      <div className={styles.contentBox}>
        <canvas
          ref={canvasRef}
          className={styles.contentText}
          width={canvasSize.width}
          height={canvasSize.height}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
          onMouseLeave={stopDrawing}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        />
      </div>
      <div className={styles.clearButton}>
        <button onClick={clearCanvas}>Clear</button>
      </div>
      <Footer />
    </div>
  );
};

export default ColorWindow;
