import React, { useRef, useState } from "react";
import "../styles/globals.css";
import Header from "../components/headerFitur";
import Footer from "../components/footerFitur";
import styles from "../styles/latihanRarangken.module.css";

const aksaraData = [
  { label: "Panéléng", imageClass: "panéléng", sound: "/é/" },
  { label: "Panghulu", imageClass: "panghulu", sound: "/i/" },
  { label: "Panyecek", imageClass: "panyecek", sound: "/ng/" },
  { label: "Panolong", imageClass: "panolong", sound: "/o/" },
  { label: "Panlong", imageClass: "panlong", sound: "/o/" },
  { label: "Panwisad", imageClass: "panwisad", sound: "/h/" },
  { label: "Pamingkal", imageClass: "pamingkal", sound: "/y/" },
  { label: "Pamepet", imageClass: "pamepet", sound: "/e/" },
  { label: "Paneuleung", imageClass: "paneuleung", sound: "/eu/" },
];

const ColorWindow = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [penColor, setPenColor] = useState("#000000");
  const [selectedLabel, setSelectedLabel] = useState("Panéléng");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
    <div className={styles.container}>
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
    </div>
  );
};

export default ColorWindow;
