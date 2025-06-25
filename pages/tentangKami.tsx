import { useState, useEffect } from "react";
import Head from "next/head"; // Import the Head component from Next.js
import Header from "../components/headerFitur"; // Import the Header component
import Footer from "../components/footerFitur"; // Import the Footer component
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>;
import styles from "../styles/AboutUs.module.css"; // Import CSS for About Us page

const AboutUs = () => {
  const [fadeIn, setFadeIn] = useState(false);

  // Set fadeIn to true when the component mounts
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`${styles.container} ${fadeIn ? styles.fadeIn : ""}`}>
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

      {/* Header Component */}
      <Header />

      {/* Web App Pembelajaran Section */}
      <section className={styles.infoSection}>
        <h2 className={styles.sectionTitle}>
          Selamat Datang di Aplikasi Pembelajaran Kami
        </h2>
        <div className={styles.infoContent}>
          <p>
            Aplikasi ini dirancang untuk memberikan pengalaman pembelajaran yang
            interaktif dan efektif bagi semua pengguna. Dengan fitur-fitur
            inovatif, aplikasi ini memungkinkan pengguna untuk belajar dengan
            cara yang menyenangkan dan mudah diakses kapan saja dan di mana
            saja.
          </p>

          <p>
            Aplikasi ini bertujuan untuk mempermudah proses belajar dengan
            menyediakan alat bantu yang intuitif dan memotivasi pengguna untuk
            belajar lebih baik. Kami percaya bahwa teknologi dapat membantu
            menciptakan pengalaman belajar yang lebih menarik dan bermanfaat.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className={styles.aboutSection}>
        <h1 className={styles.sectionTitle}>Harapan Kami</h1>
        <p className={styles.description}>
          Web ini dibuat untuk melestarikan dan mempromosikan Aksara Sunda,
          salah satu warisan budaya yang kaya namun kini terancam punah. Dengan
          pesatnya perkembangan teknologi dan bahasa global, aksara Sunda
          semakin terlupakan, terutama di kalangan generasi muda. Melalui
          platform ini, kami ingin memberikan akses yang mudah dan interaktif
          bagi siapa saja untuk belajar, berlatih, dan menguasai Aksara Sunda.
          Tujuan kami adalah mengedukasi dan memperkenalkan aksara Sunda kepada
          masyarakat luas dengan cara yang menyenangkan, memanfaatkan teknologi
          untuk mempermudah pembelajaran.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className={styles.contactSection}>
        <h2>Kontak kami</h2>
        <p>
          Jika Anda memiliki pertanyaan atau masukan, jangan ragu untuk
          menghubungi kami:
        </p>
        <div className={styles.contactInfo}>
          <p>
            <span className={styles.emailIcon}></span> Email:{" "}
            <a href="mailto:athallaarli@gmail.com">athallaarli@gmail.com</a>
          </p>
          <p>
            <span className={styles.githubIcon}></span> Github:{" "}
            <a href="https://github.com/athallaarl66">athallaarl66</a>
          </p>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AboutUs;
