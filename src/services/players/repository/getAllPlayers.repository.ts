export type PlayerRecord = {
  id: string;
  name: string;
  avatar: string;
};

const MOCK_PLAYERS: PlayerRecord[] = Array.from({ length: 30 }, (_, index) => {
  const playerNumber = index + 1;

  return {
    id: `player-${playerNumber}`,
    name: `Player ${playerNumber}`,
    avatar: `https://i.pravatar.cc/300?img=${playerNumber}`,
  };
});

export async function getAllPlayersRepository(): Promise<PlayerRecord[]> {
  return MOCK_PLAYERS;
}
