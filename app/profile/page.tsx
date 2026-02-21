import { Header } from "../../src/widgets/header-widget";
import { Footer } from "../../src/widgets/footer-widget";
import { InternalPageLayout } from "../../src/widgets/internal-page-layout";
import { LogoutWidget } from "../../src/widgets/logout-widget";
import styles from "../page.module.css";

export default function ProfilePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <InternalPageLayout>
          <section>
            <h1>{"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}</h1>
            <LogoutWidget />
          </section>
        </InternalPageLayout>
      </main>
      <Footer />
    </div>
  );
}
