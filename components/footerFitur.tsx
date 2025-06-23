import Link from "next/link"; // Importing the Link component from Next.js
import styles from "../styles/headfoot.module.css"; // Import Footer CSS

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Use CSS module styles */}
      <div className={styles.footerContent}>
        {/* Use CSS module styles */}
        <div className={styles.logoSection}></div>
        <div className={styles.linkSection}>
          {/* Use CSS module styles */}
          <div>
            <h4>Tentang Kami</h4>
            <p>
              <Link href="/about">Diajar Aksara</Link>
            </p>
          </div>
          <div>
            <h4>Layanan Kami</h4>
            <p>
              <Link href="/read-aksara">Membaca Aksara</Link>
            </p>
            <p>
              <Link href="/write-aksara">Menulis Aksara</Link>
            </p>
            <p>
              <Link href="/learn-aksara">Latihan Aksara</Link>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.footerBottom}>
        {/* Use CSS module styles */}
        <p>© 2025 Diajar Aksara. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
