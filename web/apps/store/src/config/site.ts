import type { FooterItem } from "~/types"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Store",
  description: "Store description",
  url: "https://store.dev",
  ogImage: "https://store.dev/og-image.png",
  links: {
    github: "https://github.com/alekseytsvetkov/store"
  },
  footerNav: [
    {
      items: [
        {
          title: 'Помощь',
          href: '/support',
          external: false,
        },
        {
          title: 'О проекте',
          href: '/about',
          external: false,
        },
        {
          title: 'Контакты',
          href: '/contacts',
          external: false,
        },
      ]
    },
    {
      items: [
        {
          title: 'Правила',
          href: '/laws/rules',
          external: false,
        },
        {
          title: 'Агентский договор',
          href: '/laws/agreement-contract',
          external: false,
        },
        {
          title: 'Соглашение',
          href: '/laws/license-agreement',
          external: false,
        },
        {
          title: 'Конфиденциальность',
          href: '/laws/privacy-policy',
          external: false,
        }
      ]
    },
    {
      items: [
        {
          title: 'Оплата',
          href: '/payment',
          external: false,
        },
        {
          title: 'Сотркудничество',
          href: '/cooperation',
          external: false,
        }
      ]
    }
  ] satisfies FooterItem[],
}
