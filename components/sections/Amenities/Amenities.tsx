"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Amenities.module.css";

// TODO: confirm guest capacity and bedroom count before launch
const quickFacts = [
  { icon: "ti-users", label: "Do 8 gostiju" },
  { icon: "ti-bed", label: "4 spavaće sobe" },
  { icon: "ti-paw", label: "Kućni ljubimci dobrodošli" },
  { icon: "ti-car", label: "Privatni parking" },
];

const highlights = [
  {
    title: "Grejani bazen",
    detail: "32°C — otvorena sezona nikad ne završava",
    icon: "ti-ripple",
    photo:
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=440&h=320&fit=crop&auto=format",
    photoAlt: "Grejani bazen sa bistrom vodom",
  },
  {
    title: "Džakuzi",
    detail: "Grejan, prostran — prima do sedam gostiju",
    icon: "ti-bubble",
    photo:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=440&h=320&fit=crop&auto=format",
    photoAlt: "Spoljni džakuzi sa toplom vodom",
  },
  {
    title: "Kamin",
    detail: "Drva gore dok napolju stiže jesen",
    icon: "ti-flame",
    photo:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=440&h=320&fit=crop&auto=format",
    photoAlt: "Kameni kamin sa otvorenom vatrom",
  },
  {
    title: "Domaća bašta",
    detail: "Svežina direktno s gredice",
    icon: "ti-plant",
    photo:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=440&h=320&fit=crop&auto=format",
    photoAlt: "Domaća bašta sa povrćem",
  },
  {
    title: "Letnjikovac",
    detail: "Hlad i mir, odmah napolju",
    icon: "ti-building-pavilion",
    photo:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=440&h=320&fit=crop&auto=format",
    photoAlt: "Zasenčen letnjikovac okružen zelenilom",
  },
];

export default function Amenities() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-animate]");
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="amenities" className={styles.amenities} ref={sectionRef}>
      {/* ── Section Entry ───────────────────────────────────────── */}
      <div className={styles.entry}>
        <div className={styles.entryInner}>
          <p
            className={`${styles.entryLabel} ${styles.animateFade}`}
            data-animate
          >
            Sadržaji
          </p>
          <h2
            className={`${styles.entryHeadline} ${styles.animate}`}
            data-animate
            style={{ transitionDelay: "200ms" }}
          >
            Sve što vam treba.
            <br />
            Ništa više.
          </h2>
          <p
            className={`${styles.entrySubtext} ${styles.animateFade}`}
            data-animate
            style={{ transitionDelay: "400ms" }}
          >
            Sve na jednom mestu - za odmor koji se pamti.
          </p>
        </div>
      </div>

      {/* ── Signature Highlights ────────────────────────────────── */}
      <div className={styles.strip}>
        <div className={styles.stripInner}>
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`${styles.card} ${styles.animate}`}
              data-animate
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={styles.photoWrap}>
                <Image
                  src={item.photo}
                  alt={item.photoAlt}
                  fill
                  sizes="(max-width: 600px) calc(100vw - 48px), (max-width: 900px) 33vw, 220px"
                  className={styles.amenityPhoto}
                />
              </div>
              <div className={styles.cardBody}>
                <i
                  className={`ti ${item.icon} ${styles.cardIcon}`}
                  aria-hidden="true"
                />
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDetail}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Quick-facts bar ─────────────────────────────────────── */}
      <div className={styles.facts}>
        <div className={`${styles.factsInner} ${styles.animate}`} data-animate>
          {quickFacts.map((fact) => (
            <div key={fact.label} className={styles.factItem}>
              <i
                className={`ti ${fact.icon} ${styles.factIcon}`}
                aria-hidden="true"
              />
              <span className={styles.factLabel}>{fact.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── In-Villa Essentials ──────────────────────────────────── */}
      <div className={styles.essentials}>
        <div
          className={`${styles.essentialsInner} ${styles.animateFade}`}
          data-animate
        >
          <p className={styles.zoneLabel}>U vili</p>
          <h2 className={styles.essentialsHeadline}>Sve na svom mestu.</h2>
          <div className={styles.essentialsDivider} aria-hidden="true" />
          <div className={styles.essentialsList}>
            <ul className={styles.essentialsCol}>
              <li>Besplatan WiFi</li>
              <li>Peškiri i papuče</li>
              <li>Fen za kosu</li>
              <li>Klima uređaj</li>
              <li>Podno grejanje</li>
            </ul>
            <ul className={styles.essentialsColRight}>
              <li>Privatni parking</li>
              <li>Video nadzor</li>
              <li>Kamin</li>
              <li>Veš mašina i sušilica</li>
              <li>Pomoćni objekat sa kupatilom</li>
            </ul>
          </div>
          <div className={styles.essentialsDivider} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
