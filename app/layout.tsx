import "./globals.css";
import type { ReactNode } from "react";
import { AuthSessionProvider } from "../src/processes/auth-session";

export const metadata = {
  title: "KANA SPORT",
  description: "Tennis social tournament platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  );
}
