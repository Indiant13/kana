"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getUpcomingTournamentsData, type UpcomingTournamentItem } from "../model/useUpcomingTournaments";
import styles from "./UpcomingTournamentsGrid.module.css";

export function UpcomingTournamentsGrid() {
  const [tournaments, setTournaments] = useState<UpcomingTournamentItem[]>([]);

  useEffect(() => {
    let isMounted = true;

    getUpcomingTournamentsData().then((items) => {
      if (isMounted) {
        setTournaments(items);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className={styles.section} aria-label="Upcoming tournaments">
      <h2 className={styles.heading}>{"\u0411\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0442\u0443\u0440\u043d\u0438\u0440\u044b"}</h2>
      <div className={styles.grid}>
        {tournaments.map((tournament) => (
          <article className={styles.card} key={tournament.id}>
            <Image className={styles.image} src={tournament.image} alt={tournament.title} fill sizes="33vw" />
            <div className={styles.overlay} />
            <button className={styles.register} type="button">
              {"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}
            </button>
            <div className={styles.content}>
              <h3 className={styles.title}>{tournament.title}</h3>
              <p className={styles.meta}>{tournament.date}</p>
              <p className={styles.meta}>{tournament.level}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
