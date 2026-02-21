export type FeedEventRecord = {
  id: string;
  title: string;
  date: string;
  image: string;
};

const MOCK_FEED_EVENTS: FeedEventRecord[] = [
  {
    id: "feed-1",
    title: "\u0422\u0443\u0440\u043d\u0438\u0440 \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u043d\u044f",
    date: "2026-03-02",
    image:
      "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "feed-2",
    title: "\u041f\u043e\u0431\u0435\u0434\u0430 \u0432 \u0444\u0438\u043d\u0430\u043b\u0435",
    date: "2026-03-05",
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "feed-3",
    title: "\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",
    date: "2026-03-08",
    image:
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "feed-4",
    title: "\u0424\u0438\u043d\u0430\u043b \u043b\u0438\u0433\u0438",
    date: "2026-03-10",
    image:
      "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "feed-5",
    title: "\u0420\u0435\u0439\u0442\u0438\u043d\u0433\u043e\u0432\u044b\u0439 \u043c\u0430\u0442\u0447",
    date: "2026-03-12",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "feed-6",
    title: "\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u044b\u0439 \u0441\u0431\u043e\u0440 \u0432 \u0421\u043e\u0447\u0438",
    date: "2026-03-14",
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "feed-7",
    title: "\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u043a\u0443\u0431\u043e\u043a \u043a\u043e\u0440\u0442\u0430",
    date: "2026-03-16",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "feed-8",
    title: "\u041e\u0442\u043a\u0440\u044b\u0442\u0430\u044f \u0438\u0433\u0440\u0430 \u043f\u0430\u0440",
    date: "2026-03-18",
    image:
      "https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "feed-9",
    title: "\u041a\u043b\u0443\u0431\u043d\u044b\u0439 \u0434\u0435\u043d\u044c \u0442\u0435\u043d\u043d\u0438\u0441\u0430",
    date: "2026-03-20",
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "feed-10",
    title: "\u0421\u0443\u043f\u0435\u0440\u0444\u0438\u043d\u0430\u043b \u0441\u0435\u0437\u043e\u043d\u0430",
    date: "2026-03-23",
    image:
      "https://images.unsplash.com/photo-1560012057-4377df9dcf66?auto=format&fit=crop&w=400&q=80",
  },
];

export async function getFeedRepository(): Promise<FeedEventRecord[]> {
  return MOCK_FEED_EVENTS;
}
