import Link from "next/link";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "\u041b\u0435\u043d\u0442\u0430", href: "/feed" },
  { label: "\u0422\u0443\u0440\u043d\u0438\u0440\u044b", href: "/tournaments" },
  { label: "\u0420\u0435\u0439\u0442\u0438\u043d\u0433", href: "/rating" },
  { label: "\u041f\u0440\u043e\u0444\u0438\u043b\u044c", href: "/profile" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>KANA SPORT</div>
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link className={styles.link} href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
