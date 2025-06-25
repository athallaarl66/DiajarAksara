import "../styles/globals.css";
import styles from "../styles/swara.module.css"; // Gunakan CSS untuk styling
import Header from "../components/headerFitur";
import Footer from "../components/footerFitur";
import Script from "next/script"; // Import Script from next/script

const aksaraSwaraData = [
  {
    symbol: "ᮃ",
    name: "Aksara A",
    description: "Aksara untuk vokal A dalam aksara Sunda.",
  },
  {
    symbol: "ᮄ",
    name: "Aksara I",
    description: "Aksara untuk vokal I dalam aksara Sunda.",
  },
  {
    symbol: "ᮇ",
    name: "Aksara U",
    description: "Aksara untuk vokal U dalam aksara Sunda.",
  },
  {
    symbol: "ᮌ",
    name: "Aksara E",
    description: "Aksara untuk vokal E dalam aksara Sunda.",
  },
  {
    symbol: "ᮎ",
    name: "Aksara O",
    description: "Aksara untuk vokal O dalam aksara Sunda.",
  },
  {
    symbol: "ᮏ",
    name: "Aksara U",
    description: "Aksara untuk vokal U dalam aksara Sunda.",
  },
  {
    symbol: "ᮉ",
    name: "Aksara É",
    description: "Aksara untuk vokal É dalam aksara Sunda.",
  },
  {
    symbol: "ᮌᮥ",
    name: "Aksara Eu",
    description: "Aksara untuk vokal Eu dalam aksara Sunda.",
  },
];

export default function AksaraSwaraPage() {
  return (
    <main className={styles.main}>
      <Header />

      {/* Maze Script for testing */}
      <Script
        id="maze-integration"
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

      <section className={styles.section}>
        <div className={styles.textSection}>
          <h2>Aksara Swara</h2>
          <p>
            Aksara Swara adalah sistem vokal dalam aksara Sunda. Setiap aksara
            swara digunakan untuk menuliskan bunyi vokal dalam bahasa Sunda.
          </p>
        </div>

        <div className={styles.gridContainer}>
          {aksaraSwaraData.map((item, index) => (
            <div className={styles.gridItem} key={index}>
              <div className={styles.symbol}>{item.symbol}</div>
              <div className={styles.symbolLabel}>{item.name}</div>
              <div className={styles.symbolDesc}>{item.description}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
