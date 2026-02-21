import { Header } from "../../src/widgets/header-widget";
import { Footer } from "../../src/widgets/footer-widget";
import { InternalPageLayout } from "../../src/widgets/internal-page-layout";
import styles from "../page.module.css";

export default function RatingPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <InternalPageLayout>
          <section>
            <h1>{"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"}</h1>
          </section>
        </InternalPageLayout>
      </main>
      <Footer />
    </div>
  );
}
