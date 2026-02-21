import { getYearlyRankingRepository, type YearlyRankingRecord } from "../repository/getYearlyRanking.repository";

export async function getYearlyRankingUseCase(year: number): Promise<YearlyRankingRecord[]> {
  const ranking = await getYearlyRankingRepository(year);
  return [...ranking].sort((a, b) => b.rating - a.rating);
}
