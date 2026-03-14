import { d as defineMiddleware, s as sequence } from './chunks/index_BQgs4uiH.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_D5j8oUmM.mjs';
import '@astrojs/internal-helpers/path';
import 'cookie';

const COOKIE_NAME = "portfolio_auth";
const AUTH_TOKEN = "authenticated";
const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const isProtected = pathname.startsWith("/work/") && pathname !== "/work/";
  if (isProtected) {
    const authCookie = context.cookies.get(COOKIE_NAME);
    if (!authCookie || authCookie.value !== AUTH_TOKEN) {
      const redirectTo = encodeURIComponent(pathname);
      return context.redirect(`/unlock?redirect=${redirectTo}`);
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
