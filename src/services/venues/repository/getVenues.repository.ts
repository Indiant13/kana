export type VenueRecord = {
  id: string;
  name: string;
  image: string;
};

const MOCK_VENUES: VenueRecord[] = [
  {
    id: "venue-yunost",
    name: "\u042e\u041d\u041e\u0421\u0422\u042c",
    image: "/venues/yunost/cover.jpg",
  },
  {
    id: "venue-riviera",
    name: "\u0420\u0418\u0412\u042c\u0415\u0420\u0410",
    image: "/venues/riviera/cover.webp",
  },
];

export async function getVenuesRepository(): Promise<VenueRecord[]> {
  return MOCK_VENUES;
}
