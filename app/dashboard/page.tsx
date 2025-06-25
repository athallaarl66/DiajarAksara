// pages/index.tsx
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MainSections from "../../components/homepage/MainSections"; // Menggabungkan PembelajaranAksara, Latihan, dan Features
import styles from "../../styles/Home.module.css";
import Script from "next/script"; // Import Script from next/script

const Home = () => {
  return (
    <>
      <Head>
        <title>Diajar Aksara</title>
      </Head>

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

      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroOverlay}>
            <h1 className={styles.heroTitle}>Diajar Aksara (ᮓᮤᮏᮁᮃᮊ᮪ᮞᮛ)</h1>
            <p className={styles.heroDesc}></p>
          </div>
        </section>

        {/* Main Sections (Pembelajaran Aksara, Latihan, Features) */}
        <MainSections />
      </main>

      <Footer />
    </>
  );
};

export default Home;
