"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

type Category = "Eksterijer" | "Enterijer" | "Bazen" | "Sobe" | "Detalji";

interface Tile {
  id: number;
  label: string;
  src: string;
}

// Fixed positions for each layout count.
// 3-column grid (col indices 1–4), row indices 1–4.
const POSITIONS: Record<number, Array<{ col: string; row: string }>> = {
  2: [
    { col: "1 / 2", row: "1 / 2" },
    { col: "2 / 3", row: "1 / 2" },
  ],
  3: [
    { col: "1 / 3", row: "1 / 3" }, // large left feature
    { col: "3 / 4", row: "1 / 2" }, // small right top
    { col: "3 / 4", row: "2 / 3" }, // small right bottom
  ],
  4: [
    { col: "1 / 3", row: "1 / 3" }, // large left feature
    { col: "3 / 4", row: "1 / 2" }, // small right top
    { col: "3 / 4", row: "2 / 3" }, // small right bottom
    { col: "1 / 4", row: "3 / 4" }, // wide bottom
  ],
  5: [
    { col: "1 / 3", row: "1 / 3" }, // large left feature
    { col: "3 / 4", row: "1 / 2" }, // small right top
    { col: "3 / 4", row: "2 / 3" }, // small right bottom
    { col: "1 / 2", row: "3 / 4" }, // bottom left
    { col: "2 / 4", row: "3 / 4" }, // bottom right (wider)
  ],
};

const categoryData: Record<Category, Tile[]> = {
  Eksterijer: [
    {
      id: 101,
      label: "Eksterijer vile",
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&q=80",
    },
    {
      id: 102,
      label: "Terasa",
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      id: 103,
      label: "Ulaz u baštu",
      src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    },
    {
      id: 104,
      label: "Fasada vile",
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
    },
    {
      id: 105,
      label: "Večernje svetlo",
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1400&q=80",
    },
  ],
  Enterijer: [
    {
      id: 201,
      label: "Dnevna soba",
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=80",
    },
    {
      id: 202,
      label: "Trpezarija",
      src: "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&q=80",
    },
    {
      id: 203,
      label: "Kuhinja",
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    },
    {
      id: 204,
      label: "Prostor za odmor",
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80",
    },
  ],
  Bazen: [
    {
      id: 301,
      label: "Infinity bazen",
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&q=80",
    },
    {
      id: 302,
      label: "Terasa uz bazen",
      src: "https://images.unsplash.com/photo-1540541338537-71cf16ef32c9?w=800&q=80",
    },
    {
      id: 303,
      label: "Bazen u zalasku sunca",
      src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
    },
    {
      id: 304,
      label: "Jutarnje plivanje",
      src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1400&q=80",
    },
  ],
  Sobe: [
    {
      id: 401,
      label: "Glavna soba",
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&q=80",
    },
    {
      id: 402,
      label: "Gostinska soba",
      src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    },
    {
      id: 403,
      label: "Kupatilo",
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    },
    {
      id: 404,
      label: "Detalj spavaće sobe",
      src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1400&q=80",
    },
  ],
  Detalji: [
    {
      id: 501,
      label: "Tekstura i svetlo",
      src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80",
    },
    {
      id: 502,
      label: "Staza u bašti",
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    },
    {
      id: 503,
      label: "Svetlo sveće",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    },
  ],
};

const CATEGORIES = Object.keys(categoryData) as Category[];

export default function Gallery() {
  const [active, setActive] = useState<Category>("Eksterijer");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);

  const tiles = categoryData[active];
  const count = tiles.length;
  const positions = POSITIONS[count] ?? POSITIONS[5];
  const isTwoCol = count === 2;

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIdx]);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (lightboxIdx === null) return;
      setLightboxIdx((lightboxIdx + dir + count) % count);
    },
    [lightboxIdx, count]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeLightbox, navigate]);

  const handleFilter = (cat: Category) => {
    if (cat === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(cat);
      setVisible(true);
    }, 220);
  };

  const lightboxTile = lightboxIdx !== null ? tiles[lightboxIdx] : null;

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Prostor</p>
        <h2 className={styles.headline}>Pogled iznutra</h2>
      </div>

      <div className={styles.filters}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ""}`}
            onClick={() => handleFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        className={`${styles.grid} ${isTwoCol ? styles.gridTwoCol : styles.gridThreeCol} ${
          visible ? styles.gridVisible : styles.gridHidden
        }`}
      >
        {tiles.map((tile, i) => {
          const pos = positions[i];
          return (
            <button
              key={tile.id}
              className={styles.tile}
              style={{ gridColumn: pos.col, gridRow: pos.row }}
              onClick={() => setLightboxIdx(i)}
              aria-label={`Otvori ${tile.label}`}
            >
              <Image
                src={tile.src}
                alt={tile.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.tileImg}
              />
              <div className={styles.tileOverlay} />
              <span className={styles.tileLabel}>{tile.label}</span>
            </button>
          );
        })}
      </div>

      {lightboxTile && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button className={styles.lbClose} onClick={closeLightbox} aria-label="Zatvori">
            &#215;
          </button>
          <button
            className={`${styles.lbNav} ${styles.lbPrev}`}
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            aria-label="Prethodno"
          >
            &#8592;
          </button>
          <div className={styles.lbInner} onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxTile.src}
              alt={lightboxTile.label}
              fill
              sizes="100vw"
              className={styles.lbImg}
              priority
            />
            <p className={styles.lbCaption}>{lightboxTile.label}</p>
          </div>
          <button
            className={`${styles.lbNav} ${styles.lbNext}`}
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            aria-label="Sledeće"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
}
