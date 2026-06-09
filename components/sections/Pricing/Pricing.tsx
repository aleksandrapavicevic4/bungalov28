import styles from "./Pricing.module.css";

// ─── Data ─────────────────────────────────────────────────────────────────────
// All prices are placeholders. Replace the values below to update pricing.

const packages = [
  {
    title: "Dnevni boravak",
    description: "Dan uz bazen, uz prijatelje ili porodicu — bez noćenja.",
    from: "€300",
    includes: ["11:00 – 22:00", "Do 10 gostiju", "Bazen i džakuzi"],
  },
  {
    title: "Noćenje",
    description: "Cela vila za vas — od dolaska do sutrašnjeg jutra.",
    from: "€250",
    includes: ["Noćenje", "Do 8 gostiju", "Bazen i džakuzi"],
    featured: true,
  },
  {
    title: "Privatna proslava",
    description: "Рођendan, devojačka večer ili posebna prilika — po dogovoru.",
    from: "€500",
    includes: ["Prilagođeno vašim potrebama", "Uz prethodni dogovor", "Fleksibilan broj gostiju"],
  },
];

const seasonalTable = [
  {
    season: "Niska sezona",
    rows: [
      { label: "Dnevni boravak", price: "€300" },
      { label: "Noćenje · do 4 gosta", price: "€250" },
      { label: "Noćenje · do 8 gostiju", price: "€300" },
    ],
  },
  {
    season: "Visoka sezona",
    rows: [
      { label: "Dnevni boravak", price: "€400" },
      { label: "Noćenje · do 4 gosta", price: "€350" },
      { label: "Noćenje · do 8 gostiju", price: "€400" },
    ],
  },
  {
    season: "Događaji",
    rows: [
      { label: "Privatna proslava", price: "od €500" },
      { label: "Devojačka večer", price: "od €550" },
      { label: "Veća okupljanja", price: "na upit" },
    ],
  },
];

const disclaimer =
  "Konačne cene mogu varirati u zavisnosti od sezone, broja gostiju i izabranih dodatnih usluga.";

// ─── Component ────────────────────────────────────────────────────────────────

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Cene</p>
          <h2 className={styles.headline}>Cenovnik</h2>
          <p className={styles.subtitle}>Izaberite opciju koja odgovara vašim planovima.</p>
        </div>

        {/* Package cards */}
        <div className={styles.cards}>
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`${styles.card} ${pkg.featured ? styles.cardFeatured : ""}`}
            >
              {pkg.featured && (
                <span className={styles.featuredBadge}>Najpopularnije</span>
              )}
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                <p className={styles.cardDescription}>{pkg.description}</p>
              </div>
              <div className={styles.cardPrice}>
                <span className={styles.from}>od</span>
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
                Upit
              </a>
            </div>
          ))}
        </div>

        {/* Seasonal table */}
        <div className={styles.tableWrapper}>
          <h3 className={styles.tableHeading}>Sezonske cene</h3>
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
