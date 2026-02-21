import { getYearlyRanking } from "../../../services/rating";

export type RatingRow = {
  id: string;
  rank: number;
  name: string;
  wins: number;
  losses: number;
  tournaments: number;
  rating: number;
};

export const AVAILABLE_RATING_YEARS = [2026, 2025, 2024] as const;

export function getCurrentRatingYear(): number {
  const currentYear = new Date().getFullYear();
  if (AVAILABLE_RATING_YEARS.includes(currentYear as (typeof AVAILABLE_RATING_YEARS)[number])) {
    return currentYear;
  }
  return AVAILABLE_RATING_YEARS[0];
}

export async function getRatingData(year: number = getCurrentRatingYear()): Promise<RatingRow[]> {
  const ranking = await getYearlyRanking(year);
  return ranking.map((player, index) => ({
    id: player.id,
    rank: index + 1,
    name: player.name,
    wins: player.wins,
    losses: player.losses,
    tournaments: player.tournaments,
    rating: player.rating,
  }));
}
