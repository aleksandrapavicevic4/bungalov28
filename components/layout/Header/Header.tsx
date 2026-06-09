"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          Bungalov<span className={styles.logoAccent}>28</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <Link href="#about" onClick={() => setMenuOpen(false)}>O nama</Link>
          <Link href="#amenities" onClick={() => setMenuOpen(false)}>Sadržaji</Link>
          <Link href="#gallery" onClick={() => setMenuOpen(false)}>Galerija</Link>
          <Link href="#rules" onClick={() => setMenuOpen(false)}>Kućni red</Link>
          <Link href="#contact" className={styles.navCta} onClick={() => setMenuOpen(false)}>
            Rezerviši boravak
          </Link>
        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} />
        </button>
      </div>
    </header>
  );
}
