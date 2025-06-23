"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <Link href="/" passHref>
          <div className={styles.logo}>
            <Image
              src="/image/logo-removebg-preview.png"
              alt="Diajar Aksara Logo"
              width={150}
              height={50}
              priority
              className={styles.logoImage}
            />
          </div>
        </Link>

        {/* Hamburger Menu */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <div className={styles.hamburgerIcon}></div>
          <div className={styles.hamburgerIcon}></div>
          <div className={styles.hamburgerIcon}></div>
        </button>

        {/* Desktop Navigation */}
        <nav>
          <ul className={`${styles.navList} ${menuOpen ? styles.show : ""}`}>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                Membaca
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/features" className={styles.navLink}>
                Menulis
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/pricing" className={styles.navLink}>
                Latihan
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/gallery" className={styles.navLink}>
                Menu
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.navbarMobile} ${menuOpen ? styles.show : ""}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/features" className={styles.navLink}>
              Features
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/pricing" className={styles.navLink}>
              Pricing
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/gallery" className={styles.navLink}>
              Gallery
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/team" className={styles.navLink}>
              Team
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
