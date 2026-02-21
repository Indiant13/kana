import { getFeedUseCase } from "../use-cases/getFeed.use-case";
import type { FeedEventRecord } from "../repository/getFeed.repository";

export async function getFeedEvents(): Promise<FeedEventRecord[]> {
  return getFeedUseCase();
}
