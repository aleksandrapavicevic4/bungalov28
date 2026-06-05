import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Privatna vila · Utočište u prirodi</p>
        <h1 className={styles.headline}>
          Gde mir<br />
          postaje luksuz
        </h1>
        <p className={styles.subheading}>
          Skroviti bungalov idealan za porodični odmor, dnevne proslave i devojačke/momačke večeri.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>Rezerviši boravak</a>
          <a href="#about" className={styles.btnSecondary}>Saznaj više</a>
        </div>
      </div>
    </section>
  );
}
