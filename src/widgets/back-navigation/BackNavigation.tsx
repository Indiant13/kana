"use client";

import { useRouter } from "next/navigation";
import styles from "./BackNavigation.module.css";

export function BackNavigation() {
  const router = useRouter();
  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  };

  return (
    <button className={styles.button} type="button" onClick={handleBack}>
      {"\u2190 \u041d\u0430\u0437\u0430\u0434"}
    </button>
  );
}
