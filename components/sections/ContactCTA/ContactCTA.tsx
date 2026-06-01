import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  return (
    <section id="contact" className={styles.cta}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Reserve Your Stay</p>
        <h2 className={styles.headline}>
          Ready to Arrive?
        </h2>
        <p className={styles.body}>
          Bungalov28 is available for weekend escapes, week-long retreats, and
          private celebrations. Reach out to check availability and discuss
          your stay.
        </p>
        <div className={styles.actions}>
          <a href="mailto:hello@bungalov28.com" className={styles.btnPrimary}>
            Get in Touch
          </a>
          <p className={styles.note}>
            We typically respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
