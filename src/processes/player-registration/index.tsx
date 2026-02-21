"use client";

import { useState } from "react";
import { LandingHero } from "../../features/landing-hero";
import { RegisterPlayerModal } from "../../features/register-player";

export function PlayerRegistrationProcess() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LandingHero onRegisterClick={() => setIsOpen(true)} />
      <RegisterPlayerModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmitted={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}
