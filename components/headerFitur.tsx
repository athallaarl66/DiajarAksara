import Link from "next/link"; // Import Link from Next.js
import { useState } from "react";
import styles from "../styles/headfoot.module.css"; // Import Header CSS

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  return (
    <header className={`${styles.header} ${menuOpen ? styles.showMenu : ""}`}>
      {/* Logo Section */}
      <Link href="/dashboard">
        <div className={styles.logo}></div>{" "}
        {/* Wrap logo with Link to navigate to the homepage */}
      </Link>

      {/* Hamburger Menu for Mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.hamburgerIcon}></div>
        <div className={styles.hamburgerIcon}></div>
        <div className={styles.hamburgerIcon}></div>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
          <li>
            <Link href="/about">Membaca</Link>
          </li>
          <li>
            <Link href="/features">Menulis</Link>
          </li>
          <li>
            <Link href="/pricing">Latihan</Link>
          </li>
          <li>
            <Link href="/gallery">Menu</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
