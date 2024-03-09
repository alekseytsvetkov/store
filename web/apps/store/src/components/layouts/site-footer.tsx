import Link from 'next/link';

import { siteConfig } from '~/config/site';
import { CogIcon, GithubIcon } from '@store/ui/icons';
import { ModeToggle } from './mode-toggle';
import { Button } from '@store/ui/components/button';
import { useScopedI18n } from '~/locales/client';

export function SiteFooter() {
  const t = useScopedI18n('footer');

  return (
    <footer className="bg-background w-full border-t">
      <section className="container py-8">
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        >
          <section id="footer-branding" aria-labelledby="footer-branding-heading">
            <Link href="/" className="relative flex w-fit items-center space-x-2">
              <CogIcon className="size-6" aria-hidden="true" />
              <span className="text-lg font-bold">{siteConfig.name}</span>
              <span className="text-muted-foreground absolute -right-[12px] bottom-[5px]">β</span>
            </Link>
          </section>
          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="xxs:grid-cols-2 grid flex-1 grid-cols-1 gap-10 sm:grid-cols-4"
          >
            {siteConfig.footerNav.map((item, index) => (
              <div key={index} className="space-y-3">
                <ul className="space-y-2.5">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? '_blank' : undefined}
                        rel={link?.external ? 'noreferrer' : undefined}
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                      >
                        {t(link.title as any)}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center space-x-4"
        >
          <div className="text-muted-foreground flex-1 text-left text-sm leading-loose">
            © 2024 Store
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Button variant="outline" size="icon">
                <GithubIcon className="size-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </section>
      </section>
    </footer>
  );
}
