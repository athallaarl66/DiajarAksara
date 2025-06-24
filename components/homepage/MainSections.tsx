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
          Aksara Sunda adalah sistem penulisaf tradisional yang digunakan untuk
          menulis bahasa Sunda. Aksara ini berkembang dari aksara Brahmi India
          dan digunakan pada masa Kerajaan Sunda (abad ke-14 hingga ke-16).
          Setelah lama tergantikan oleh aksara Arab dan Latin, aksara Sunda
          mulai dihidupkan kembali pada abad ke-20. Hasilnya adalah Aksara Sunda
          Baku, versi yang disesuaikan untuk kebutuhan modern, yang kini
          digunakan dalam pendidikan dan pelestarian budaya..
        </p>
      </div>
    </section>

    {/* Pembelajaran Aksara Section */}
    <section className={`${styles.section} ${styles.sectionReverse}`}>
      <div className={styles.imagePembelajaran}></div>
      <div className={styles.textSection}>
        <h2>Pembelajaran Aksara</h2>
        <p>
          Aplikasi pembelajaran aksara Sunda ini dirancang untuk membantu
          pengguna dari berbagai usia mengenal dan memahami aksara Sunda secara
          menyeluruh. Melalui fitur membaca, pengguna dapat mempelajari bentuk
          dan cara pelafalan aksara dengan panduan yang mudah diikuti. Fitur
          menulis memungkinkan latihan menulis aksara secara digital, lengkap
          dengan koreksi otomatis.
        </p>
      </div>
    </section>

    {/* Latihan Section */}
    <section className={styles.sectionLatihan}>
      <div className={styles.imageLatihan}></div>
      <div className={styles.textSectionLatihan}>
        <h2>Latihan</h2>
        <p>
          Pada platform ini, Anda dapat menikmati berbagai latihan yang
          dirancang untuk membantu Anda menguasai aksara Sunda. Tersedia latihan
          membaca, kuis, dan menulis untuk setiap jenis aksara, mulai dari
          Aksara Ngalagena, Aksara Swara, hingga Aksara Angka.
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
              Jelajahi dunia aksara Sunda dengan membaca! Temukan keindahan
              huruf-hurufnya secara interaktif
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
              Tantang dirimu untuk menulis aksara Sunda! Tunjukkan keterampilan
              menulismu dengan cara yang seru.
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
              Pelajari dan latih aksara Sunda yang indah dengan platform
              interaktif kami yang menyenangkan dan mudah digunakan!
            </p>
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default MainSections;
