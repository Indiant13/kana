import { getVenuesRepository, type VenueRecord } from "../repository/getVenues.repository";

export async function getVenuesUseCase(): Promise<VenueRecord[]> {
  return getVenuesRepository();
}
