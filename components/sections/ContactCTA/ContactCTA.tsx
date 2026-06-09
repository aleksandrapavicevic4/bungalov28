import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  return (
    <section id="contact" className={styles.cta}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Rezerviši boravak</p>
        <h2 className={styles.headline}>
          Spremni za dolazak?
        </h2>
        <p className={styles.body}>
          Bungalov28 je dostupan za vikend predahe, nedeljne boravke i
          privatne proslave. Javite se kako biste proverili dostupnost
          i dogovorili detalje vašeg boravka.
        </p>
        <div className={styles.actions}>
          <a href="mailto:hello@bungalov28.com" className={styles.btnPrimary}>
            Kontaktirajte nas
          </a>
          <p className={styles.note}>
            Obično odgovaramo u roku od 24 sata.
          </p>
        </div>
      </div>
    </section>
  );
}
