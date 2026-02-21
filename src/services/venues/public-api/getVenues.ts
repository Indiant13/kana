import { getVenuesUseCase } from "../use-cases/getVenues.use-case";
import type { VenueRecord } from "../repository/getVenues.repository";

export async function getVenues(): Promise<VenueRecord[]> {
  return getVenuesUseCase();
}
