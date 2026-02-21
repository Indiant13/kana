"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { LoginModal } from "../../features/login";
import type { AuthUserRecord } from "../../services/auth";

type AuthSessionUser = {
  id: string;
  name: string;
  phone: string;
  avatar: string;
};

type AuthSessionContextValue = {
  user: AuthSessionUser | null;
  isLoggedIn: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  logout: () => void;
};

const AUTH_STORAGE_KEY = "kana.auth.session";
const IVAN_USER_ID = "1";
const IVAN_TILE_AVATAR = "https://i.pravatar.cc/300?img=1";
const AuthSessionContext = createContext<AuthSessionContextValue | null>(null);

export function AuthSessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthSessionUser | null>(() => readInitialSessionUser());
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const persistUser = (source: AuthUserRecord) => {
    const sessionUser = normalizeSessionUser({
      id: source.id,
      name: source.name,
      phone: source.phone,
      avatar: source.avatar,
    });

    setUser(sessionUser);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(sessionUser));
  };

  const contextValue = useMemo<AuthSessionContextValue>(
    () => ({
      user,
      isLoggedIn: Boolean(user),
      openLogin: () => setIsLoginOpen(true),
      closeLogin: () => setIsLoginOpen(false),
      logout: () => {
        setUser(null);
        localStorage.removeItem(AUTH_STORAGE_KEY);
      },
    }),
    [user],
  );

  return (
    <AuthSessionContext.Provider value={contextValue}>
      {children}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSuccess={(loggedUser) => {
          persistUser(loggedUser);
          setIsLoginOpen(false);
        }}
      />
    </AuthSessionContext.Provider>
  );
}

export function useAuthSession() {
  const context = useContext(AuthSessionContext);

  if (!context) {
    throw new Error("useAuthSession must be used within AuthSessionProvider");
  }

  return context;
}

function readInitialSessionUser(): AuthSessionUser | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    return normalizeSessionUser(JSON.parse(raw) as AuthSessionUser);
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

function normalizeSessionUser(user: AuthSessionUser): AuthSessionUser {
  if (user.id === IVAN_USER_ID && (!user.avatar || user.avatar.startsWith("/avatars/"))) {
    return {
      ...user,
      avatar: IVAN_TILE_AVATAR,
    };
  }

  return user;
}
