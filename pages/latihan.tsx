import "../styles/globals.css";
import styles from "../styles/latihan.module.css"; // CSS styling
import Header from "../components/headerFitur"; // Import Header
import Footer from "../components/footerFitur"; // Import Footer
import Link from "next/link";

export default function LatihanPage() {
  return (
    <main className={styles.main}>
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
            <Link href="/latihan-menulis">
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
            <Link href="/latihan-menulis">
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
            <Link href="/latihan-aksara-swara-dan-angka">
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
            <Link href="/latihan-aksara-sunda">
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
            <Link href="/latihan-membaca-aksara">
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
            <Link href="/latihan-aksara-ngalagena">
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
