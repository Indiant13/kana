"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuthSession } from "../../processes/auth-session";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "\u041b\u0435\u043d\u0442\u0430", href: "/feed" },
  { label: "\u0422\u0443\u0440\u043d\u0438\u0440\u044b", href: "/tournaments" },
  { label: "\u0420\u0435\u0439\u0442\u0438\u043d\u0433", href: "/rating" },
  { label: "\u041f\u0440\u043e\u0444\u0438\u043b\u044c", href: "/profile" },
];

export function Header() {
  const { isLoggedIn, user, openLogin } = useAuthSession();
  const navItems = isLoggedIn ? NAV_ITEMS.filter((item) => item.href !== "/profile") : NAV_ITEMS;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>KANA SPORT</div>
        <div className={styles.right}>
          <nav className={styles.nav} aria-label="Main navigation">
            {navItems.map((item) => (
              <Link className={styles.link} href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
          {isLoggedIn && user ? (
            <Link className={styles.avatarLink} href="/profile" aria-label={user.name}>
              <Image className={styles.avatar} src={user.avatar} alt={user.name} width={44} height={44} />
            </Link>
          ) : (
            <button className={styles.loginButton} type="button" onClick={openLogin}>
              {"\u0412\u043e\u0439\u0442\u0438"}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
