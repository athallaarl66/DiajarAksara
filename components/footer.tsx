import Link from "next/link"; // Importing the Link component from Next.js

const Footer = () => (
  <footer className="footer">
    <div className="footerContent">
      <div className="logoSection">{/* Optionally, add your logo here */}</div>
      <div className="linkSection">
        <div>
          <h4>
            <a href="/about">Tentang Kami</a>
          </h4>
          <p>
            <Link href="/tentangKami">Diajar Aksara</Link>
          </p>
        </div>
        <div>
          <h4>
            <Link href="/services">Layanan Kami</Link>
          </h4>
          <p>
            <Link href="/membaca-aksara">Membaca Aksara</Link>
          </p>
          <p>
            <Link href="/menulis-aksara">Menulis Aksara</Link>
          </p>
          <p>
            <Link href="/latihan">Latihan Aksara</Link>
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div className="footerBottom">
      <p>© 2025 Diajar Aksara. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
