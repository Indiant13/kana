"use client";

import type { FormEvent } from "react";
import { useRegisterPlayer } from "../model/useRegisterPlayer";
import styles from "./RegisterPlayerModal.module.css";

type RegisterPlayerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmitted: (result: { id: string }) => void;
};

export function RegisterPlayerModal({ isOpen, onClose, onSubmitted }: RegisterPlayerModalProps) {
  const { form, errors, isSubmitting, setField, setPhoneCountryCode, setPhoneNumber, submit } = useRegisterPlayer();

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await submit();

    if (result) {
      onSubmitted(result);
    }
  };

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0438\u0433\u0440\u043e\u043a\u0430"}
    >
      <form className={styles.modal} onSubmit={handleSubmit}>
        <div className={styles.header}>
          <h2 className={styles.title}>{"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0438\u0433\u0440\u043e\u043a\u0430"}</h2>
          <button
            className={styles.close}
            type="button"
            onClick={onClose}
            aria-label={"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}
          >
            {"\u00d7"}
          </button>
        </div>

        <div className={styles.grid}>
          <Field
            label={"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}
            value={form.lastName}
            onChange={(value) => setField("lastName", value)}
            error={errors.lastName}
            placeholder={"\u041f\u0435\u0442\u0440\u043e\u0432"}
          />
          <Field
            label={"\u0418\u043c\u044f"}
            value={form.firstName}
            onChange={(value) => setField("firstName", value)}
            error={errors.firstName}
            placeholder={"\u0418\u0432\u0430\u043d"}
          />
          <Field
            label={"\u0413\u043e\u0440\u043e\u0434"}
            value={form.city}
            onChange={(value) => setField("city", value)}
            error={errors.city}
            placeholder={"\u0421\u043e\u0447\u0438"}
          />
          <Field
            label="Email"
            value={form.email}
            onChange={(value) => setField("email", value)}
            error={errors.email}
            type="email"
            placeholder="ivan.petrov@example.com"
          />
          <Field
            label={"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}
            value={form.phone.number}
            onChange={setPhoneNumber}
            error={errors.phone}
            countryCode={form.phone.countryCode}
            onCountryCodeChange={setPhoneCountryCode}
            placeholder="9991234567"
          />
          <Field
            label={"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 NTRP"}
            value={form.ntrp}
            onChange={(value) => setField("ntrp", value)}
            error={errors.ntrp}
            placeholder="4.0"
          />
          <Field
            label={"VK \u0441\u0441\u044b\u043b\u043a\u0430"}
            value={form.vk}
            onChange={(value) => setField("vk", value)}
            placeholder="https://vk.com/username"
          />
          <Field
            label="Telegram"
            value={form.telegram}
            onChange={(value) => setField("telegram", value)}
            placeholder="@username"
          />
          <Field
            label="Instagram"
            value={form.instagram}
            onChange={(value) => setField("instagram", value)}
            className={styles.full}
            placeholder="@username"
          />
        </div>

        <div className={styles.actions}>
          <button className={styles.submit} type="submit" disabled={isSubmitting}>
            {"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}
          </button>
        </div>
      </form>
    </div>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  className?: string;
  countryCode?: string;
  onCountryCodeChange?: (countryCode: string) => void;
  placeholder?: string;
};

const PHONE_COUNTRIES = [
  { label: "+7", code: "+7" },
  { label: "+375", code: "+375" },
  { label: "+7", code: "+7" },
  { label: "+374", code: "+374" },
  { label: "+995", code: "+995" },
  { label: "+90", code: "+90" },
  { label: "+971", code: "+971" },
] as const;

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  className,
  countryCode,
  onCountryCodeChange,
  placeholder,
}: FieldProps) {
  const isPhoneField = typeof countryCode === "string" && typeof onCountryCodeChange === "function";

  return (
    <label className={`${styles.field} ${className ?? ""}`}>
      <span className={styles.label}>{decodeEscapedUnicode(label)}</span>
      {isPhoneField ? (
        <div className={styles.phoneRow}>
          <select
            className={`${styles.input} ${styles.phoneCountry}`}
            value={countryCode}
            onChange={(event) => onCountryCodeChange(event.target.value)}
          >
            {PHONE_COUNTRIES.map((country, index) => (
              <option key={`${country.code}-${index}`} value={country.code}>
                {country.label}
              </option>
            ))}
          </select>
          <input
            className={`${styles.input} ${styles.phoneNumber}`}
            type="tel"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
          />
        </div>
      ) : (
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
        />
      )}
      {error ? <span className={styles.error}>{error}</span> : null}
    </label>
  );
}

function decodeEscapedUnicode(value: string): string {
  return value.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex: string) => String.fromCharCode(parseInt(hex, 16)));
}
