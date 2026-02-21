export const AUTH_STORAGE_KEY = "kana.auth.session";

export function clearAuthSessionStorage() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(AUTH_STORAGE_KEY);
}
