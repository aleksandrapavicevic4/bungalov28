"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in starts at 3:00 PM and check-out is until 11:00 AM. Early check-in and late check-out may be available upon request — please let us know in advance.",
  },
  {
    question: "How many guests can stay?",
    answer:
      "The property accommodates up to 8 guests unless otherwise agreed in writing. Day visitors must be disclosed at the time of booking.",
  },
  {
    question: "Are events or celebrations allowed?",
    answer:
      "Events and gatherings may be possible with prior approval. Please reach out before booking so we can ensure a seamless experience for everyone.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "Pets are welcome upon request. Please inform us ahead of time so we can make the necessary arrangements.",
  },
  {
    question: "Are there any quiet hours?",
    answer:
      "Please respect the surrounding area and neighbours. Quiet hours are observed between 11:00 PM and 8:00 AM. Outdoor music should remain at a moderate level at all times.",
  },
  {
    question: "Is smoking allowed?",
    answer:
      "Smoking is not permitted inside the property. Designated outdoor areas are available for smokers.",
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
          <p className={styles.eyebrow}>Before Your Stay</p>
          <h2 className={styles.headline}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>Everything you need to know before your stay.</p>
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
