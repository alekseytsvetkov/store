import Link from "next/link"

import { siteConfig } from "~/config/site"
import { CogIcon, GithubIcon } from "@store/ui/icons"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <section className="container py-8">
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        >
          <section
            id="footer-branding"
            aria-labelledby="footer-branding-heading"
          >
            <Link href="/" className="flex w-fit items-center space-x-2 relative">
              <CogIcon className="size-6" aria-hidden="true" />
              <span className="font-bold text-lg">{siteConfig.name}</span>
              <span className="text-muted-foreground absolute -right-[12px] bottom-[5px]">β</span>
            </Link>
          </section>
          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4"
          >
            {siteConfig.footerNav.map((item, index) => (
              <div key={index} className="space-y-3">
                <ul className="space-y-2.5">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? "_blank" : undefined}
                        rel={link?.external ? "noreferrer" : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
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
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            Built by{" "}
            <Link
              href="https://github.com/alekseytsvetkov"
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:text-foreground"
            >
              base
              <span className="sr-only">Github</span>
            </Link>
            .
          </div>
          <div className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="size-4" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </Link>
            {/* <ModeToggle /> */}
          </div>
        </section>
      </section>
    </footer>
  )
}
