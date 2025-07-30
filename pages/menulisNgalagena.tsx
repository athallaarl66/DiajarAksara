import React, { useRef, useState, useEffect } from "react";
import Head from "next/head"; // Import Head from next/head
import "../styles/globals.css";
import Header from "../components/headerFitur"; // Import the Header component
import Footer from "../components/footerFitur"; // Import the Footer component
import styles from "../styles/latihanNulis.module.css"; // CSS module for styling

const ColorWindow = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [penColor, setPenColor] = useState("#000000"); // This will control the drawing color
  const [selectedCharacter, setSelectedCharacter] = useState("ᮊ"); // Default character to display
  const [selectedLabel, setSelectedLabel] = useState("Ka"); // Default label to display
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // List of aksara characters
  const aksaraGrid = [
    { label: "Ka", character: "ᮊ" },
    { label: "Ga", character: "ᮌ" },
    { label: "Nga", character: "ᮍ" },
    { label: "Ta", character: "ᮒ" },
    { label: "Da", character: "ᮓ" },
    { label: "Na", character: "ᮔ" },
    { label: "Nya", character: "ᮚ" },
    { label: "Wa", character: "ᮝ" },
    { label: "Va", character: "ᮝ" },
    { label: "Sa", character: "ᮞ" },
    { label: "Pa", character: "ᮕ" },
    { label: "Ba", character: "ᮘ" },
    { label: "Ma", character: "ᮙ" },
    { label: "Ya", character: "ᮚ" },
    { label: "Fa", character: "ᮖ" },
    { label: "Ra", character: "ᮛ" },
    { label: "Za", character: "ᮏ" },
    { label: "La", character: "ᮜ" },
    { label: "Ca", character: "ᮎ" },
    { label: "Ja", character: "ᮏ" },
    { label: "Le", character: "ᮜ" },
    { label: "Leu", character: "ᮜᮥ" },
    { label: "Re/Reu", character: "ᮛᮥ" },
    { label: "Tra", character: "ᮒᮛ" },
  ];

  // Handle the character change when arrows are clicked
  const handlePrevious = () => {
    const currentIndex = aksaraGrid.findIndex(
      (item) => item.character === selectedCharacter
    );
    const previousIndex =
      currentIndex === 0 ? aksaraGrid.length - 1 : currentIndex - 1;
    setSelectedCharacter(aksaraGrid[previousIndex].character);
    setSelectedLabel(aksaraGrid[previousIndex].label);
  };

  const handleNext = () => {
    const currentIndex = aksaraGrid.findIndex(
      (item) => item.character === selectedCharacter
    );
    const nextIndex =
      currentIndex === aksaraGrid.length - 1 ? 0 : currentIndex + 1;
    setSelectedCharacter(aksaraGrid[nextIndex].character);
    setSelectedLabel(aksaraGrid[nextIndex].label);
  };

  // Drawing functions
  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault(); // Prevent scroll when starting to draw
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

  // Reset color to black when selecting a color for drawing
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
    e.preventDefault(); // Prevent scroll when starting to draw
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

  // Prevent scrolling when touching canvas
  const handleTouchStartOnCanvas = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent scrolling when touching the canvas
  };

  useEffect(() => {
    // Disable scroll when drawing
    document.body.style.overflow = "hidden";

    // Re-enable scroll when clicking outside of the canvas
    const handleClickOutside = (e: MouseEvent) => {
      if (canvasRef.current && !canvasRef.current.contains(e.target as Node)) {
        document.body.style.overflow = "auto"; // Allow scrolling again
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Maze Script for testing */}
      <Head>
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
      </Head>
      {/* Header Section outside container */}
      <Header /> {/* Include the Header component */}
      <div className={styles.container}>
        {/* Aksara Ngalagena Section */}
        <section className={styles.tableSection}>
          <h3>Aksara Ngalagena </h3>
          <div className={styles.tableGrid}>
            {aksaraGrid.map((item) => (
              <div
                key={item.label}
                className={styles.tableItem}
                onClick={() => {
                  setSelectedCharacter(item.character);
                  setSelectedLabel(item.label);
                }}
              >
                <span>{item.label}</span>
                <span className={styles.character}>{item.character}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Digital Board Section */}
        <div className={styles.digitBoard}>
          <div className={styles.digitBoardContent}>
            <h4>Contoh Aksara Ngalagena</h4>
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

        {/* panah */}
        <div className={styles.arrowButtons}>
          <button className={styles.arrowButton} onClick={handlePrevious}>
            ←
          </button>
          <button className={styles.arrowButton} onClick={handleNext}>
            →
          </button>
        </div>

        {/* buat ganti warna */}
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
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
          />
        </div>

        {/* Clear Canvas Button */}
        <div className={styles.clearButton}>
          <button onClick={clearCanvas}>Clear</button>
        </div>
      </div>
      {/* Footer Section outside container */}
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default ColorWindow;
