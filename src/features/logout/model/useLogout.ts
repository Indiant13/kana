"use client";

import { useRouter } from "next/navigation";
import { useAuthSession } from "../../../processes/auth-session";

export function useLogout() {
  const router = useRouter();
  const { logout } = useAuthSession();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return { handleLogout };
}
