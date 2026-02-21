import Image from "next/image";
import { getFeedData } from "../model/useFeed";
import styles from "./FeedList.module.css";

export async function FeedList() {
  const feedItems = await getFeedData();

  return (
    <section className={styles.section} aria-label="Sochi tennis activity feed">
      {feedItems.map((item) => (
        <article className={styles.item} key={item.id}>
          <Image className={styles.image} src={item.image} alt={item.title} width={96} height={96} />
          <div className={styles.content}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.date}>{item.date}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
