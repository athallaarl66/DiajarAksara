// components/Header.js
"use client"; // Marking this component as a client-side component to use hooks

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Add 'scrolled' class when the user scrolls more than 50px
    } else {
      setIsScrolled(false); // Remove 'scrolled' class when scroll position is less than 50px
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="/image/logo-removebg-preview.png"
            alt="Diajar Aksara Logo"
            className={styles.logoImage}
          />
        </div>
        <nav>
          <ul>
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
      </div>
    </header>
  );
};

export default Header;
