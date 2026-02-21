import { getAllTournaments } from "../../../services/tournaments";

export type UpcomingTournamentItem = {
  id: string;
  title: string;
  date: string;
  level: string;
  image: string;
};

export async function getUpcomingTournamentsData(): Promise<UpcomingTournamentItem[]> {
  const tournaments = await getAllTournaments();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return tournaments
    .filter((tournament) => {
      const tournamentDate = new Date(tournament.date);
      return tournamentDate.getTime() > today.getTime();
    })
    .sort((left, right) => new Date(left.date).getTime() - new Date(right.date).getTime())
    .map((tournament) => ({
      id: tournament.id,
      title: tournament.title,
      date: tournament.date,
      level: tournament.level,
      image: tournament.image,
    }));
}
