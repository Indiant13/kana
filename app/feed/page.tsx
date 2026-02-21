import { Header } from "../../src/widgets/header-widget";
import { FeedWidget } from "../../src/widgets/feed-widget";
import { Footer } from "../../src/widgets/footer-widget";
import { InternalPageLayout } from "../../src/widgets/internal-page-layout";
import styles from "../page.module.css";

export default function FeedPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <InternalPageLayout>
          <FeedWidget />
        </InternalPageLayout>
      </main>
      <Footer />
    </div>
  );
}
