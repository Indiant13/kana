export type AuthUserRecord = {
  id: string;
  name: string;
  phone: string;
  password: string;
  avatar: string;
};

const MOCK_USER: AuthUserRecord = {
  id: "1",
  name: "\u0418\u0432\u0430\u043d \u041f\u0435\u0442\u0440\u043e\u0432",
  phone: "+79991111111",
  password: "1",
  avatar: "https://i.pravatar.cc/300?img=1",
};

export async function getUserByPhoneRepository(phone: string): Promise<AuthUserRecord | null> {
  if (phone === MOCK_USER.phone) {
    return MOCK_USER;
  }

  return null;
}
