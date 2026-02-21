import { getFeedEvents } from "../../../services/feed";

export type FeedListItem = {
  id: string;
  title: string;
  date: string;
  image: string;
};

export async function getFeedData(): Promise<FeedListItem[]> {
  const events = await getFeedEvents();
  return events.map((event) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    image: event.image,
  }));
}
