import { getAllTournaments } from "../../../services/tournaments";

export type TournamentGridItem = {
  id: string;
  title: string;
  description: string;
  level: string;
  date: string;
  image: string;
  isPast: boolean;
};

export async function getTournamentsGridData(): Promise<TournamentGridItem[]> {
  const tournaments = await getAllTournaments();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return tournaments.map((tournament) => {
    const tournamentDate = new Date(tournament.date);

    return {
      id: tournament.id,
      title: tournament.title,
      description: tournament.description,
      level: tournament.level,
      date: tournament.date,
      image: tournament.image,
      isPast: tournamentDate.getTime() < today.getTime(),
    };
  });
}
