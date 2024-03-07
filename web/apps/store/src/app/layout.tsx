import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import { getStaticParams } from '~/locales/server';
import '../styles/globals.css';
import { Providers } from './[locale]/providers';
import type { Metadata } from 'next';
import { siteConfig } from '~/config/site';
import { Toaster } from '@store/ui/components/toaster';

export function generateStaticParams() {
  return getStaticParams();
}

const inter = Inter({ subsets: ['latin'] });

export const OG_URL =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:4200' : 'https://og.store.dev';

export const metadata: Metadata = {
  metadataBase: new URL(OG_URL),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  robots: {
    index: true,
    follow: true,
  },
  description: siteConfig.description,
  keywords: ['store'],
  authors: [
    {
      name: 'alekseytsvetkov',
      url: 'https://github.com/alekseytsvetkov',
    },
  ],
  creator: 'alekseytsvetkov',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
