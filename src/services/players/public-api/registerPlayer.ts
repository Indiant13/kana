import { registerPlayerUseCase, type RegisterPlayerPayload } from "../use-cases/registerPlayer.use-case";

export async function registerPlayer(payload: RegisterPlayerPayload): Promise<{ id: string }> {
  return registerPlayerUseCase(payload);
}

export type { RegisterPlayerPayload };
