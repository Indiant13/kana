import { getFeedRepository, type FeedEventRecord } from "../repository/getFeed.repository";

export async function getFeedUseCase(): Promise<FeedEventRecord[]> {
  return getFeedRepository();
}
