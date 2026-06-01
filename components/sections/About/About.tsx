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
          <p className={styles.eyebrow}>The Place</p>
          <h2 className={styles.headline}>
            A Bungalow Built for Those Who Know the Difference
          </h2>
          <p className={styles.body}>
            Nestled between forest and open sky, Bungalov28 is a privately owned
            retreat designed around one idea: that a stay should leave you better
            than it found you.
          </p>
          <p className={styles.body}>
            Every detail — from the materials chosen to the silence preserved —
            reflects a belief that true luxury is unhurried, uninterrupted, and
            deeply personal.
          </p>
          <ul className={styles.stats}>
            <li>
              <span className={styles.statNumber}>280</span>
              <span className={styles.statLabel}>m² of living space</span>
            </li>
            <li>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>private bedrooms</span>
            </li>
            <li>
              <span className={styles.statNumber}>8</span>
              <span className={styles.statLabel}>guests max</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
