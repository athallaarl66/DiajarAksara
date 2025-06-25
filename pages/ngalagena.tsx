import "../styles/globals.css";
import Head from "next/head"; // Import the Head component from Next.js
import styles from "../styles/ngalagena.module.css";
import Header from "../components/headerFitur"; // Import Header component
import Footer from "../components/footerFitur"; // Import Footer component

const NgalagenaPage = () => (
  <main className={styles.main}>
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
    {/* Header Section */}
    <Header /> {/* Include the Header component */}
    {/* Aksara Ngalagena Section */}
    <section className={styles.section}>
      <div className={styles.textSection}>
        <h2>Aksara Ngalagena</h2>
        <p>
          Aksara Ngalagena adalah lambang-lambang bunyi dalam aksara Sunda yang
          mewakili fonem konsonan dan secara silabis mengandung bunyi vokal /a/.
          Dengan kata lain, setiap aksara ngalagena secara dasar mewakili satu
          suku kata, yaitu konsonan + vokal /a/. Dalam bahasa Sunda, terdapat
          tingkatan bahasa yang disebut undak usuk basa, yaitu sistem hierarki
          bahasa berdasarkan situasi dan hubungan antar penutur. Biasanya aksara
          ngalegna digunakan untuk menuliskan bahasa Sunda pada tingkatan lemes
          (halus) atau lemes pisan (sangat halus)
        </p>
      </div>
    </section>
    {/* Aksara Ngalagena Table Section */}
    <section className={styles.tableSection}>
      <h3>Aksara Ngalagena Characters</h3>
      <div className={styles.tableGrid}>
        {/* Characters in a grid layout */}
        <div className={styles.tableItem}>
          <span>Ka</span>
          <span className={styles.character}>ᮊ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Ga</span>
          <span className={styles.character}>ᮌ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Nga</span>
          <span className={styles.character}>ᮍ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Ta</span>
          <span className={styles.character}>ᮒ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Da</span>
          <span className={styles.character}>ᮓ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Na</span>
          <span className={styles.character}>ᮔ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Nya</span>
          <span className={styles.character}>ᮚ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Wa</span>
          <span className={styles.character}>ᮝ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Va</span>
          <span className={styles.character}>ᮝ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>

        <div className={styles.tableItem}>
          <span>Sa</span>
          <span className={styles.character}>ᮞ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Pa</span>
          <span className={styles.character}>ᮕ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Ba</span>
          <span className={styles.character}>ᮘ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Ma</span>
          <span className={styles.character}>ᮙ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Ya</span>
          <span className={styles.character}>ᮚ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Fa</span>
          <span className={styles.character}>ᮖ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Ra</span>
          <span className={styles.character}>ᮛ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>

        <div className={styles.tableItem}>
          <span>Za</span>
          <span className={styles.character}>ᮏ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>La</span>
          <span className={styles.character}>ᮜ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Ca</span>
          <span className={styles.character}>ᮎ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Ja</span>
          <span className={styles.character}>ᮏ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
      </div>
    </section>
    {/* Aksara Khusus Section */}
    <section className={styles.section}>
      <div className={styles.textSection}>
        <h2>Aksara Khusus</h2>
        <p>
          aksara khusus ini tidak termasuk kelompok aksara ngalagena karena
          tidak mengandung vokal /a/ dan tidak bisa diberi rarangken vokalisasi.
          Aksara ini bersifat mandiri dan digunakan dalam konteks tertentu.
        </p>
      </div>

      <div className={styles.tableGrid}>
        {/* Characters for Aksara Khusus */}
        <div className={styles.tableItem}>
          <span>Le</span>
          <span className={styles.character}>ᮜᮨ</span>
        </div>
        <div className={styles.tableItem}>
          <span>Leu</span>
          <span className={styles.character}>ᮜᮩ</span>
        </div>
        <div className={styles.tableItem}>
          <span>Re/Reu</span>
          <span className={styles.character}>ᮛᮨ</span>
        </div>
        <div className={styles.tableItem}>
          <span>Tra</span>
          <span className={styles.character}>ᮒᮢ</span>
        </div>
      </div>
    </section>
    {/* Footer Section */}
    <Footer /> {/* Include the Footer component */}
  </main>
);

export default NgalagenaPage;
