"use client";

import { useMemo, useState } from "react";
import { registerPlayer } from "../../../services/players";

export type RegisterPlayerFormState = {
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  phone: {
    countryCode: string;
    number: string;
  };
  ntrp: string;
  vk: string;
  telegram: string;
  instagram: string;
};

const INITIAL_FORM_STATE: RegisterPlayerFormState = {
  firstName: "",
  lastName: "",
  city: "",
  email: "",
  phone: {
    countryCode: "+7",
    number: "",
  },
  ntrp: "",
  vk: "",
  telegram: "",
  instagram: "",
};

const REQUIRED_FIELDS: Array<Exclude<keyof RegisterPlayerFormState, "phone" | "vk" | "telegram" | "instagram">> = [
  "firstName",
  "lastName",
  "city",
  "email",
  "ntrp",
];

export function useRegisterPlayer() {
  const [form, setForm] = useState<RegisterPlayerFormState>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof RegisterPlayerFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = useMemo(
    () =>
      REQUIRED_FIELDS.every((field) => form[field].trim().length > 0) &&
      form.phone.number.trim().length > 0 &&
      form.phone.countryCode.trim().length > 0,
    [form],
  );

  const setField = (field: keyof RegisterPlayerFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const setPhoneCountryCode = (countryCode: string) => {
    setForm((prev) => ({
      ...prev,
      phone: {
        ...prev.phone,
        countryCode,
      },
    }));
    setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  const setPhoneNumber = (number: string) => {
    setForm((prev) => ({
      ...prev,
      phone: {
        ...prev.phone,
        number,
      },
    }));
    setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof RegisterPlayerFormState, string>> = {};

    REQUIRED_FIELDS.forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = "\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435";
      }
    });

    if (!form.phone.number.trim()) {
      nextErrors.phone = "\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = async () => {
    if (!validate()) {
      return null;
    }

    setIsSubmitting(true);

    try {
      const result = await registerPlayer({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        city: form.city.trim(),
        email: form.email.trim(),
        phone: `${form.phone.countryCode}${form.phone.number.trim()}`,
        ntrp: form.ntrp.trim(),
        vk: form.vk.trim() || undefined,
        telegram: form.telegram.trim() || undefined,
        instagram: form.instagram.trim() || undefined,
      });

      setForm(INITIAL_FORM_STATE);
      setErrors({});
      return result;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    errors,
    isSubmitting,
    isValid,
    setField,
    setPhoneCountryCode,
    setPhoneNumber,
    submit,
  };
}
