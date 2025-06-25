import "../styles/globals.css";
import Head from "next/head"; // Import the Head component from Next.js
import styles from "../styles/rarangken.module.css";
import Header from "../components/headerFitur";
import Footer from "../components/footerFitur";

const rarangkenData = [
  {
    from: "Ka",
    base: "ᮊ",
    to: "Ki",
    toChar: "ᮊᮤ",
    name: "Panghulu",
    desc: "Merubah suara /a/ menjadi /i/",
    imageClass: "simbol1",
  },
  {
    from: "Ka",
    base: "ᮊ",
    to: "ké",
    toChar: "ᮊᮦ",
    name: "Panéléng",
    desc: " Merubah suara /a/ pada aksara ngalagena menjadi /é/",
    imageClass: "simbol2",
  },
  {
    from: "Ka",
    base: "ᮊ",
    to: "kang",
    toChar: "ᮊᮀ",
    name: "Panyecek",
    desc: "Menambahkan suara /ng/ pada akhir kata dari aksara ngalagena",
    imageClass: "simbol3",
  },
  {
    from: "Ka",
    base: "ᮊ",
    to: "Ko",
    toChar: "ᮊᮧ",
    name: "Panolong",
    desc: "Merubah suara /a/ pada aksara ngalagena menjadi /o/ ",
    imageClass: "simbol4",
  },
  {
    from: "Ka",
    base: "ᮊ",
    to: "K",
    toChar: "ᮊ᮪",
    name: "Pamaeh",
    desc: "Menghilangkan suara /a/ dari aksara ngalagena ",
    imageClass: "simbol5",
  },
  {
    from: "Ka",
    base: "ᮊ",
    to: "Kya",
    toChar: "ᮊᮡ",
    name: "Pamingkal",
    desc: "Menambahkan suara /y/ di tengah aksara ngalagena",
    imageClass: "simbol6",
  },
  {
    from: "Ka",
    base: "ᮊ",
    to: "Kah",
    toChar: "ᮊᮂ",
    name: "Pangwisad",
    desc: "Menambahkan suara /h/ pada akhir kata dari aksara ngalagena",
    imageClass: "simbol7",
  },
  {
    from: "Ka",
    base: "ᮊ",
    to: "Kar",
    toChar: "ᮊᮁ",
    name: "Panglayar",
    desc: "Menambahkan suara  suara /r/ pada akhir kata dari aksara ngalagena",
    imageClass: "simbol8",
  },
  {
    from: "Ka",
    base: "ᮊ",
    to: "Ke",
    toChar: "ᮊᮨ",
    name: "Pamepet",
    desc: " Merubah suara /a/ pada aksara ngalagena menjadi /e/ ",
    imageClass: "simbol9",
  },
  {
    from: "Ka",
    base: "ᮊ",
    to: "Keu",
    toChar: "ᮊᮩ",
    name: "Paneuleung",
    desc: "Merubah suara /a/ pada aksara ngalagena menjadi /eu/ ",
    imageClass: "simbol10",
  },
  {
    from: "Ka",
    base: "ᮊ",
    to: "Ku",
    toChar: "ᮊᮥ",
    name: "Panyuku",
    desc: " Merubah suara /a/ pada aksara ngalagena menjadi /u/ /",
    imageClass: "simbol11",
  },
  {
    from: "Ka",
    base: "ᮊ",
    to: "Kla",
    toChar: "ᮊᮣ",
    name: "Panyiku",
    desc: "Menambahkan  /l/ pada tengah aksara ngalagena",
    imageClass: "simbol12",
  },
  {
    from: "Ka",
    base: "ᮊ",
    to: "Kra",
    toChar: "ᮊᮣ",
    name: "Panyakra",
    desc: "Menambahkan  /r/ pada tengah aksara ngalagena",
    imageClass: "simbol13",
  },
];

export default function RarangkenPage() {
  return (
    <main className={styles.main}>
      {/* Maze Script for testing */}
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (m, a, z, e) {
              var s, t;
              try {
                t = m.sessionStorage.getItem('maze-us');
              } catch (err) {}
      
              if (!t) {
                t = new Date().getTime();
                try {
                  m.sessionStorage.setItem('maze-us', t);
                } catch (err) {}
              }
      
              s = a.createElement('script');
              s.src = z + '?apiKey=' + e;
              s.async = true;
              a.getElementsByTagName('head')[0].appendChild(s);
              m.mazeUniversalSnippetApiKey = e;
            })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', 'd16b8531-f168-49fe-bd59-a59a4c18d3bf');
          `,
          }}
        />
      </Head>

      <Header />
      <section className={styles.section}>
        <div className={styles.textSection}>
          <h2>Rarangken</h2>
          <p>
            Rarangken adalah tanda baca tambahan (diakritik) dalam aksara Sunda
            yang digunakan untuk mengubah atau menambahkan bunyi pada aksara
            dasar (ngalagena). Fungsinya mirip dengan huruf vokal atau tanda
            bunyi tambahan dalam alfabet Latin.
          </p>
        </div>

        <div className={styles.table}>
          {rarangkenData.map((item, index) => (
            <div className={styles.row} key={index}>
              <div className={styles.col}>{item.from}</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.colChar}>{item.base}</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.col}>{item.to}</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.colChar}>{item.toChar}</div>
              <div className={styles.colExplain}>
                <strong>({item.name})</strong> {item.desc}
              </div>
              <div className={styles.symbol + " " + styles[item.imageClass]} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
