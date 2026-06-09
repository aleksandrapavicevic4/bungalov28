import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.imageWrapper}>
          {/* Placeholder — replace with <Image> from next/image */}
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>O nama</p>
          <h2 className={styles.headline}>Vaše mesto za predah</h2>
          <p className={styles.body}>
            Smešten u mirnom okruženju, Bungalov28 je prostor gde se vreme
            usporava. Jutra počinju uz tišinu, a večeri se završavaju bez žurbe.
          </p>
          <p className={styles.body}>
            Za one koji cene privatnost i udobnost - savremeno uređen, okružen
            zelenilom, spreman za vaš dolazak.
          </p>
          <ul className={styles.stats}>
            <li>
              <span className={styles.statNumber}>280</span>
              <span className={styles.statLabel}>m² stambenog prostora</span>
            </li>
            <li>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>spavaće sobe</span>
            </li>
            <li>
              <span className={styles.statNumber}>8</span>
              <span className={styles.statLabel}>mesta za goste</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
