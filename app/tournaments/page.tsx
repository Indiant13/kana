import { Header } from "../../src/widgets/header-widget";
import { Footer } from "../../src/widgets/footer-widget";
import { InternalPageLayout } from "../../src/widgets/internal-page-layout";
import { TournamentsWidget } from "../../src/widgets/tournaments-widget";
import styles from "../page.module.css";

export default function TournamentsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <InternalPageLayout>
          <TournamentsWidget />
        </InternalPageLayout>
      </main>
      <Footer />
    </div>
  );
}
