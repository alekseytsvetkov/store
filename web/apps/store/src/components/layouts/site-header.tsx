import { BellIcon, CogIcon, WalletIcon } from '@store/ui/icons';
import Link from 'next/link';
import { siteConfig } from '~/config/site';
import { ModeToggle } from './mode-toggle';
import { LanguageSwitcher } from './language-switcher';
import { Search } from './search';
import { UserNav } from './user-nav';
import { Button } from '@store/ui/components/button';

export async function SiteHeader() {
  return (
    <header className="relative w-full border-b">
      <nav className="container flex h-16 items-center px-4 text-sm font-medium text-slate-800 dark:text-slate-300">
        <div className="grid w-full md:grid-cols-3">
          <div className="flex items-center justify-start gap-2 col-span-2">
            <Link href="/" className="flex w-fit items-center space-x-2 relative mr-4">
              <CogIcon className="size-6" aria-hidden="true" />
              <span className="font-bold text-lg">{siteConfig.name}</span>
              <span className="text-muted-foreground absolute -right-[12px] bottom-[5px]">β</span>
            </Link>
            {/* <CatalogMenu /> */}
            <Search />
          </div>
          <div className="flex items-center justify-end gap-2">
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
