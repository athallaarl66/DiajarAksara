import Link from "next/link";
import styles from "../../styles/Home.module.css";

const MainSections = () => (
  <main className={styles.main}>
    {/* Aksara Sunda Section */}
    <section className={styles.section}>
      <div className={styles.imageAksara}></div>
      <div className={styles.textSection}>
        <h2>Aksara Sunda</h2>
        <p>
          Aksara Sunda is a traditional writing system used to write the
          Sundanese language, which has evolved from Brahmi script in India and
          was used during the Sunda Kingdom era (14th-16th century).
        </p>
      </div>
    </section>

    {/* Pembelajaran Aksara Section */}
    <section className={`${styles.section} ${styles.sectionReverse}`}>
      <div className={styles.imagePembelajaran}></div>
      <div className={styles.textSection}>
        <h2>Pembelajaran Aksara</h2>
        <p>
          Carpon (short stories in Sundanese) is used for reading practice while
          immersing in Sundanese culture and language.
        </p>
      </div>
    </section>

    {/* Latihan Section */}
    <section className={styles.sectionLatihan}>
      <div className={styles.imageLatihan}></div>
      <div className={styles.textSectionLatihan}>
        <h2>Latihan</h2>
        <p>
          Carpon (short stories in Sundanese) is used for reading practice while
          immersing in Sundanese culture and language.
        </p>
      </div>
    </section>

    {/* Features Section */}
    <section className={styles.features}>
      <h2>Fitur yang tersedia</h2>
      <div className={styles.featureGrid}>
        <div className={styles.featureItem}>
          <Link href="/membaca-aksara">
            {" "}
            {/* Link to Membaca Aksara Page */}
            <div className={styles.iconMembaca}></div>
            <h3>Membaca Aksara</h3>
            <p>
              Our community has over 10,000 expert tutors – all with prior
              teaching experience, vetted by our team.
            </p>
          </Link>
        </div>
        <div className={styles.featureItem}>
          <Link href="/menulis-aksara">
            {" "}
            {/* Link to Menulis Aksara Page */}
            <div className={styles.iconMenulis}></div>
            <h3>Menulis Aksara</h3>
            <p>
              With lesson prices starting at $20, we provide remote language
              learning to fit any budget.
            </p>
          </Link>
        </div>
        <div className={styles.featureItem}>
          <Link href="/latihan">
            {" "}
            {/* Link to Latihan Page */}
            <div className={styles.iconLatihan}></div>
            <h3>Latihan</h3>
            <p>
              We make learning happen on your schedule. Book lessons whenever
              you want to learn.
            </p>
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default MainSections;
