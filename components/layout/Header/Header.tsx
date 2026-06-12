"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // ID to scroll to after the menu closes and body lock is released
  const pendingTarget = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";

    return () => {
      // Restore body lock — use instant so smooth-scroll CSS doesn't animate
      // the restore itself and cause the page to visually scroll.
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      window.scrollTo({ top: scrollY, behavior: "instant" as ScrollBehavior });

      // If the user tapped a nav link, scroll to that section after the
      // body is restored (next frame) so there is no conflicting scroll.
      const id = pendingTarget.current;
      pendingTarget.current = null;
      if (id) {
        requestAnimationFrame(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        });
      }
    };
  }, [menuOpen]);

  // Handles clicks on nav links when the mobile menu is open.
  // Prevents default hash navigation, closes the menu, and schedules
  // a smooth scroll to the target after the body lock is released.
  const handleNavLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!menuOpen) return; // desktop: let the link work normally
    e.preventDefault();
    const id = href.replace(/^.*#/, "");
    pendingTarget.current = id;
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.logo}
          onClick={(e) => handleNavLink(e, "/")}
        >
          Bungalov<span className={styles.logoAccent}>28</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <Link href="#about" onClick={(e) => handleNavLink(e, "#about")}>O nama</Link>
          <Link href="#amenities" onClick={(e) => handleNavLink(e, "#amenities")}>Sadržaji</Link>
          <Link href="#gallery" onClick={(e) => handleNavLink(e, "#gallery")}>Galerija</Link>
          <Link href="#pricing" onClick={(e) => handleNavLink(e, "#pricing")}>Cenovnik</Link>
          <Link href="#faq" onClick={(e) => handleNavLink(e, "#faq")}>Česta pitanja</Link>
          <Link
            href="#contact"
            className={styles.navCta}
            onClick={(e) => handleNavLink(e, "#contact")}
          >
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
