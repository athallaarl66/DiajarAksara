import React, { useRef, useState, useEffect } from "react";
import "../styles/globals.css";
import styles from "../styles/swaraNulis.module.css"; // Use CSS for styling
import Header from "../components/headerFitur";
import Footer from "../components/footerFitur";
import Head from "next/head"; // Import Head from next/head

// Updated aksaraAngkaData with 'character' and 'label' properties
const aksaraAngkaData = [
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
    character: "᮲",
    label: "Angka 2",
    description: "Aksara untuk angka 2 dalam aksara Sunda.",
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
  const [selectedCharacter, setSelectedCharacter] = useState("᮱");
  const [selectedLabel, setSelectedLabel] = useState("Angka 1");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Navigation handlers
  const handlePrevious = () => {
    const currentIndex = aksaraAngkaData.findIndex(
      (item) => item.character === selectedCharacter
    );
    const previousIndex =
      currentIndex === 0 ? aksaraAngkaData.length - 1 : currentIndex - 1;
    setSelectedCharacter(aksaraAngkaData[previousIndex].character);
    setSelectedLabel(aksaraAngkaData[previousIndex].label);
  };

  const handleNext = () => {
    const currentIndex = aksaraAngkaData.findIndex(
      (item) => item.character === selectedCharacter
    );
    const nextIndex =
      currentIndex === aksaraAngkaData.length - 1 ? 0 : currentIndex + 1;
    setSelectedCharacter(aksaraAngkaData[nextIndex].character);
    setSelectedLabel(aksaraAngkaData[nextIndex].label);
  };

  // Mouse handlers
  const startDrawingMouse = (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const { offsetX, offsetY } = e.nativeEvent;
    setIsDrawing(true);
    setLastPosition({ x: offsetX, y: offsetY });
  };

  const drawMouse = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return;
    const { offsetX, offsetY } = e.nativeEvent;
    const ctx = canvasRef.current.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(lastPosition.x, lastPosition.y);
      ctx.lineTo(offsetX, offsetY);
      ctx.strokeStyle = penColor;
      ctx.lineWidth = 5;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.stroke();
    }
    setLastPosition({ x: offsetX, y: offsetY });
  };

  const stopDrawingMouse = () => {
    setIsDrawing(false);
  };

  // Touch handlers
  const startDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!canvasRef.current) return;
    const touch = e.touches[0];
    const rect = canvasRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    setIsDrawing(true);
    setLastPosition({ x, y });
  };

  const drawTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!isDrawing || !canvasRef.current) return;
    const touch = e.touches[0];
    const rect = canvasRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const ctx = canvasRef.current.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(lastPosition.x, lastPosition.y);
      ctx.lineTo(x, y);
      ctx.strokeStyle = penColor;
      ctx.lineWidth = 5;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.stroke();
    }
    setLastPosition({ x, y });
  };

  const stopDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(false);
  };

  // Prevent scrolling while drawing on mobile by adding passive:false listeners
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const preventScroll = (e: TouchEvent) => {
      if (isDrawing) e.preventDefault();
    };

    canvas.addEventListener("touchmove", preventScroll, { passive: false });
    canvas.addEventListener("touchstart", preventScroll, { passive: false });

    return () => {
      canvas.removeEventListener("touchmove", preventScroll);
      canvas.removeEventListener("touchstart", preventScroll);
    };
  }, [isDrawing]);

  const clearCanvas = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx && canvasRef.current) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
    setIsDrawing(false);
  };

  const handleColorChange = (color: string) => {
    setPenColor(color);
  };

  return (
    <main className={styles.main}>
      <Head>
        <title>Menulis Aksara Swara</title>
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

      <Header />

      <section className={styles.tableSection}>
        <div className={styles.tableGrid}>
          <h2>Aksara Angka</h2>
          <p>
            Aksara Swara adalah sistem vokal dalam aksara Sunda. Setiap aksara
            swara digunakan untuk menuliskan bunyi vokal dalam bahasa Sunda.
          </p>
        </div>

        <div className={styles.gridContainer}>
          {aksaraAngkaData.map((item, index) => (
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

      {/* Arrow button section */}
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
          onMouseDown={startDrawingMouse}
          onMouseUp={stopDrawingMouse}
          onMouseMove={drawMouse}
          onMouseLeave={stopDrawingMouse}
          onTouchStart={startDrawingTouch}
          onTouchMove={drawTouch}
          onTouchEnd={stopDrawingTouch}
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
