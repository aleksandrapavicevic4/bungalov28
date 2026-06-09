import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  return (
    <section id="contact" className={styles.cta}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Rezervacije i upiti</p>
        <h2 className={styles.headline}>
          Planirате boravak?
        </h2>
        <p className={styles.body}>
          Bungalov28 je dostupan za vikend odmore, duže boravke i
          privatne proslave. Pišite nam — zajedno ćemo dogovoriti sve detalje.
        </p>
        <div className={styles.actions}>
          <a href="mailto:hello@bungalov28.com" className={styles.btnPrimary}>
            Pišite nam
          </a>
          <p className={styles.note}>
            Odgovaramo u roku od 24 sata.
          </p>
        </div>
      </div>
    </section>
  );
}
