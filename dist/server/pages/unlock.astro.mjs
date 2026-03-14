/* empty css                                 */
import { f as createComponent, k as renderHead, h as addAttribute, r as renderTemplate, i as createAstro } from '../chunks/astro/server_Cor0hUFc.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Unlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Unlock;
  const password = "portfolio2024";
  const redirect = Astro2.url.searchParams.get("redirect") || "/";
  let error = false;
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const submitted = data.get("password");
    if (submitted === password) {
      Astro2.cookies.set("portfolio_auth", "authenticated", {
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
        // 30 days
        httpOnly: true,
        secure: true,
        sameSite: "lax"
      });
      return Astro2.redirect(redirect);
    } else {
      error = true;
    }
  }
  return renderTemplate`<html lang="en" data-astro-cid-as4kadki> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Password Protected</title><link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-as4kadki> <div class="card" data-astro-cid-as4kadki> <div class="lock-icon" data-astro-cid-as4kadki> <svg width="18" height="18" fill="none" stroke="#71717a" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-as4kadki> <rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-astro-cid-as4kadki></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4" data-astro-cid-as4kadki></path> </svg> </div> <h1 data-astro-cid-as4kadki>Protected content</h1> <p data-astro-cid-as4kadki>This case study is password protected. Enter the password to continue.</p> <form method="POST" data-astro-cid-as4kadki> <input type="hidden" name="redirect"${addAttribute(redirect, "value")} data-astro-cid-as4kadki> <input type="password" name="password" placeholder="Enter password"${addAttribute(error ? "error-input" : "", "class")} autofocus autocomplete="current-password" data-astro-cid-as4kadki> ${error && renderTemplate`<p class="error" data-astro-cid-as4kadki>Incorrect password. Try again.</p>`} <button type="submit" data-astro-cid-as4kadki>Unlock</button> </form> <a href="/" class="back" data-astro-cid-as4kadki>← Back to home</a> </div> </body></html>`;
}, "/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/unlock.astro", void 0);
const $$file = "/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/unlock.astro";
const $$url = "/unlock";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Unlock,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
