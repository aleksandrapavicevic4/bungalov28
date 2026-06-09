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
          <p className={styles.eyebrow}>Mesto</p>
          <h2 className={styles.headline}>
            Vaše mesto za beg od svakodnevice
          </h2>
          <p className={styles.body}>
            Ušuškan u prirodnom okruženju, Bungalov28 pruža prostor za predah od svakodnevice.
            Ovde se dani odvijaju sporije, jutra počinju uz miris prirode, a večeri završavaju
            u potpunom miru.
          </p>
          <p className={styles.body}>
            Kreiran za one koji cene privatnost, udobnost i autentičan doživljaj, Bungalov28 
            spaja savremeni komfor sa jednostavnošću boravka u prirodi.
          </p>
          <ul className={styles.stats}>
            <li>
              <span className={styles.statNumber}>280</span>
              <span className={styles.statLabel}>m² stambenog prostora</span>
            </li>
            <li>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>privatne spavaće sobe</span>
            </li>
            <li>
              <span className={styles.statNumber}>8</span>
              <span className={styles.statLabel}>gostiju maksimalno</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
