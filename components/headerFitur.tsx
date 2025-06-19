// components/Header.js

import Link from "next/link";
import styles from "../styles/headfoot.module.css"; // Import Header CSS

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div> {/* Logo inserted in CSS */}
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/features">Features</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
