import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "KANA SPORT",
  description: "Tennis social tournament platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
