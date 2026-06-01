import styles from "./HouseRules.module.css";

const rules = [
  {
    category: "Check-in & Check-out",
    items: [
      "Check-in from 15:00 — late check-in available on request",
      "Check-out by 11:00",
      "Early check-in or late check-out subject to availability",
    ],
  },
  {
    category: "Guests & Occupancy",
    items: [
      "Maximum 8 guests unless otherwise agreed in writing",
      "Day visitors must be declared at the time of booking",
      "Events or gatherings require prior approval",
    ],
  },
  {
    category: "The Property",
    items: [
      "No smoking indoors — designated outdoor area provided",
      "Pets welcome with prior notice (small breeds only)",
      "Please treat the space and its contents with care",
    ],
  },
  {
    category: "Noise & Neighbours",
    items: [
      "Quiet hours from 23:00 to 08:00",
      "Outdoor music at responsible volumes only",
      "We ask that you respect the peace of the surroundings",
    ],
  },
];

export default function HouseRules() {
  return (
    <section id="rules" className={styles.rules}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Before You Arrive</p>
          <h2 className={styles.headline}>House Rules</h2>
          <p className={styles.intro}>
            A few simple things to keep this place as special for the next
            guests as it will be for you.
          </p>
        </div>

        <div className={styles.categories}>
          {rules.map((group) => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.category}</h3>
              <ul className={styles.list}>
                {group.items.map((rule) => (
                  <li key={rule} className={styles.item}>
                    <span className={styles.bullet} aria-hidden="true">—</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
