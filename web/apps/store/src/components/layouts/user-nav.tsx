import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@store/ui/components/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@store/ui/components/avatar';
import { Button } from '@store/ui/components/Button';
import { useState } from 'react';
import { signIn, signOut, useSession } from '@store/auth/react';
import { RoleTypes } from '@store/db/types';
import { CogIcon, Loader2, LogIn, LogOutIcon, StoreIcon, UserCircleIcon } from '@store/ui/icons';
import { cn } from '@store/ui/cn';
import Link from 'next/link';
import { useScopedI18n } from '~/locales/client';

export  function UserNav() {
  const t = useScopedI18n('common');

  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();

  const isAdmin = session?.user?.role?.includes(RoleTypes.ADMIN);
  const isMod = session?.user?.role?.includes(RoleTypes.MODERATOR);
  const isAdminOrMod = isAdmin || isMod;

  // NOTE: 1. loading == true -> 2. signIn() -> 3. session status == 'loading' (loading == false)
  const handleSignIn = async () => {
    try {
      setLoading(true);
      // page reloads after sign in, so no need to setLoading(false), othersiwe ugly visual glitch
      await signIn('discord', { redirect: false });
    } catch (error) {
      // only set loading to false if there was an error and page didn't reload after sign in
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    // whatever
    window.location.reload();
  };

  return session ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="relative">
          <span className="mr-2">{session.user.name}</span>
          <Avatar className="h-6 w-6">
            <AvatarImage
              src={session.user.image ?? ''}
              alt={session.user.name ?? 'user'}
              height={6}
              width={6}
            />
            <AvatarFallback>{session.user.name}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <Link href={`/user/${session.user.name}`} suppressHydrationWarning>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{session.user.name}</p>
              <p className="text-muted-foreground text-xs leading-none">{session.user.email}</p>
            </div>
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="hover:cursor-pointer">
            <Link href="/support" suppressHydrationWarning>
              <StoreIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              {t('help')}
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="hover:cursor-pointer">
            <Link href="/settings" suppressHydrationWarning>
              <CogIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              {t('settings')}
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="hover:cursor-pointer" onClick={handleSignOut}>
            <Link href="/" suppressHydrationWarning>
              <LogOutIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              {t('logout')}
              <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Button
      variant="outline"
      className={cn(
        'focus:bg-accent w-20 rounded-lg bg-transparent p-2 text-black duration-300 hover:bg-gray-200 focus:outline-none dark:text-white hover:dark:bg-accent',
        loading || (status === 'loading' && 'w-10'),
      )}
      disabled={loading || status === 'loading'}
      onClick={handleSignIn}
    >
      {loading || status === 'loading' ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <div className="flex items-center space-x-2">
          <LogIn className="h-5 w-5" />
          <span className="dark:text-white">{t('login')}</span>
        </div>
      )}
    </Button>
  );
}
