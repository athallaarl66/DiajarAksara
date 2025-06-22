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
      <section className={styles.bodyHtml}>
        <div className={styles.imageSection}></div>
        <div className={styles.textSection}>
          <h2>Understanding Aksara Sunda</h2>
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
          <Link href="/ngalagena">
            <div className={styles.icon1}></div>
          </Link>
          <h3>Aksara ngalegna</h3>
          <p>
            Practice sheets are customized based on a child’s learning
            progress...
          </p>
        </div>
        <div className={styles.infoItem}>
          <Link href="/rarangken">
            <div className={styles.icon2}></div>
          </Link>
          <h3>Rarangkén</h3>
          <p>
            Practice sheets are customized based on a child’s learning
            progress...
          </p>
        </div>
        <div className={styles.infoItem}>
          <Link href="/aksara-swara">
            <div className={styles.icon3}></div>
          </Link>
          <h3>Aksara Swara</h3>
          <p>
            Practice sheets are customized based on a child’s learning
            progress...
          </p>
        </div>
        <div className={styles.infoItem}>
          <Link href="/aksara-angka">
            <div className={styles.icon4}></div>
          </Link>
          <h3>Angka</h3>
          <p>
            Practice sheets are customized based on a child’s learning
            progress...
          </p>
        </div>
        <div className={styles.infoItem}>
          <Link href="/latihan">
            <div className={styles.icon5}></div>
          </Link>
          <h3>Latihan</h3>
          <p>
            Practice sheets are customized based on a child’s learning
            progress...
          </p>
        </div>
      </section>

      {/* Reuse the Footer component */}
      <Footer />
    </div>
  );
};

export default MembacaAksaraPage;
