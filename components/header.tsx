"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css"; // Assuming your CSS is in this file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // State to handle scroll effect

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // If the page is scrolled more than 50px
        setIsScrolled(true); // Apply scrolled header style
      } else {
        setIsScrolled(false); // Reset header style
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""} ${
        menuOpen ? styles.showMenu : ""
      }`}
    >
      {/* Logo Section */}
      <Link href="/dashboard">
        <div className={styles.logo}>{/* Add logo image here */}</div>
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
            <Link href="/membaca-aksara">Membaca</Link>
          </li>
          <li>
            <Link href="/menulis-aksara">Menulis</Link>
          </li>
          <li>
            <Link href="/latihan">Latihan</Link>
          </li>
          <li>
            <Link href="/dashboard">Menu</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
