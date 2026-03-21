import { defineMiddleware } from 'astro:middleware';

const COOKIE_NAME = 'portfolio_auth';
const AUTH_TOKEN = 'authenticated';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Protect only locked case study pages
  const lockedPaths = ['/work/project-1', '/work/project-2'];
  const isProtected = lockedPaths.some(p => pathname.startsWith(p));

  if (isProtected) {
    const authCookie = context.cookies.get(COOKIE_NAME);
    if (!authCookie || authCookie.value !== AUTH_TOKEN) {
      const redirectTo = encodeURIComponent(pathname);
      return context.redirect(`/unlock?redirect=${redirectTo}`);
    }
  }

  return next();
});
