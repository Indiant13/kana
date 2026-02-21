import { loginUseCase } from "../use-cases/login.use-case";
import type { AuthUserRecord } from "../repository/getUserByPhone.repository";

export async function login(phone: string, password: string): Promise<AuthUserRecord> {
  return loginUseCase(phone, password);
}

export type { AuthUserRecord };
