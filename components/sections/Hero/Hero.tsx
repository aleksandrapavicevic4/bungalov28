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
          Privatni bungalov za odmor, proslave i trenutke koje vredi zapamtiti.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>Pošaljite upit</a>
          <a href="#about" className={styles.btnSecondary}>Saznajte više</a>
        </div>
      </div>
    </section>
  );
}
