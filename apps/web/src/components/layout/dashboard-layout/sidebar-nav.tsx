'use client';

import Link from 'next/link';
import type { SidebarNavItem } from '@/types';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { cn } from '@store/ui/cn';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { processPath } from '@/utils';

export interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarNavItem[];
}

export function SidebarNav({ items, className, ...props }: SidebarNavProps) {
  const { t } = useTranslation();
  const router = useRouter();

  const segment = processPath(router.asPath);

  if (!items?.length) return null;

  return (
    <div className={cn('flex w-full flex-col gap-2', className)} {...props}>
      {items.map((item, index) => {
        const Icon = item.icon || ChevronLeftIcon;

        return item.href ? (
          <Link
            aria-label={item.title}
            key={index}
            href={item.href}
            target={item.external ? '_blank' : ''}
            rel={item.external ? 'noreferrer' : ''}
          >
            <span
              className={cn(
                'hover:bg-muted hover:text-foreground group flex w-full items-center rounded-md border border-transparent px-2 py-1',
                item.href.includes(String(segment))
                  ? 'bg-muted text-foreground font-medium'
                  : 'text-muted-foreground',
                item.disabled && 'pointer-events-none opacity-60',
              )}
            >
              <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
              <span suppressHydrationWarning>{t(item.title)}</span>
            </span>
          </Link>
        ) : (
          <span
            key={index}
            className="text-muted-foreground flex w-full cursor-not-allowed items-center rounded-md p-2 hover:underline"
          >
            {item.title}
          </span>
        );
      })}
    </div>
  );
}
