// pages/membaca-aksara.js
import "../styles/globals.css";
import Header from "../components/headerFitur"; // Import the Header component
import Footer from "../components/footerFitur"; // Import the Footer component
import styles from "../styles/MembacaAksara.module.css"; // CSS for this page
import Link from "next/link";

const MembacaAksaraPage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Reuse the Header component */}
      <Header />

      {/* Main Content Section */}
      <section className={styles.atas}>
        <div className={styles.imageSection}></div>
        <div className={styles.textSection}>
          <h2>Membaca Aksara </h2>
          <p>
            Dengan latihan yang konsisten, Anda akan dapat membaca teks-teks
            Aksara Sunda dengan lancar dan menyenankan, memperkaya pengetahuan
            dan keterampilan literasi Anda.
          </p>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className={styles.additionalInfo}>
        <div className={styles.infoItem}>
          <Link href="/ngalagena">
            <div className={styles.icon1}></div>
          </Link>
          <h3>Aksara ngalegna</h3>
          <p>
            Pelajari huruf dasar dalam aksara Sunda dan kuasai cara menulis
            konsonan dengan latihan interaktif
          </p>
        </div>
        <div className={styles.infoItem}>
          <Link href="/rarangken">
            <div className={styles.icon2}></div>
          </Link>
          <h3>Rarangkén</h3>
          <p>
            Latihan menulis rangkaian aksara Sunda dengan kombinasi vokal dan
            konsonan, membantumu membangun keterampilan membaca dan menulis
          </p>
        </div>
        <div className={styles.infoItem}>
          <Link href="/aksara-swara">
            <div className={styles.icon3}></div>
          </Link>
          <h3>Aksara Swara</h3>
          <p>
            Berlatih dengan aksara suara! Pahami cara menulis vokal dalam aksara
            Sunda melalui latihan yang menyenangkan
          </p>
        </div>
        <div className={styles.infoItem}>
          <Link href="/aksara-angka">
            <div className={styles.icon4}></div>
          </Link>
          <h3>Angka</h3>
          <p>
            Kenali dan latih penulisan angka dalam aksara Sunda. Mempelajari
            angka akan memperkaya kemampuan menulis aksara Sunda
          </p>
        </div>
        <div className={styles.infoItem}>
          <Link href="/latihan">
            <div className={styles.icon5}></div>
          </Link>
          <h3>Latihan</h3>
          <p>
            Mulailah latihan dengan berbagai jenis aksara Sunda! Sesuaikan
            latihan dengan kemajuan belajarmu untuk pengalaman belajar yang
            optimal.
          </p>
        </div>
      </section>

      {/* Reuse the Footer component */}
      <Footer />
    </div>
  );
};

export default MembacaAksaraPage;
