import React, { useRef, useState, useEffect } from "react";
import "../styles/globals.css";
import Header from "../components/headerFitur";
import Footer from "../components/footerFitur";
import styles from "../styles/latihanRarangken.module.css";
import Head from "next/head";

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
  const [selectedLabel, setSelectedLabel] = useState(aksaraData[0].label);
  const [selectedImageClass, setSelectedImageClass] = useState(
    aksaraData[0].imageClass
  );
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Navigation handlers based on selectedLabel
  const handlePrevious = () => {
    const currentIndex = aksaraData.findIndex(
      (item) => item.label === selectedLabel
    );
    const previousIndex =
      currentIndex === 0 ? aksaraData.length - 1 : currentIndex - 1;
    setSelectedLabel(aksaraData[previousIndex].label);
    setSelectedImageClass(aksaraData[previousIndex].imageClass);
  };

  const handleNext = () => {
    const currentIndex = aksaraData.findIndex(
      (item) => item.label === selectedLabel
    );
    const nextIndex =
      currentIndex === aksaraData.length - 1 ? 0 : currentIndex + 1;
    setSelectedLabel(aksaraData[nextIndex].label);
    setSelectedImageClass(aksaraData[nextIndex].imageClass);
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
    <div className={styles.container}>
      <Head>
        <title>Latihan Rarangken</title>
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
        <h3 className={styles.title}>Aksara Ngalagena Characters</h3>
        <div className={styles.grid}>
          {aksaraData.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => {
                setSelectedLabel(item.label);
                setSelectedImageClass(item.imageClass);
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
              className={`${styles.symbolcontoh} ${styles[selectedImageClass]}`}
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
    </div>
  );
};

export default ColorWindow;
