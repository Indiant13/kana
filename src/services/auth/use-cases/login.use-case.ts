import { getUserByPhoneRepository } from "../repository/getUserByPhone.repository";
import type { AuthUserRecord } from "../repository/getUserByPhone.repository";

export async function loginUseCase(phone: string, password: string): Promise<AuthUserRecord> {
  const user = await getUserByPhoneRepository(phone.trim());

  if (!user || user.password !== password) {
    throw new Error("INVALID_CREDENTIALS");
  }

  return user;
}
