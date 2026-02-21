import { getLandingHeroContent } from "../model/getLandingHeroContent";
import styles from "./LandingHero.module.css";

type LandingHeroProps = {
  onRegisterClick?: () => void;
};

export function LandingHero({ onRegisterClick }: LandingHeroProps) {
  const content = getLandingHeroContent();

  return (
    <section className={styles.hero} aria-label="Landing hero">
      <div className={styles.content}>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.subtitle}>{content.subtitle}</p>
        <button className={styles.cta} type="button" onClick={onRegisterClick}>
          {content.ctaLabel}
        </button>
      </div>
    </section>
  );
}
