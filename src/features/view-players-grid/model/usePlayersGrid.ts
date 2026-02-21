import { getAllPlayers } from "../../../services/players";

export type PlayersGridItem = {
  id: string;
  name: string;
  avatar: string;
};

export async function getPlayersGridData(): Promise<PlayersGridItem[]> {
  const players = await getAllPlayers();

  return players.map((player) => ({
    id: player.id,
    name: player.name,
    avatar: player.avatar,
  }));
}
