"use client";

import { useLogout } from "../model/useLogout";
import styles from "./LogoutButton.module.css";

export function LogoutButton() {
  const { handleLogout } = useLogout();

  return (
    <button className={styles.button} type="button" onClick={handleLogout}>
      {"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"}
    </button>
  );
}
