import styles from "./Header.module.css";

const NAV_ITEMS = [
  "\u041b\u0435\u043d\u0442\u0430",
  "\u0422\u0443\u0440\u043d\u0438\u0440\u044b",
  "\u0420\u0435\u0439\u0442\u0438\u043d\u0433",
  "\u041f\u0440\u043e\u0444\u0438\u043b\u044c",
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>KANA SPORT</div>
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a className={styles.link} href="#" key={item}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
