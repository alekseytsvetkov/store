import { createI18nMiddleware } from 'next-international/middleware';
import { type NextRequest } from 'next/server';

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewrite',
});

export function middleware(req: NextRequest) {
  const { VERCEL_ENV: vercelEnv, STAGING: staging = false } = process.env;

  // skip blocking the request if local or preview or staging
  if (!vercelEnv || staging) {
    // @ts-ignore
    return I18nMiddleware(req);
  }

  // @ts-ignore
  return I18nMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
