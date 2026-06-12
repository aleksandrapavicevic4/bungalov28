"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

// Custom eased scroll — calmer and more premium than the browser default.
// Duration scales with distance so short hops feel quick and long jumps
// never feel rushed. Capped between 600 ms and 1 200 ms.
function smoothScrollTo(targetY: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;

  const duration = Math.max(600, Math.min(1200, Math.abs(distance) * 0.4));
  const startTime = performance.now();

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// Scroll to a section by id, accounting for the fixed header height.
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  smoothScrollTo(top);
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingTarget = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setShowBackToTop(y > 400);
    };
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
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      // Instant restore — prevents smooth-scroll CSS from animating the reset.
      window.scrollTo({ top: scrollY, behavior: "instant" as ScrollBehavior });

      const id = pendingTarget.current;
      pendingTarget.current = null;
      if (id) {
        // Wait one frame for the body unlock to settle, then scroll smoothly.
        requestAnimationFrame(() => scrollToSection(id));
      }
    };
  }, [menuOpen]);

  // On mobile: prevent default hash nav, store the target, close the menu.
  // On desktop: let the link work normally.
  const handleNavLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!menuOpen) return;
    e.preventDefault();
    const id = href.replace(/^.*#/, "");
    pendingTarget.current = id;
    setMenuOpen(false);
  };

  const handleBackToTop = () => {
    if (menuOpen) setMenuOpen(false);
    // Give the menu a frame to start closing before scrolling.
    requestAnimationFrame(() => smoothScrollTo(0));
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <Link
            href="/"
            className={styles.logo}
            onClick={(e) => handleNavLink(e, "/")}
          >
            Bungalov<span className={styles.logoAccent}>28</span>
          </Link>

          {/* The nav IS the full-screen overlay on mobile.
              Clicking the dark background (nav itself) closes the menu;
              clicks on the inner content wrapper are stopped from bubbling. */}
          <nav
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <div
              className={styles.navContent}
              onClick={(e) => e.stopPropagation()}
            >
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
            </div>
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

      {/* Floating back-to-top button — mobile only, appears after 400 px scroll */}
      <button
        className={`${styles.backToTop} ${showBackToTop ? styles.backToTopVisible : ""}`}
        onClick={handleBackToTop}
        aria-label="Na vrh stranice"
      >
        &#8593;
      </button>
    </>
  );
}
