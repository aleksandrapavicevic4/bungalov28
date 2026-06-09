"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "Kada je prijava i odjava?",
    answer:
      "Prijava je od 15:00, odjava do 11:00. Ranija prijava ili kasnija odjava mogući su na zahtev — samo nas unapred obavestite.",
  },
  {
    question: "Koliko gostiju može da boravi?",
    answer:
      "Vila prima do 8 gostiju, osim ako nije drugačije dogovoreno. Dnevne posete potrebno je najaviti pri rezervaciji.",
  },
  {
    question: "Da li su moguće proslave i privatni događaji?",
    answer:
      "Da, uz prethodni dogovor. Javite nam se pre rezervacije kako bismo sve isplanirali zajedno.",
  },
  {
    question: "Da li su kućni ljubimci dobrodošli?",
    answer:
      "Kućni ljubimci su dobrodošli — samo nas unapred obavestite kako bismo se pripremili.",
  },
  {
    question: "Da li postoje tihi sati?",
    answer:
      "Tihi sati su od 23:00 do 08:00. Molimo vas da poštujete mir okoline — muzika napolju treba biti na umerenoj jačini tokom celog boravka.",
  },
  {
    question: "Da li je pušenje dozvoljeno?",
    answer:
      "Pušenje nije dozvoljeno u zatvorenom prostoru. Napolju su dostupni odgovarajući prostori.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Pre vašeg dolaska</p>
          <h2 className={styles.headline}>Česta pitanja</h2>
          <p className={styles.subtitle}>Sve što treba da znate pre dolaska.</p>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
                <button
                  className={styles.trigger}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.question}>{faq.question}</span>
                  <span className={styles.icon} aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="8"
                        y1="1"
                        x2="8"
                        y2="15"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        className={styles.iconVertical}
                      />
                      <line
                        x1="1"
                        y1="8"
                        x2="15"
                        y2="8"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.body} aria-hidden={!isOpen}>
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
