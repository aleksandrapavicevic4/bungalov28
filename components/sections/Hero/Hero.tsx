import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Private Villa · Nature Retreat</p>
        <h1 className={styles.headline}>
          Where Stillness<br />
          Becomes Luxury
        </h1>
        <p className={styles.subheading}>
          A secluded bungalow retreat for couples, families, and small groups
          who refuse to choose between nature and comfort.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>Reserve Your Stay</a>
          <a href="#about" className={styles.btnSecondary}>Discover More</a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
