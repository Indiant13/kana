export type SocialItem = {
  id: "vk" | "telegram";
  label: string;
  href: string;
};

export type SocialsContent = {
  title: string;
  items: SocialItem[];
};

export function getSocialsContent(): SocialsContent {
  return {
    title:
      "\u0421\u043b\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c\u0438 \u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c\u0438 \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u0432",
    items: [
      {
        id: "vk",
        label: "\u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",
        href: "https://vk.com/",
      },
      {
        id: "telegram",
        label: "Telegram",
        href: "https://t.me/",
      },
    ],
  };
}
