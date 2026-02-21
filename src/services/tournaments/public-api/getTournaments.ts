import { getAllTournamentsUseCase } from "../use-cases/getAllTournaments.use-case";
import type { TournamentRecord } from "../repository/getAllTournaments.repository";

export async function getAllTournaments(): Promise<TournamentRecord[]> {
  return getAllTournamentsUseCase();
}
