import { getAllTournamentsRepository, type TournamentRecord } from "../repository/getAllTournaments.repository";

export async function getAllTournamentsUseCase(): Promise<TournamentRecord[]> {
  return getAllTournamentsRepository();
}
