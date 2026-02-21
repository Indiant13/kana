"use client";

import { LandingHeroWidget } from "../landing-hero-widget";
import { UpcomingTournamentsWidget } from "../upcoming-tournaments-widget";
import { useAuthSession } from "../../processes/auth-session";

export function LandingAuthContentWidget() {
  const { isLoggedIn } = useAuthSession();

  if (isLoggedIn) {
    return <UpcomingTournamentsWidget />;
  }

  return <LandingHeroWidget />;
}
