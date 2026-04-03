import { defineMiddleware } from 'astro:middleware';

const COOKIE_NAME = 'portfolio_auth';
const AUTH_TOKEN = 'authenticated';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Protect only locked case study pages
  const lockedPaths = ['/work/project-1', '/work/project-2', '/work/project-3'];
  const isProtected = lockedPaths.some(p => pathname.startsWith(p));

  if (isProtected) {
    const authCookie = context.cookies.get(COOKIE_NAME);
    const [token, expiresStr] = authCookie?.value?.split(':') ?? [];
    const valid = token === AUTH_TOKEN && Number(expiresStr) > Date.now();
    if (!valid) {
      const redirectTo = encodeURIComponent(pathname);
      return context.redirect(`/unlock?redirect=${redirectTo}`);
    }
  }

  return next();
});
