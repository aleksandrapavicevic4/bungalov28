import styles from "./HouseRules.module.css";

const rules = [
  {
    category: "Prijava i odjava",
    items: [
      "Prijava od 15:00 — kasnija prijava dostupna na zahtev",
      "Odjava do 11:00",
      "Ranija prijava ili kasnija odjava u zavisnosti od dostupnosti",
    ],
  },
  {
    category: "Gosti i broj osoba",
    items: [
      "Maksimalno 8 gostiju, osim ako nije drugačije pisano dogovoreno",
      "Dnevne posete moraju biti najavljene prilikom rezervacije",
      "Događaji ili okupljanja zahtevaju prethodno odobrenje",
    ],
  },
  {
    category: "Objekat",
    items: [
      "Zabranjeno pušenje u prostoru — obezbeđen je prostor napolju",
      "Kućni ljubimci dobrodošli uz prethodnu najavu (samo male rase)",
      "Molimo vas da pažljivo postupate sa prostorom i njegovim sadržajem",
    ],
  },
  {
    category: "Buka i komšije",
    items: [
      "Tihi sati od 23:00 do 08:00",
      "Muzika na otvorenom samo na umerenoj jačini",
      "Molimo vas da poštujete mir okoline",
    ],
  },
];

export default function HouseRules() {
  return (
    <section id="rules" className={styles.rules}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Pre nego što dođete</p>
          <h2 className={styles.headline}>Kućni red</h2>
          <p className={styles.intro}>
            Nekoliko jednostavnih pravila kako bi ovo mesto ostalo posebno
            i za sledeće goste, baš kao što će biti i za vas.
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
