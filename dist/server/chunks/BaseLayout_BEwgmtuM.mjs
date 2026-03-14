import { f as createComponent, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, i as createAstro } from './astro/server_Cor0hUFc.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Product design portfolio" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-white text-gray-900 antialiased"> <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100"> <div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between"> <a href="/" class="text-sm font-medium tracking-tight hover:text-gray-500 transition-colors">
Your Name
</a> <div class="flex items-center gap-8 text-sm"> <a href="/" class="hover:text-gray-500 transition-colors">Work</a> <a href="/about" class="hover:text-gray-500 transition-colors">About</a> <a href="/contact" class="hover:text-gray-500 transition-colors">Contact</a> </div> </div> </nav> <main class="pt-14"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="border-t border-gray-100 mt-24"> <div class="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-gray-400"> <span>© ${(/* @__PURE__ */ new Date()).getFullYear()} Your Name</span> <a href="mailto:you@example.com" class="hover:text-gray-900 transition-colors">
you@example.com
</a> </div> </footer> </body></html>`;
}, "/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
