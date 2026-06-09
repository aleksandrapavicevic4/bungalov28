import styles from "./Pricing.module.css";

// ─── Data ─────────────────────────────────────────────────────────────────────
// All prices are placeholders. Replace the values below to update pricing.

const packages = [
  {
    title: "Day Stay",
    description: "Perfect for pool days, birthdays, and relaxed gatherings.",
    from: "€300",
    includes: ["11 AM – 10 PM", "Up to 10 guests", "Pool access"],
  },
  {
    title: "Overnight Stay",
    description: "For a private villa experience with full comfort.",
    from: "€250",
    includes: ["Overnight stay", "Up to 8 guests", "Pool access"],
    featured: true,
  },
  {
    title: "Private Events",
    description: "For celebrations, bachelorette parties, and special occasions.",
    from: "€500",
    includes: ["Custom setup", "Prior approval required", "Flexible guest options"],
  },
];

const seasonalTable = [
  {
    season: "Low Season",
    rows: [
      { label: "Day Stay", price: "€300" },
      { label: "Overnight · up to 4 guests", price: "€250" },
      { label: "Overnight · up to 8 guests", price: "€300" },
    ],
  },
  {
    season: "High Season",
    rows: [
      { label: "Day Stay", price: "€400" },
      { label: "Overnight · up to 4 guests", price: "€350" },
      { label: "Overnight · up to 8 guests", price: "€400" },
    ],
  },
  {
    season: "Events",
    rows: [
      { label: "Private celebration", price: "from €500" },
      { label: "Bachelorette party", price: "from €550" },
      { label: "Larger gatherings", price: "on request" },
    ],
  },
];

const disclaimer =
  "Final prices may vary depending on season, number of guests, and selected extras.";

// ─── Component ────────────────────────────────────────────────────────────────

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Transparent Pricing</p>
          <h2 className={styles.headline}>Pricing</h2>
          <p className={styles.subtitle}>Choose the stay option that fits your plans.</p>
        </div>

        {/* Package cards */}
        <div className={styles.cards}>
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`${styles.card} ${pkg.featured ? styles.cardFeatured : ""}`}
            >
              {pkg.featured && (
                <span className={styles.featuredBadge}>Most Popular</span>
              )}
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                <p className={styles.cardDescription}>{pkg.description}</p>
              </div>
              <div className={styles.cardPrice}>
                <span className={styles.from}>from</span>
                <span className={styles.amount}>{pkg.from}</span>
              </div>
              <ul className={styles.cardIncludes}>
                {pkg.includes.map((item) => (
                  <li key={item} className={styles.includeItem}>
                    <span className={styles.includeMark} aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={styles.cardCta}>
                Inquire
              </a>
            </div>
          ))}
        </div>

        {/* Seasonal table */}
        <div className={styles.tableWrapper}>
          <h3 className={styles.tableHeading}>Seasonal Rates</h3>
          <div className={styles.tableGrid}>
            {seasonalTable.map((group) => (
              <div key={group.season} className={styles.tableGroup}>
                <p className={styles.tableGroupTitle}>{group.season}</p>
                <ul className={styles.tableRows}>
                  {group.rows.map((row) => (
                    <li key={row.label} className={styles.tableRow}>
                      <span className={styles.tableLabel}>{row.label}</span>
                      <span className={styles.tablePrice}>{row.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className={styles.disclaimer}>* {disclaimer}</p>
        </div>

      </div>
    </section>
  );
}
