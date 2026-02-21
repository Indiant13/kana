import { getSocialsContent } from "../model/getSocialsContent";
import styles from "./SocialsBlock.module.css";

export function SocialsBlock() {
  const content = getSocialsContent();

  return (
    <section className={styles.section} aria-label="Social media links">
      <p className={styles.title}>{content.title}</p>
      <div className={styles.buttons}>
        {content.items.map((item) => (
          <a
            className={`${styles.button} ${item.id === "vk" ? styles.vk : styles.telegram}`}
            href={item.href}
            key={item.id}
            target="_blank"
            rel="noreferrer"
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
