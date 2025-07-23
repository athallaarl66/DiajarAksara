// pages/membaca-aksara.js
import "../styles/globals.css";
import Header from "../components/headerFitur"; // Import the Header component
import Footer from "../components/footerFitur"; // Import the Footer component
import styles from "../styles/menulis.module.css"; // CSS for this page
import Link from "next/link";
import Head from "next/head"; // Import Head from next/head

const MembacaAksaraPage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Google Analytics Tag */}
      <Head>
        <title>Menulis Aksara Sunda</title>
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

      {/* Reuse the Header component */}
      <Header />

      {/* Main Content Section */}
      <section className={styles.mainSection}>
        <div className={styles.imageSection}></div>
        <div className={styles.textSection}>
          <h2>Menulis Aksara</h2>
          <p>
            Aksara Sunda is a traditional writing system used to write the
            Sundanese language, evolved from the Brahmi script in India and used
            during the Sunda Kingdom era (14th-16th century).
          </p>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className={styles.additionalInfo}>
        <div className={styles.infoItem}>
          <Link href="/menulisNgalagena">
            <div className={styles.icon1}></div>
          </Link>
          <h3>Aksara ngalegna</h3>
          <p>Berlatih menulis aksara ngalagena dengan menggunakan fitur ini</p>
        </div>
        <div className={styles.infoItem}>
          <Link href="/latihan-rarangken">
            <div className={styles.icon2}></div>
          </Link>
          <h3>Rarangkén</h3>
          <p>Berlatih menulis aksara rarangken dengan menggunakan fitur ini</p>
        </div>
        <div className={styles.infoItem}>
          <Link href="/menulis-aksaraSwara">
            <div className={styles.icon3}></div>
          </Link>
          <h3>Aksara Swara</h3>
          <p>Berlatih menulis aksara swara dengan menggunakan fitur ini</p>
        </div>
        <div className={styles.infoItem}>
          <Link href="/menulis-aksaraangka">
            <div className={styles.icon4}></div>
          </Link>
          <h3>Angka</h3>
          <p>Berlatih menulis aksara angka dengan menggunakan fitur ini</p>
        </div>
      </section>

      {/* Reuse the Footer component */}
      <Footer />
    </div>
  );
};

export default MembacaAksaraPage;
