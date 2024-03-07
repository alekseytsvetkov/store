import { BellIcon, CogIcon, WalletIcon } from '@store/ui/icons';
import Link from 'next/link';
import { siteConfig } from '~/config/site';
import { ModeToggle } from './mode-toggle';
import { LanguageSwitcher } from './language-switcher';
import { Search } from './search';
import { UserNav } from './user-nav';
import { Button } from '@store/ui/components/button';
import { CatalogMenu } from './catalog-menu';

export async function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <nav className="container flex h-16 items-center px-4 text-sm font-medium text-slate-800 dark:text-slate-300">
        <div className="grid w-full">
          <div className="col-span-2 flex items-center justify-start gap-2">
            <Link href="/" className="relative mr-4 flex w-fit items-center space-x-2">
              <CogIcon className="size-6" aria-hidden="true" />
              <span className="text-lg font-bold">{siteConfig.name}</span>
              <span className="text-muted-foreground absolute -right-[12px] bottom-[5px]">β</span>
            </Link>
            <CatalogMenu />
            <Search />
            <ModeToggle />
            <LanguageSwitcher />
            <Button variant="outline" size="icon">
              <BellIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button variant="outline">
              <WalletIcon className="h-[1.2rem] w-[1.2rem]" />
              <span className="ml-2">0 ₽</span>
            </Button>
            <UserNav />
          </div>
        </div>
      </nav>
    </header>
  );
}
