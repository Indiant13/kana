"use client";

import type { FormEvent } from "react";
import { useLogin } from "../model/useLogin";
import type { AuthUserRecord } from "../../../services/auth";
import styles from "./LoginModal.module.css";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: AuthUserRecord) => void;
};

export function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
  const { phone, password, error, isSubmitting, setPhone, setPassword, submit } = useLogin();

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = await submit();

    if (user) {
      onSuccess(user);
    }
  };

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label="Вход">
      <form className={styles.modal} onSubmit={handleSubmit}>
        <div className={styles.header}>
          <h2 className={styles.title}>Вход</h2>
          <button className={styles.close} type="button" onClick={onClose} aria-label="Закрыть">
            {"\u00d7"}
          </button>
        </div>

        <label className={styles.field}>
          <span className={styles.label}>Телефон</span>
          <input
            className={styles.input}
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+79991111111"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Пароль</span>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="1"
          />
        </label>

        {error ? <p className={styles.error}>{error}</p> : null}

        <div className={styles.actions}>
          <button className={styles.submit} type="submit" disabled={isSubmitting}>
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}
