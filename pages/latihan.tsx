import "../styles/globals.css";
import styles from "../styles/latihan.module.css"; // CSS styling
import Header from "../components/headerFitur"; // Import Header
import Footer from "../components/footerFitur"; // Import Footer
import Link from "next/link";
import Head from "next/head"; // Impor Head dari next/head

export default function LatihanPage() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Latihan Aksara Sunda</title>
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
      <Header /> {/* Header component */}
      {/* Latihan Section */}
      <section className={styles.section}>
        <div className={styles.imageLatihan}></div>
        <div className={styles.textSectionLatihan}>
          <h2>Latihan</h2>
          <p>
            Latihan ini bertujuan untuk meningkatkan keterampilan dalam membaca,
            menulis, dan memahami aksara Sunda, dengan latihan berbasis carpon
            (cerita pendek).
          </p>
        </div>
      </section>
      {/* Fitur Latihan Section */}
      <section className={styles.features}>
        <h2>Fitur yang tersedia</h2>
        <div className={styles.featureGrid}>
          {/* Latihan Rangken */}
          <div className={styles.featureItem}>
            <Link href="/menulis-aksara">
              <div className={styles.iconMenulis}></div>
              <h3>Latihan Menulis</h3>
              <p>
                Fokus pada peningkatan kemampuan menulis aksara Sunda dengan
                latihan interaktif.
              </p>
            </Link>
          </div>

          {/* Latihan Menulis rarangken */}
          <div className={styles.featureItem}>
            <Link href="/kuisRarangken">
              <div className={styles.iconRangken}></div>
              <h3>Latihan Rarangken</h3>
              <p>
                Fokus pada peningkatan kemampuan menulis aksara Sunda dengan
                latihan interaktif.
              </p>
            </Link>
          </div>

          {/* Latihan Aksara Swara dan Angka */}
          <div className={styles.featureItem}>
            <Link href="/KuisSwara-angka">
              <div className={styles.iconSwaraAngka}></div>
              <h3>Latihan Aksara Swara Dan Angka</h3>
              <p>
                Latihan untuk memahami aksara swara dan angka dalam aksara
                Sunda.
              </p>
            </Link>
          </div>

          {/* Latihan Aksara Sunda */}
          <div className={styles.featureItem}>
            <Link href="/kuisAksara">
              <div className={styles.iconAksarasunda}></div>
              <h3>Latihan Aksara Sunda</h3>
              <p>
                Menyediakan latihan khusus untuk memahami dan menulis aksara
                Sunda dengan tepat.
              </p>
            </Link>
          </div>

          {/* Latihan Membaca Aksara */}
          <div className={styles.featureItem}>
            <Link href="/kuisMembacaAksara">
              <div className={styles.iconMembaca}></div>
              <h3>Latihan Membaca Aksara</h3>
              <p>
                Fokus pada pemahaman dan keterampilan membaca aksara Sunda
                melalui latihan.
              </p>
            </Link>
          </div>

          {/* Latihan Aksara Ngalagena */}
          <div className={styles.featureItem}>
            <Link href="/KuisNgalagena">
              <div className={styles.iconAksaraNgalagena}></div>
              <h3>Latihan Aksara Ngalagena</h3>
              <p>Latihan untuk memahami aksara ngalagena dalam aksara Sunda.</p>
            </Link>
          </div>
        </div>
      </section>
      <Footer /> {/* Footer component */}
    </main>
  );
}
