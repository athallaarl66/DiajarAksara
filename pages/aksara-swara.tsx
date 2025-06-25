import "../styles/globals.css";
import styles from "../styles/swara.module.css"; // Gunakan CSS untuk styling
import Header from "../components/headerFitur";
import Footer from "../components/footerFitur";
import Head from "next/head"; // Impor Head dari next/head

const aksaraSwaraData = [
  {
    symbol: "ᮃ",
    name: "Aksara A",
    description: "Aksara untuk vokal A dalam aksara Sunda.",
  },
  {
    symbol: "ᮄ",
    name: "Aksara I",
    description: "Aksara untuk vokal I dalam aksara Sunda.",
  },
  {
    symbol: "ᮇ",
    name: "Aksara U",
    description: "Aksara untuk vokal U dalam aksara Sunda.",
  },
  {
    symbol: "ᮌ",
    name: "Aksara E",
    description: "Aksara untuk vokal E dalam aksara Sunda.",
  },
  {
    symbol: "ᮎ",
    name: "Aksara O",
    description: "Aksara untuk vokal O dalam aksara Sunda.",
  },
  {
    symbol: "ᮏ",
    name: "Aksara U",
    description: "Aksara untuk vokal U dalam aksara Sunda.",
  },
  {
    symbol: "ᮉ",
    name: "Aksara É",
    description: "Aksara untuk vokal É dalam aksara Sunda.",
  },
  {
    symbol: "ᮌᮥ",
    name: "Aksara Eu",
    description: "Aksara untuk vokal Eu dalam aksara Sunda.",
  },
];

export default function AksaraSwaraPage() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Aksara Swara - Diajar Aksara</title>

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1B1E9FSFPX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1B1E9FSFPX');
            `,
          }}
        />
      </Head>

      <Header />
      <section className={styles.section}>
        <div className={styles.textSection}>
          <h2>Aksara Swara</h2>
          <p>
            Aksara Swara adalah sistem vokal dalam aksara Sunda. Setiap aksara
            swara digunakan untuk menuliskan bunyi vokal dalam bahasa Sunda.
          </p>
        </div>

        <div className={styles.gridContainer}>
          {aksaraSwaraData.map((item, index) => (
            <div className={styles.gridItem} key={index}>
              <div className={styles.symbol}>{item.symbol}</div>
              <div className={styles.symbolLabel}>{item.name}</div>
              <div className={styles.symbolDesc}>{item.description}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
