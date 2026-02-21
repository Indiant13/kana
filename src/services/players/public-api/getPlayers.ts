import { getAllPlayersUseCase } from "../use-cases/getAllPlayers.use-case";
import type { PlayerRecord } from "../repository/getAllPlayers.repository";

export async function getAllPlayers(): Promise<PlayerRecord[]> {
  return getAllPlayersUseCase();
}
