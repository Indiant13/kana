import { Header } from "../../src/widgets/header-widget";
import { Footer } from "../../src/widgets/footer-widget";
import { InternalPageLayout } from "../../src/widgets/internal-page-layout";
import { RatingWidget } from "../../src/widgets/rating-widget";
import styles from "../page.module.css";

export default function RatingPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <InternalPageLayout>
          <RatingWidget />
        </InternalPageLayout>
      </main>
      <Footer />
    </div>
  );
}
