import Image from "next/image";
import { getVenuesData } from "../model/useVenues";
import styles from "./VenuesBanners.module.css";

export async function VenuesBanners() {
  const venues = await getVenuesData();

  return (
    <section className={styles.grid} aria-label="Competition venues">
      {venues.map((venue, index) => (
        <article className={styles.banner} key={venue.id}>
          <Image
            className={styles.image}
            src={venue.image}
            alt={venue.name}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority={index < 2}
          />
          <div className={styles.overlay}>
            <h2 className={styles.name}>{venue.name}</h2>
          </div>
        </article>
      ))}
    </section>
  );
}
