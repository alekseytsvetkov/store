import type { FooterItem } from '~/types';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Store',
  description: 'Store description',
  url: 'https://store.dev',
  ogImage: 'https://store.dev/og-image.png',
  links: {
    github: 'https://github.com/alekseytsvetkov/store',
  },
  footerNav: [
    {
      items: [
        {
          title: 'support',
          href: '/support',
          external: false,
        },
        {
          title: 'about',
          href: '/about',
          external: false,
        },
        {
          title: 'contacts',
          href: '/contacts',
          external: false,
        },
      ],
    },
    {
      items: [
        {
          title: 'rules',
          href: '/laws/rules',
          external: false,
        },
        {
          title: 'agreement_contract',
          href: '/laws/agreement-contract',
          external: false,
        },
        {
          title: 'license_agreement',
          href: '/laws/license-agreement',
          external: false,
        },
        {
          title: 'privacy_policy',
          href: '/laws/privacy-policy',
          external: false,
        },
      ],
    },
    {
      items: [
        {
          title: 'payment',
          href: '/payment',
          external: false,
        },
        {
          title: 'cooperation',
          href: '/cooperation',
          external: false,
        },
      ],
    },
  ] satisfies FooterItem[],
};
