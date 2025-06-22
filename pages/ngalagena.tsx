import "../styles/globals.css";
import styles from "../styles/ngalagena.module.css";
import Header from "../components/headerFitur"; // Import Header component
import Footer from "../components/footerFitur"; // Import Footer component

const NgalagenaPage = () => (
  <main className={styles.main}>
    {/* Header Section */}
    <Header /> {/* Include the Header component */}
    {/* Aksara Ngalagena Section */}
    <section className={styles.section}>
      <div className={styles.textSection}>
        <h2>Aksara Ngalagena</h2>
        <p>
          Aksara Ngalagena is a set of symbols in the Sundanese script that
          represent consonants and vowels. Each symbol represents a syllable
          with the vowel /a/. In the Sundanese language, the hierarchy of the
          language is based on the situation and relationship between the
          speakers. Ngalagena is typically used to write Sundanese at the level
          of &quot;lemes&quot; (soft) or &quot;lemes pisan&quot; (very soft).
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

        <div className={styles.tableItem}>
          <span>Le</span>
          <span className={styles.character}>ᮜ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Leu</span>
          <span className={styles.character}>ᮜᮥ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Re/Reu</span>
          <span className={styles.character}>ᮛᮥ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
        <div className={styles.tableItem}>
          <span>Tra</span>
          <span className={styles.character}>ᮒᮛ</span>{" "}
          {/* Example: Aksara symbol */}
        </div>
      </div>
    </section>
    {/* Aksara Khusus Section */}
    <section className={styles.section}>
      <div className={styles.textSection}>
        <h2>Aksara Khusus</h2>
        <p>
          Aksara Khusus does not belong to the Ngalagena set because it does not
          contain the vowel /a/ and cannot be given a vocalization range. These
          characters are independent and used in certain contexts.
        </p>
      </div>

      <div className={styles.tableGrid}>
        {/* Characters for Aksara Khusus */}
        <div className={styles.tableItem}>
          <span>Le</span>
          <span className={styles.character}>77</span>
        </div>
        <div className={styles.tableItem}>
          <span>Leu</span>
          <span className={styles.character}>77</span>
        </div>
        <div className={styles.tableItem}>
          <span>Re/Reu</span>
          <span className={styles.character}>77</span>
        </div>
        <div className={styles.tableItem}>
          <span>Tra</span>
          <span className={styles.character}>77</span>
        </div>
      </div>
    </section>
    {/* Footer Section */}
    <Footer /> {/* Include the Footer component */}
  </main>
);

export default NgalagenaPage;
