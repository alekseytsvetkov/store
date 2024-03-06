import Link from 'next/link';

import { Button } from '@store/ui/components/button';

export async function Home() {
  return (
    <section className="max-w-6xl">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
        <h1 className="text-balance text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Биржа игровых ценностей
        </h1>
        <p className="text-muted-foreground max-w-[42rem] text-balance leading-normal sm:text-xl sm:leading-8">
          Store - безопасный и удобный сервис, где можно купить или продать игровые ценности
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="default" asChild>
            <Link href="/catalog">
              Купить сейчас
              <span className="text-foreground sr-only">Buy now</span>
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/offers/my-lots">
              Продать сейчас
              <span className="sr-only">Sell now</span>
            </Link>
          </Button>
        </div>
      </section>
    </section>
  );
}
