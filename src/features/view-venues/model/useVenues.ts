import { getVenues } from "../../../services/venues";

export type VenueBannerItem = {
  id: string;
  name: string;
  image: string;
};

export async function getVenuesData(): Promise<VenueBannerItem[]> {
  const venues = await getVenues();
  return venues.map((venue) => ({
    id: venue.id,
    name: venue.name,
    image: venue.image,
  }));
}
