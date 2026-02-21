import { getYearlyRankingUseCase } from "../use-cases/getYearlyRanking.use-case";
import type { YearlyRankingRecord } from "../repository/getYearlyRanking.repository";

export async function getYearlyRanking(year: number): Promise<YearlyRankingRecord[]> {
  return getYearlyRankingUseCase(year);
}
