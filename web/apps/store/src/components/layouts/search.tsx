'use client';

import { Dialog, DialogContent, DialogTrigger } from '@store/ui/components/dialog';
import { Button } from '@store/ui/components/button';
import { useEffect, useState } from 'react';
import { SearchIcon } from '@store/ui/icons';
import { isMacOs } from '~/lib/utils';
import { useScopedI18n } from '~/locales/client';

export function Search() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <SearchBar setOpen={setOpen} />
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-full gap-0 overflow-hidden rounded-sm p-0 sm:rounded-sm md:max-w-[75vw] lg:max-w-[60vw] xl:max-h-[60vh]">
        Content
      </DialogContent>
    </Dialog>
  );
}

function SearchBar({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const t = useScopedI18n('common');

  return (
    <>
      {/* Mobile Bar */}
      <button
        aria-label="mobile search icon"
        className="rounded-lg p-2 focus:outline-none focus-visible:ring-2 lg:hidden"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="h-5 w-5" />
      </button>

      {/* Desktop Bar */}
      <Button
        variant="outline"
        className="text-muted-foreground relative hidden w-64 justify-between gap-3 text-sm lg:inline-flex w-full"
        onClick={() => setOpen(true)}
      >
        <SearchIcon />
        <span className="sm:hidden">{t('search')}</span>
        <span className="hidden w-20 truncate text-left sm:inline-block md:w-full">
          {t('search')}
        </span>
        {/* <span className="text-xs">⌘K</span> */}
        <kbd className="bg-muted pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <abbr title={isMacOs() ? 'Command' : 'Control'} className="no-underline">
            {isMacOs() ? '⌘' : 'Ctrl'}
          </abbr>
          K
        </kbd>
      </Button>
    </>
  );
}
