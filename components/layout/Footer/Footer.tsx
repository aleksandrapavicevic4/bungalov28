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
          <p className={styles.tagline}>Privatno utočište gde se mir susreće sa luksuzom.</p>
        </div>

        <nav className={styles.links}>
          <Link href="#about">O nama</Link>
          <Link href="#amenities">Sadržaji</Link>
          <Link href="#gallery">Galerija</Link>
          <Link href="#pricing">Cenovnik</Link>
          <Link href="#faq">Česta pitanja</Link>
          <Link href="#contact">Kontakt</Link>
        </nav>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Bungalov28. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
