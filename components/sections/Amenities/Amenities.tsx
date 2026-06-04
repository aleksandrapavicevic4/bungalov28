'use client';

import { useEffect, useRef } from 'react';
import styles from './Amenities.module.css';

const wellnessCards = [
  {
    title: 'Heated Pool',
    desc: '32°C, year-round swimming in complete privacy',
    icon: 'ti-ripple',
  },
  {
    title: 'Turbo Jet Swim',
    desc: 'Swim against a current without leaving the pool',
    icon: 'ti-wave-sine',
  },
  {
    title: 'Jacuzzi',
    desc: 'Heated and spacious — seats up to 7 guests',
    icon: 'ti-bubble',
  },
  {
    title: 'Sun Loungers',
    desc: 'Positioned for the afternoon light',
    icon: 'ti-sun',
  },
];

const groundsCards = [
  {
    title: 'Private Yard',
    desc: 'Spacious, fully enclosed outdoor space',
    icon: 'ti-trees',
  },
  {
    title: 'Outdoor Gazebo',
    desc: 'Shaded dining and lounging',
    icon: 'ti-building-pavilion',
  },
  {
    title: 'Kitchen Garden',
    desc: 'Vegetables actually from the garden',
    icon: 'ti-plant',
  },
];

const highlights = [
  {
    title: 'Heated Pool',
    detail: '32°C, all year round',
    icon: 'ti-ripple',
    photo:
      'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=440&h=320&fit=crop&auto=format',
    photoAlt: 'Heated outdoor pool with clear blue water',
  },
  {
    title: 'Jacuzzi',
    detail: 'Seats up to 7 guests',
    icon: 'ti-bubble',
    photo:
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=440&h=320&fit=crop&auto=format',
    photoAlt: 'Outdoor jacuzzi with bubbling water',
  },
  {
    title: 'Fireplace',
    detail: 'Wood-burning, indoors',
    icon: 'ti-flame',
    photo:
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=440&h=320&fit=crop&auto=format',
    photoAlt: 'Stone fireplace with warm glowing fire',
  },
  {
    title: 'Kitchen Garden',
    detail: 'Homegrown produce',
    icon: 'ti-plant',
    photo:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=440&h=320&fit=crop&auto=format',
    photoAlt: 'Kitchen garden with raised vegetable beds',
  },
  {
    title: 'Outdoor Gazebo',
    detail: 'Shaded & private',
    icon: 'ti-building-pavilion',
    photo:
      'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=440&h=320&fit=crop&auto=format',
    photoAlt: 'Shaded outdoor gazebo surrounded by garden',
  },
];

export default function Amenities() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>(
      '[data-animate]'
    );
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
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="amenities" className={styles.amenities} ref={sectionRef}>

      {/* ── Layer 1: Section Entry ───────────────────────────────── */}
      <div className={styles.entry}>
        <div className={styles.entryInner}>
          <p
            className={`${styles.entryLabel} ${styles.animateFade}`}
            data-animate
          >
            Experience
          </p>
          <h2
            className={`${styles.entryHeadline} ${styles.animate}`}
            data-animate
            style={{ transitionDelay: '200ms' }}
          >
            Everything you need.<br />Nothing you don&apos;t.
          </h2>
          <p
            className={`${styles.entrySubtext} ${styles.animateFade}`}
            data-animate
            style={{ transitionDelay: '400ms' }}
          >
            Bungalov28 is designed for rest, play, and everything in between.
          </p>
        </div>
      </div>

      {/* ── Layer 2: Signature Highlights Strip ─────────────────── */}
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
                <img
                  src={item.photo}
                  alt={item.photoAlt}
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

      {/* ── Layer 3A: Wellness Zone ──────────────────────────────── */}
      <div className={styles.wellness}>
        <div className={styles.wellnessInner}>

          {/* Left — text column */}
          <div
            className={`${styles.wellnessText} ${styles.animateLeft}`}
            data-animate
          >
            <p className={styles.zoneLabel}>Wellness</p>
            <h2 className={styles.zoneHeadline}>Your private retreat.</h2>
            <div className={styles.goldDivider} aria-hidden="true" />
            <p className={styles.zoneBody}>
              The pool stays warm at 32°C through every season. The turbo jet
              system lets you swim against a current. The jacuzzi holds seven.
              And the sun loungers are always in the right spot.
            </p>
          </div>

          {/* Right — 2×2 card grid */}
          <div className={styles.wellnessCards}>
            {wellnessCards.map((item, i) => (
              <div
                key={item.title}
                className={`${styles.wellnessCard} ${styles.animateRight}`}
                data-animate
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <i
                  className={`ti ${item.icon} ${styles.wellnessCardIcon}`}
                  aria-hidden="true"
                />
                <h3 className={styles.wellnessCardTitle}>{item.title}</h3>
                <p className={styles.wellnessCardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Layer 3B: The Grounds Zone ───────────────────────────── */}
      <div className={styles.grounds}>
        <div className={styles.groundsInner}>

          {/* Left — cards column */}
          <div className={styles.groundsCards}>

            {/* Row 1: three equal cards, staggered left */}
            <div className={styles.groundsRow}>
              {groundsCards.map((item, i) => (
                <div
                  key={item.title}
                  className={`${styles.groundsCard} ${styles.animateLeft}`}
                  data-animate
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <i
                    className={`ti ${item.icon} ${styles.groundsCardIcon}`}
                    aria-hidden="true"
                  />
                  <h3 className={styles.groundsCardTitle}>{item.title}</h3>
                  <p className={styles.groundsCardDesc}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Row 2: eco card */}
            <div
              className={`${styles.ecoCard} ${styles.animateFade}`}
              data-animate
              style={{ transitionDelay: '240ms' }}
            >
              <div className={styles.ecoCardHeader}>
                <i
                  className={`ti ti-solar-panel ${styles.ecoCardIcon}`}
                  aria-hidden="true"
                />
                <span className={styles.ecoBadge}>Eco</span>
              </div>
              <h3 className={styles.ecoCardTitle}>
                Solar panels &amp; eco-friendly design
              </h3>
              <p className={styles.ecoCardBody}>
                Bungalov28 runs partly on solar energy. Comfort without compromise.
              </p>
            </div>

            {/* Row 3: utility row — understated, not a card */}
            <div
              className={`${styles.utilityRow} ${styles.animateFade}`}
              data-animate
              style={{ transitionDelay: '320ms' }}
            >
              <i
                className={`ti ti-home ${styles.utilityIcon}`}
                aria-hidden="true"
              />
              <span className={styles.utilityText}>
                Outdoor utility house&ensp;·&ensp;Extra bathroom&ensp;·&ensp;Washing machine&ensp;·&ensp;Dryer
              </span>
            </div>

          </div>

          {/* Right — text column */}
          <div
            className={`${styles.groundsText} ${styles.animateRight}`}
            data-animate
          >
            <p className={styles.zoneLabel}>The Grounds</p>
            <h2 className={styles.zoneHeadline}>Space to breathe.</h2>
            <div className={styles.goldDivider} aria-hidden="true" />
            <p className={styles.zoneBody}>
              A spacious private yard, a shaded gazebo, and a kitchen garden
              where the tomatoes are actually from the garden. Solar panels run
              quietly in the background.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
