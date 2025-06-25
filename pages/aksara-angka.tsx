import "../styles/globals.css";
import styles from "../styles/angka.module.css"; // Gunakan CSS untuk styling
import Header from "../components/headerFitur";
import Footer from "../components/footerFitur";
import Head from "next/head"; // Impor Head dari next/head

const aksaraAngkaData = [
  {
    symbol: "᮰",
    name: "Angka 0",
    description: "Aksara untuk angka 0 dalam aksara Sunda.",
  },
  {
    symbol: "᮱",
    name: "Angka 1",
    description: "Aksara untuk angka 1 dalam aksara Sunda.",
  },
  {
    symbol: "᮲",
    name: "Angka 2",
    description: "Aksara untuk angka 2 dalam aksara Sunda.",
  },
  {
    symbol: "᮳",
    name: "Angka 3",
    description: "Aksara untuk angka 3 dalam aksara Sunda.",
  },
  {
    symbol: "᮴",
    name: "Angka 4",
    description: "Aksara untuk angka 4 dalam aksara Sunda.",
  },
  {
    symbol: "᮵",
    name: "Angka 5",
    description: "Aksara untuk angka 5 dalam aksara Sunda.",
  },
  {
    symbol: "᮶",
    name: "Angka 6",
    description: "Aksara untuk angka 6 dalam aksara Sunda.",
  },
  {
    symbol: "᮷",
    name: "Angka 7",
    description: "Aksara untuk angka 7 dalam aksara Sunda.",
  },
  {
    symbol: "᮸",
    name: "Angka 8",
    description: "Aksara untuk angka 8 dalam aksara Sunda.",
  },
  {
    symbol: "᮹",
    name: "Angka 9",
    description: "Aksara untuk angka 9 dalam aksara Sunda.",
  },
];

export default function AksaraAngkaPage() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Aksara Angka - Diajar Aksara</title>

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
          <h2>Aksara Angka</h2>
          <p>
            Aksara Angka adalah sistem angka dalam Aksara Sunda yang digunakan
            untuk menuliskan angka dalam bahasa Sunda. Bentuknya berbeda dari
            angka Latin (Arab) yang umum dipakai sekarang.
          </p>
        </div>

        <div className={styles.gridContainer}>
          {aksaraAngkaData.map((item, index) => (
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
