// pages/index.tsx
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MainSections from "../../components/homepage/MainSections"; // Menggabungkan PembelajaranAksara, Latihan, dan Features
import styles from "../../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Diajar Aksara</title>
      </Head>

      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroOverlay}>
            <h1 className={styles.heroTitle}>Diajar Aksara (ᮓᮤᮏᮁᮃᮊ᮪ᮞᮛ)</h1>
            <p className={styles.heroDesc}>
              Learn and practice the beautiful Sundanese script with our
              interactive platform.
            </p>
          </div>
        </section>

        {/* Main Sections (Pembelajaran Aksara, Latihan, Features) */}
        <MainSections />
      </main>

      <Footer />
    </>
  );
};

export default Home;
