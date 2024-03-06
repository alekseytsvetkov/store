import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n, getStaticParams } from '~/locales/server';
import { Home } from './_components/home';

export function generateStaticParams() {
  return getStaticParams();
}

export default async function Index({ params: { locale } }: { params: { locale: string } }) {
  setStaticParamsLocale(locale);

  const t = await getScopedI18n('index');

  return (
    <section className="container grid max-w-6xl items-center gap-8 pb-8 pt-6 md:py-8">
      <Home />
    </section>
  );
}
