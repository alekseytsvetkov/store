import { PrismaAdapter } from '@auth/prisma-adapter';
import type { Role, RoleTypes, User } from '@store/db/types';
import DiscordProvider from 'next-auth/providers/discord';
import { prisma } from '@store/db';
import NextAuth from './next-auth';

export type { Session, DefaultSession as DefaultAuthSession } from 'next-auth';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session {
    user: User & { role: RoleTypes[] };
  }
}

declare module '@auth/core/adapters' {
  interface AdapterUser extends User {
    roles: Role[];
  }
}

if (!process.env.DISCORD_CLIENT_ID) {
  throw new Error('No DISCORD_CLIENT_ID has been provided.');
}

if (!process.env.DISCORD_CLIENT_SECRET) {
  throw new Error('No DISCORD_CLIENT_SECRET has been provided.');
}

const useSecureCookies = process.env.VERCEL_ENV === 'production';
const cookiePrefix = useSecureCookies ? '__Secure-' : '';
const cookieDomain = useSecureCookies ? 'store.dev' : undefined;

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: '/login',
  },
  cookies: {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        domain: cookieDomain,
        secure: useSecureCookies,
      },
    },
  },
  adapter: {
    ...PrismaAdapter(prisma),
    // Override createUser method to add default USER role
    createUser: async (data) => {
      const user = await prisma.user.create({
        data: {
          ...data,
          name: data.name ?? '',
          roles: {
            connectOrCreate: {
              where: { role: 'USER' },
              create: { role: 'USER' },
            },
          },
        },
        include: { roles: true },
      });
      return user;
    },
    // Override getSessionAndUser method to include roles. Avoids a second db query in session callback
    getSessionAndUser: async (sessionToken) => {
      const userAndSession = await prisma.session.findUnique({
        where: { sessionToken },
        include: { user: { include: { roles: true } } },
      });
      if (!userAndSession) return null;
      const { user, ...session } = userAndSession;
      return { user, session };
    },
  },
  callbacks: {
    session: async (opts) => {
      if (!('user' in opts)) throw new Error("unreachable, we're not using JWT");

      const { session, user } = opts;
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          role: user.roles.map((r) => r.role),
        },
      };
    },
  },
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      profile(profile) {
        if (profile.avatar === null) {
          const defaultAvatarNumber = parseInt(profile.discriminator) % 5
          profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
        } else {
          const format = profile.avatar.startsWith("a_") ? "gif" : "png"
          profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`
        }
        return {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: profile.image_url,
        }
      },
    }),
  ],
});
