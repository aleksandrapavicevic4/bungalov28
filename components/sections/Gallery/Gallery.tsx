import styles from "./Gallery.module.css";

const tiles = [
  { id: 1, span: "wide", label: "Living & Dining" },
  { id: 2, span: "tall", label: "Master Bedroom" },
  { id: 3, span: "default", label: "Outdoor Pool" },
  { id: 4, span: "default", label: "Sauna" },
  { id: 5, span: "wide", label: "Terrace at Dusk" },
  { id: 6, span: "default", label: "Kitchen" },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>The Space</p>
        <h2 className={styles.headline}>A Glimpse Inside</h2>
      </div>

      <div className={styles.grid}>
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className={`${styles.tile} ${styles[tile.span]}`}
            role="img"
            aria-label={tile.label}
          >
            <div className={styles.tilePlaceholder} />
            <span className={styles.tileLabel}>{tile.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaNote}>Full photo gallery coming soon.</p>
      </div>
    </section>
  );
}
