export type RegisterPlayerPayload = {
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  phone: string;
  ntrp: string;
  vk?: string;
  telegram?: string;
  instagram?: string;
};

type RegisteredPlayerRecord = RegisterPlayerPayload & {
  id: string;
  createdAt: string;
};

const REGISTERED_PLAYERS_STORE: RegisteredPlayerRecord[] = [];

export async function registerPlayerUseCase(payload: RegisterPlayerPayload): Promise<{ id: string }> {
  const id = `registered-${REGISTERED_PLAYERS_STORE.length + 1}`;

  REGISTERED_PLAYERS_STORE.push({
    ...payload,
    id,
    createdAt: new Date().toISOString(),
  });

  return { id };
}
