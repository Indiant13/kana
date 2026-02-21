"use client";

import { useState } from "react";
import { login } from "../../../services/auth";
import type { AuthUserRecord } from "../../../services/auth";

export function useLogin() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (): Promise<AuthUserRecord | null> => {
    if (!phone.trim() || !password.trim()) {
      setError("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c");
      return null;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const user = await login(phone.trim(), password);
      setPhone("");
      setPassword("");
      return user;
    } catch {
      setError("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c");
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    phone,
    password,
    error,
    isSubmitting,
    setPhone,
    setPassword,
    submit,
  };
}
