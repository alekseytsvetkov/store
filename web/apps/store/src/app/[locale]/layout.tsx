'use client';
import { SiteFooter } from '~/components/layouts/site-footer';
import { SiteHeader } from '~/components/layouts/site-header';
import { I18nProviderClient } from '~/locales/client';

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <I18nProviderClient locale={locale}>
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </I18nProviderClient>
    </>
  );
}
