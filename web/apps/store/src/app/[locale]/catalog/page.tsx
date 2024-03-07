import { getScopedI18n, getStaticParams } from '~/locales/server';
import { Input } from '@store/ui/components/input';
import { GamepadIcon } from '@store/ui/icons';

export function generateStaticParams() {
  return getStaticParams();
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default async function CatalogPage() {
  const t = await getScopedI18n('catalog');

  return (
    <section className="container grid max-w-6xl items-center pb-8 pt-6 md:py-8">
      <section className="relative flex-1 gap-1 pb-2">
        <h1 className="text-2xl font-bold tracking-tighter md:text-3xl lg:leading-[1.1]">
          {t('page_title')}
        </h1>
        <p className="text-muted-foreground ax-w-[750px] mb-4 text-balance text-sm sm:text-base">
          {t('page_description')}
        </p>
        <Input
          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder={t('input_search')}
        />
      </section>
      <section className="bg-background sticky top-[65px] z-50 mb-8">
        <ul className="text-muted-foreground my-4 flex items-center gap-4 px-2 text-base font-medium">
          {ALPHABET.map((letter) => (
            <li key={letter} className="hover:text-foreground hover:cursor-pointer">
              {letter}
            </li>
          ))}
        </ul>
        <div className="bg-border h-[1px] w-full shrink-0" />
      </section>
      <section className="relative flex-1 space-y-6 pb-6">
        <div id="A">
          <div className="relative flex flex-row items-center pb-10 pt-6">
            <span className="bg-background absolute pr-4 text-xl font-bold">A</span>
            <div className="bg-border h-[1px] w-full shrink-0" />
          </div>
          <div className="grid grid-cols-4 gap-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                <div className="group flex flex-row items-center pb-4 hover:cursor-pointer">
                  <GamepadIcon size="36" />
                  <span className="ml-2 font-bold group-hover:underline group-hover:underline-offset-4">
                    Apex Legends
                  </span>
                </div>
                <ul className="text-muted-foreground list-inside list-disc text-sm">
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Аккаунты
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Бустинг
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Донат
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Боевой пропуск
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Обучение
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Достижения
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:text-xs hover:cursor-pointer">
                    Услуги
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div id="B">
          <div className="relative flex flex-row items-center pb-10 pt-6">
            <span className="bg-background absolute pr-4 text-xl font-bold">B</span>
            <div className="bg-border h-[1px] w-full shrink-0" />
          </div>
          <div className="grid grid-cols-4 gap-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                <div className="group flex flex-row items-center pb-4 hover:cursor-pointer">
                  <GamepadIcon size="36" />
                  <span className="ml-2 font-bold group-hover:underline group-hover:underline-offset-4">
                    Brawl Stars
                  </span>
                </div>
                <ul className="text-muted-foreground list-inside list-disc text-sm">
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Гемы
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Аккаунты
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Лиги
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Кубки
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Brawl Pass
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Обучение
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:text-xs hover:cursor-pointer">
                    Услуги
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div id="C">
          <div className="relative flex flex-row items-center pb-10 pt-6">
            <span className="bg-background absolute pr-4 text-xl font-bold">C</span>
            <div className="bg-border h-[1px] w-full shrink-0" />
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <div className="group flex flex-row items-center pb-4 hover:cursor-pointer">
                <GamepadIcon size="36" />
                <span className="ml-2 font-bold group-hover:underline group-hover:underline-offset-4">
                  Counter-Stike 2
                </span>
              </div>
              <ul className="text-muted-foreground list-inside list-disc text-sm">
                <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                  Аккаунты
                </li>
                <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                  Faceit
                </li>
                <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                  Бустинг
                </li>
                <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                  Скины
                </li>
                <li className="hover:text-foreground after:text-muted-foreground inline-block after:text-xs hover:cursor-pointer">
                  Prime
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="A">
          <div className="relative flex flex-row items-center pb-10 pt-6">
            <span className="bg-background absolute pr-4 text-xl font-bold">A</span>
            <div className="bg-border h-[1px] w-full shrink-0" />
          </div>
          <div className="grid grid-cols-4 gap-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                <div className="group flex flex-row items-center pb-4 hover:cursor-pointer">
                  <GamepadIcon size="36" />
                  <span className="ml-2 font-bold group-hover:underline group-hover:underline-offset-4">
                    Apex Legends
                  </span>
                </div>
                <ul className="text-muted-foreground list-inside list-disc text-sm">
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Аккаунты
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Бустинг
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Донат
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Боевой пропуск
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Обучение
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Достижения
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:text-xs hover:cursor-pointer">
                    Услуги
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div id="B">
          <div className="relative flex flex-row items-center pb-10 pt-6">
            <span className="bg-background absolute pr-4 text-xl font-bold">B</span>
            <div className="bg-border h-[1px] w-full shrink-0" />
          </div>
          <div className="grid grid-cols-4 gap-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                <div className="group flex flex-row items-center pb-4 hover:cursor-pointer">
                  <GamepadIcon size="36" />
                  <span className="ml-2 font-bold group-hover:underline group-hover:underline-offset-4">
                    Brawl Stars
                  </span>
                </div>
                <ul className="text-muted-foreground list-inside list-disc text-sm">
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Гемы
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Аккаунты
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Лиги
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Кубки
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Brawl Pass
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                    Обучение
                  </li>
                  <li className="hover:text-foreground after:text-muted-foreground inline-block after:text-xs hover:cursor-pointer">
                    Услуги
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div id="C">
          <div className="relative flex flex-row items-center pb-10 pt-6">
            <span className="bg-background absolute pr-4 text-xl font-bold">C</span>
            <div className="bg-border h-[1px] w-full shrink-0" />
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <div className="group flex flex-row items-center pb-4 hover:cursor-pointer">
                <GamepadIcon size="36" />
                <span className="ml-2 font-bold group-hover:underline group-hover:underline-offset-4">
                  Counter-Stike 2
                </span>
              </div>
              <ul className="text-muted-foreground list-inside list-disc text-sm">
                <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                  Аккаунты
                </li>
                <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                  Faceit
                </li>
                <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                  Бустинг
                </li>
                <li className="hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer">
                  Скины
                </li>
                <li className="hover:text-foreground after:text-muted-foreground inline-block after:text-xs hover:cursor-pointer">
                  Prime
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
