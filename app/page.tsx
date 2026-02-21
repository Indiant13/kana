import { Header } from "../src/widgets/header-widget";
import { LandingHeroWidget } from "../src/widgets/landing-hero-widget";
import { PlayersGridWidget } from "../src/widgets/players-grid-widget";
import { Footer } from "../src/widgets/footer-widget";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <LandingHeroWidget />
        <PlayersGridWidget />
      </main>
      <Footer />
    </div>
  );
}
