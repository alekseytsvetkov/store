import { getScopedI18n, getStaticParams } from '~/locales/server';
import { Input } from '@store/ui/components/input';
import { GamepadIcon } from '@store/ui/icons';
import Link from 'next/link';
import { cn } from '@store/ui/cn';

export function generateStaticParams() {
  return getStaticParams();
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const APPS = [
  {
    letter: 'A',
    values: [
      {
        name: 'Apex Legends',
        slug: 'apex-legends',
        offerType: [
          {
            name: 'Accounts',
            slug: 'accounts',
          },
          {
            name: 'Boosting',
            slug: 'boosting',
          },
          {
            name: 'Donate',
            slug: 'donate',
          },
          {
            name: 'Battle Pass',
            slug: 'battle-pass',
          },
          {
            name: 'Training',
            slug: 'training',
          },
          {
            name: 'Achievements',
            slug: 'achievements',
          },
          {
            name: 'Services',
            slug: 'services',
          },
        ],
      },
    ],
  },
  {
    letter: 'B',
    values: [
      {
        name: 'Brawl Stars',
        slug: 'brawl-stars',
        offerType: [
          {
            name: 'Gems',
            slug: 'gems',
          },
          {
            name: 'Accounts',
            slug: 'accounts',
          },
          {
            name: 'Leagues',
            slug: 'leagues',
          },
          {
            name: 'Cups',
            slug: 'cups',
          },
          {
            name: 'Brawl Pass',
            slug: 'brawl-pass',
          },
          {
            name: 'Training',
            slug: 'training',
          },
          {
            name: 'Services',
            slug: 'services',
          },
        ],
      },
    ],
  },
  {
    letter: 'C',
    values: [
      {
        name: 'Counter-Stike 2',
        slug: 'cs2',
        offerType: [
          {
            name: 'Accounts',
            slug: 'accounts',
          },
          {
            name: 'Faceit',
            slug: 'faceit',
          },
          {
            name: 'Boosting',
            slug: 'boosting',
          },
          {
            name: 'Skins',
            slug: 'skins',
          },
          {
            name: 'Prime',
            slug: 'prime',
          },
        ],
      },
    ],
  },
];

export default async function AppsPage() {
  const t = await getScopedI18n('apps');

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
        {APPS.map((app) => (
          <div key={app.letter} id={app.letter}>
            <div className="relative flex flex-row items-center pb-10 pt-6">
              <span className="bg-background absolute pr-4 text-xl font-bold">{app.letter}</span>
              <div className="bg-border h-[1px] w-full shrink-0" />
            </div>
            <div className="grid grid-cols-4 gap-6">
              {app.values.map((value, index) => (
                <div key={index}>
                  <Link
                    href={`/apps${'/' + value.slug}`}
                    className="group flex flex-row items-center pb-4 hover:cursor-pointer"
                  >
                    <GamepadIcon size="36" />
                    <span className="ml-2 font-bold group-hover:underline group-hover:underline-offset-4">
                      {value.name}
                    </span>
                  </Link>
                  <ul className="text-muted-foreground list-inside list-disc text-sm">
                    {value.offerType.map((offer, index) => (
                      <li
                        key={index}
                        className={cn(
                          `hover:text-foreground after:text-muted-foreground inline-block after:px-1 after:text-xs after:content-['•'] hover:cursor-pointer`,
                          value.offerType[value.offerType.length - 1] === offer &&
                            'after:text-none after:cursor-none after:px-0 after:content-none',
                        )}
                      >
                        <Link href={`/apps/${value.slug}/offers/${offer.slug}`}>
                          {t(('offer_type_' + offer.slug) as any)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
