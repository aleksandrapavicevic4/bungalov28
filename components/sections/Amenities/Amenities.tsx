import styles from "./Amenities.module.css";

const amenities = [
  {
    icon: "○",
    title: "Heated Pool",
    description: "Private outdoor pool available year-round, heated to your preference.",
  },
  {
    icon: "◇",
    title: "Wood-Fired Sauna",
    description: "Traditional Finnish sauna steps from the pool, built from aged pine.",
  },
  {
    icon: "△",
    title: "Fully Equipped Kitchen",
    description: "Professional-grade appliances, espresso machine, and pantry staples.",
  },
  {
    icon: "□",
    title: "Outdoor Dining",
    description: "Covered terrace with a long table — made for long summer evenings.",
  },
  {
    icon: "⬡",
    title: "High-Speed Wi-Fi",
    description: "Gigabit connection throughout, for those who must stay connected.",
  },
  {
    icon: "◉",
    title: "Fire Pit Lounge",
    description: "Sunken fire pit surrounded by natural stone seating and soft lighting.",
  },
  {
    icon: "◈",
    title: "Premium Bedding",
    description: "Hotel-grade linens, blackout curtains, and climate control in every room.",
  },
  {
    icon: "◫",
    title: "Secure Parking",
    description: "Private gated parking for up to four vehicles.",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className={styles.amenities}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>The Experience</p>
          <h2 className={styles.headline}>Everything You Need,<br />Nothing Superfluous</h2>
          <p className={styles.intro}>
            Bungalov28 is outfitted with every comfort that makes a stay feel
            genuinely effortless — without the noise of things you never asked for.
          </p>
        </div>

        <ul className={styles.grid}>
          {amenities.map((item) => (
            <li key={item.title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">{item.icon}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
