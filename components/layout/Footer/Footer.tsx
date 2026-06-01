import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            Bungalov<span className={styles.logoAccent}>28</span>
          </Link>
          <p className={styles.tagline}>A private retreat where stillness meets luxury.</p>
        </div>

        <nav className={styles.links}>
          <Link href="#about">About</Link>
          <Link href="#amenities">Amenities</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#rules">House Rules</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Bungalov28. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
