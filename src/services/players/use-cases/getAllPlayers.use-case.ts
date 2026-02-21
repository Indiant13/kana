import { getAllPlayersRepository, type PlayerRecord } from "../repository/getAllPlayers.repository";

export async function getAllPlayersUseCase(): Promise<PlayerRecord[]> {
  return getAllPlayersRepository();
}
