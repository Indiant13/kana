import { getAllPlayers } from "../../../services/players";

export type PlayersGridItem = {
  id: string;
  fullName: string;
  age: number;
  ntrp: number;
  avatar: string;
};

export async function getPlayersGridData(): Promise<PlayersGridItem[]> {
  const players = await getAllPlayers();

  return players.map((player) => ({
    id: player.id,
    fullName: `${player.firstName} ${player.lastName}`,
    age: player.age,
    ntrp: player.ntrp,
    avatar: player.avatar,
  }));
}
