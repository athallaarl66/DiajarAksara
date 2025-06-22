import React, { useRef, useState } from "react";
import "../styles/globals.css";
import styles from "../styles/swaraNulis.module.css"; // Use CSS for styling
import Header from "../components/headerFitur";
import Footer from "../components/footerFitur";

// Updated aksaraSwaraData with 'character' and 'label' properties
const aksaraSwaraData = [
  {
    character: "᮰",
    label: "Angka 0",
    description: "Aksara untuk angka 0 dalam aksara Sunda.",
  },
  {
    character: "᮱",
    label: "Angka 1",
    description: "Aksara untuk angka 1 dalam aksara Sunda.",
  },
  {
    character: "᮳",
    label: "Angka 3",
    description: "Aksara untuk angka 3 dalam aksara Sunda.",
  },
  {
    character: "᮴",
    label: "Angka 4",
    description: "Aksara untuk angka 4 dalam aksara Sunda.",
  },
  {
    character: "᮵",
    label: "Angka 5",
    description: "Aksara untuk angka 5 dalam aksara Sunda.",
  },
  {
    character: "᮶",
    label: "Angka 6",
    description: "Aksara untuk angka 6 dalam aksara Sunda.",
  },
  {
    character: "᮷",
    label: "Angka 7",
    description: "Aksara untuk angka 7 dalam aksara Sunda.",
  },
  {
    character: "᮸",
    label: "Angka 8",
    description: "Aksara untuk angka 8 dalam aksara Sunda.",
  },
  {
    character: "᮹",
    label: "Angka 9",
    description: "Aksara untuk angka 9 dalam aksara Sunda.",
  },
];

const ColorWindow = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [penColor, setPenColor] = useState("#000000");
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Handle the character change when arrows are clicked
  const handlePrevious = () => {
    const currentIndex = aksaraSwaraData.findIndex(
      (item) => item.character === selectedCharacter
    );
    const previousIndex =
      currentIndex === 0 ? aksaraSwaraData.length - 1 : currentIndex - 1;
    setSelectedCharacter(aksaraSwaraData[previousIndex].character);
    setSelectedLabel(aksaraSwaraData[previousIndex].label);
  };

  const handleNext = () => {
    const currentIndex = aksaraSwaraData.findIndex(
      (item) => item.character === selectedCharacter
    );
    const nextIndex =
      currentIndex === aksaraSwaraData.length - 1 ? 0 : currentIndex + 1;
    setSelectedCharacter(aksaraSwaraData[nextIndex].character);
    setSelectedLabel(aksaraSwaraData[nextIndex].label);
  };

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
      context.clearRect(
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      );
    }
  };

  const handleColorChange = (color: string) => {
    setPenColor(color);
  };

  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.tableSection}>
        <div className={styles.tableGrid}>
          <h2>Aksara Swara</h2>
          <p>
            Aksara Swara adalah sistem vokal dalam aksara Sunda. Setiap aksara
            swara digunakan untuk menuliskan bunyi vokal dalam bahasa Sunda.
          </p>
        </div>

        <div className={styles.gridContainer}>
          {aksaraSwaraData.map((item, index) => (
            <div className={styles.gridItem} key={index}>
              <div className={styles.symbol}>{item.character}</div>
              <div className={styles.symbolLabel}>{item.label}</div>
              <div className={styles.symbolDesc}>{item.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Drawing Section */}
      <div className={styles.digitBoard}>
        <div className={styles.digitBoardContent}>
          <h4>Contoh Aksara Swara</h4>
          <div
            className={styles.displayCharacter}
            style={{ color: "#000000" }} // Always set character color to black
          >
            {selectedCharacter}
          </div>
          <div className={styles.displayLabel} style={{ color: "#000000" }}>
            {selectedLabel}
          </div>
        </div>
      </div>

      {/* arrow button section */}
      <div className={styles.arrowButtons}>
        <button className={styles.arrowButton} onClick={handlePrevious}>
          ←
        </button>
        <button className={styles.arrowButton} onClick={handleNext}>
          →
        </button>
      </div>

      {/* Color Picker */}
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

      {/* Canvas Area */}
      <div className={styles.contentBox}>
        <canvas
          ref={canvasRef}
          className={styles.contentText}
          width={600}
          height={400}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchEnd={stopDrawing}
          onTouchMove={draw}
        />
      </div>

      <div className={styles.clearButton}>
        <button onClick={clearCanvas}>Clear</button>
      </div>
      <Footer />
    </main>
  );
};

export default ColorWindow;
