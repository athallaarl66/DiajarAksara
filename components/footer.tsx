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
            <a href="/about">Diajar Aksara</a>
          </p>
        </div>
        <div>
          <h4>
            <a href="/services">Layanan Kami</a>
          </h4>
          <p>
            <a href="/read-aksara">Membaca Aksara</a>
          </p>
          <p>
            <a href="/write-aksara">Menulis Aksara</a>
          </p>
          <p>
            <a href="/learn-aksara">Latihan Aksara</a>
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
