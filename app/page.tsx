import { Header } from "../src/widgets/header-widget";
import { LandingAuthContentWidget } from "../src/widgets/landing-auth-content-widget";
import { VenuesWidget } from "../src/widgets/venues-widget";
import { SocialsWidget } from "../src/widgets/socials-widget";
import { PlayersGridWidget } from "../src/widgets/players-grid-widget";
import { Footer } from "../src/widgets/footer-widget";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <LandingAuthContentWidget />
        <VenuesWidget />
        <SocialsWidget />
        <PlayersGridWidget />
      </main>
      <Footer />
    </div>
  );
}
