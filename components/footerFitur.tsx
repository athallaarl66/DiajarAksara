import styles from "../styles/headfoot.module.css"; // Import Footer CSS

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {" "}
      {/* Use CSS module styles */}
      <div className={styles.footerContent}>
        {" "}
        {/* Use CSS module styles */}
        <div className={styles.logoSection}></div>
        <div className={styles.linkSection}>
          {" "}
          {/* Use CSS module styles */}
          <div>
            <h4>Tentang Kami</h4>
            <p>Dajar Aksara</p>
            <p>Dajar Aksara</p>
          </div>
          <div>
            <h4>Layanan Kami</h4>
            <p>Belajar Aksara</p>
            <p>Membaca Aksara</p>
            <p>Menulis Aksara</p>
          </div>
          <div>
            <h4>Lainnya</h4>
            <p>Belajar Aksara</p>
            <p>Belajar Aksara</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.footerBottom}>
        {" "}
        {/* Use CSS module styles */}
        <p>Copyright © MyCourse.io 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
