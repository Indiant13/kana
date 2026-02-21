import Image from "next/image";
import { getTournamentsGridData } from "../model/useTournaments";
import styles from "./TournamentsGrid.module.css";

export async function TournamentsGrid() {
  const tournaments = await getTournamentsGridData();

  return (
    <section className={styles.grid} aria-label="Tournaments grid">
      {tournaments.map((tournament) => (
        <article
          className={`${styles.card} ${tournament.isPast ? styles.past : styles.upcoming}`}
          key={tournament.id}
        >
          <div className={styles.imageWrap}>
            <Image className={styles.image} src={tournament.image} alt={tournament.title} fill sizes="33vw" />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{tournament.title}</h2>
            <p className={styles.date}>{tournament.date}</p>
            <p className={styles.description}>{tournament.description}</p>
            <span className={styles.levelBadge}>{tournament.level}</span>
          </div>
        </article>
      ))}
    </section>
  );
}
