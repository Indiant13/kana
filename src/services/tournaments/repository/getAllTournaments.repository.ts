export type TournamentRecord = {
  id: string;
  title: string;
  description: string;
  level: string;
  date: string;
  image: string;
};

const MOCK_TOURNAMENTS: TournamentRecord[] = [
  {
    id: "tournament-1",
    title: "\u0421\u043e\u0447\u0438 Open Weekend",
    description: "\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0442\u0443\u0440\u043d\u0438\u0440 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 best of 3 \u043d\u0430 \u0433\u0440\u0443\u043d\u0442\u0435.",
    level: "NTRP 3.5",
    date: "2026-03-08",
    image:
      "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tournament-2",
    title: "\u0412\u0435\u0441\u0435\u043d\u043d\u044f\u044f \u041b\u0438\u0433\u0430 \u0421\u043e\u0447\u0438",
    description: "\u0421\u0435\u0440\u0438\u044f \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u043e\u0432\u044b\u0445 \u043c\u0430\u0442\u0447\u0435\u0439 \u0434\u043b\u044f \u0438\u0433\u0440\u043e\u043a\u043e\u0432 \u043b\u044e\u0431\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f.",
    level: "NTRP 4.0",
    date: "2026-03-15",
    image:
      "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tournament-3",
    title: "\u041d\u043e\u0447\u043d\u043e\u0439 \u041a\u0443\u0431\u043e\u043a \u041a\u0443\u0440\u043e\u0440\u0442\u0430",
    description: "\u0412\u0435\u0447\u0435\u0440\u043d\u0438\u0435 \u043f\u0430\u0440\u043d\u044b\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u0441 \u044f\u0440\u043a\u043e\u0439 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043e\u0439 \u0438 \u043c\u0443\u0437\u044b\u043a\u043e\u0439.",
    level: "NTRP 3.0",
    date: "2026-04-02",
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tournament-4",
    title: "\u041a\u0443\u0431\u043e\u043a \u0427\u0435\u043c\u043f\u0438\u043e\u043d\u043e\u0432 \u0420\u0438\u0432\u044c\u0435\u0440\u044b",
    description: "\u0418\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u044b\u0439 \u0441\u0435\u0442\u043a\u0430-\u043f\u043b\u044d\u0439\u043e\u0444\u0444 \u0441 \u043f\u043e\u043b\u043d\u043e\u0439 \u0442\u0443\u0440\u043d\u0438\u0440\u043d\u043e\u0439 \u0441\u0435\u0442\u043a\u043e\u0439.",
    level: "NTRP 4.5",
    date: "2026-04-12",
    image:
      "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tournament-5",
    title: "\u0424\u0438\u043d\u0430\u043b \u041b\u0435\u0442\u043d\u0435\u0439 \u0421\u0435\u0440\u0438\u0438",
    description: "\u0420\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0438\u0433\u0440\u044b \u0441\u0435\u0437\u043e\u043d\u0430 \u0437\u0430 \u0442\u0438\u0442\u0443\u043b \u0438 \u043e\u0447\u043a\u0438 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0430.",
    level: "NTRP 5.0",
    date: "2026-05-01",
    image:
      "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tournament-6",
    title: "\u041e\u0441\u0435\u043d\u043d\u0438\u0439 \u043f\u0440\u043e\u0440\u044b\u0432",
    description: "\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u043d\u044b\u0439 \u0442\u0443\u0440 \u0434\u043b\u044f \u0442\u0435\u0445, \u043a\u0442\u043e \u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u0434\u043d\u044f\u0442\u044c \u0441\u0432\u043e\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c.",
    level: "NTRP 3.5",
    date: "2025-10-07",
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tournament-7",
    title: "\u041f\u0430\u0440\u043d\u044b\u0439 \u041c\u0430\u0441\u0442\u0435\u0440\u0441",
    description: "\u0422\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0430\u0440\u043d\u044b\u0435 \u0438\u0433\u0440\u044b \u0441 \u0441\u0435\u0442\u043a\u043e\u0439 \u043d\u0430 \u0432\u044b\u043b\u0435\u0442.",
    level: "NTRP 4.0",
    date: "2025-09-20",
    image:
      "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tournament-8",
    title: "\u041a\u0443\u0440\u043e\u0440\u0442\u043d\u044b\u0439 \u0427\u0435\u043b\u043b\u0435\u043d\u0434\u0436",
    description: "\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0443\u0440 \u0441 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u043c\u0438 \u0441\u0435\u0442\u0430\u043c\u0438 \u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u043a\u043e\u0439.",
    level: "NTRP 2.5",
    date: "2025-08-17",
    image:
      "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tournament-9",
    title: "\u0424\u0438\u043d\u0430\u043b \u043b\u0438\u0433\u0438 2025",
    description: "\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u043c\u0430\u0442\u0447 \u0441\u0435\u0437\u043e\u043d\u0430 \u043c\u0435\u0436\u0434\u0443 \u043b\u0438\u0434\u0435\u0440\u0430\u043c\u0438 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0430.",
    level: "NTRP 5.5",
    date: "2025-07-29",
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tournament-10",
    title: "\u041a\u0443\u0431\u043e\u043a \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u043d\u044f",
    description: "\u041e\u0434\u043d\u043e\u0434\u043d\u0435\u0432\u043d\u044b\u0439 \u043b\u044e\u0431\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0442\u0443\u0440\u043d\u0438\u0440 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u0439.",
    level: "NTRP 3.0",
    date: "2025-06-14",
    image:
      "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=900&q=80",
  },
];

export async function getAllTournamentsRepository(): Promise<TournamentRecord[]> {
  return MOCK_TOURNAMENTS;
}
