import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n, getStaticParams } from '~/locales/server';

export function generateStaticParams() {
  return getStaticParams();
}

export default async function Index({ params: { locale } }: { params: { locale: string } }) {
  setStaticParamsLocale(locale);

  const t = await getScopedI18n('index');

  return (
    <section className="container h-full">
      <section className="h-full flex items-center justify-center">{t('test')}</section>
    </section>
  );
}
