import type { ReactNode } from "react";
import { BackNavigation } from "../back-navigation";
import styles from "./InternalPageLayout.module.css";

type InternalPageLayoutProps = {
  children: ReactNode;
};

export function InternalPageLayout({ children }: InternalPageLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <BackNavigation />
      {children}
    </div>
  );
}
