import { getScopedI18n, getStaticParams } from '~/locales/server';

export function generateStaticParams() {
  return getStaticParams();
}

export default async function AppOffersPage() {
  const t = await getScopedI18n('index');

  return (
    <section className="container grid max-w-6xl items-center gap-8 pb-8 pt-6 md:py-8">
      App offers page
    </section>
  );
}
