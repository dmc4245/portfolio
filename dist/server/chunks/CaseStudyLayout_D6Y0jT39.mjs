import { f as createComponent, j as renderComponent, r as renderTemplate, i as createAstro, m as maybeRenderHead, h as addAttribute, l as renderSlot } from './astro/server_Cor0hUFc.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_BEwgmtuM.mjs';

const $$Astro = createAstro();
const $$CaseStudyLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CaseStudyLayout;
  const {
    title,
    description,
    hero,
    role,
    timeline,
    tools,
    tags = []
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${hero && renderTemplate`${maybeRenderHead()}<div class="w-full bg-gray-50 overflow-hidden" style="max-height: 560px;"> <img${addAttribute(hero, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover" style="max-height: 560px;"> </div>`}<div class="max-w-3xl mx-auto px-6 py-16"> <!-- Header --> <div class="mb-12"> <div class="flex flex-wrap gap-2 mb-4"> ${tags.map((tag) => renderTemplate`<span class="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full"> ${tag} </span>`)} </div> <h1 class="text-4xl font-semibold tracking-tight mb-4">${title}</h1> ${description && renderTemplate`<p class="text-xl text-gray-500 leading-relaxed">${description}</p>`} </div> <!-- Metadata --> ${(role || timeline || tools) && renderTemplate`<div class="grid grid-cols-3 gap-6 py-8 border-y border-gray-100 mb-12 text-sm"> ${role && renderTemplate`<div> <p class="text-gray-400 mb-1">Role</p> <p class="font-medium">${role}</p> </div>`} ${timeline && renderTemplate`<div> <p class="text-gray-400 mb-1">Timeline</p> <p class="font-medium">${timeline}</p> </div>`} ${tools && renderTemplate`<div> <p class="text-gray-400 mb-1">Tools</p> <p class="font-medium">${tools}</p> </div>`} </div>`} <!-- Content --> <div class="prose prose-gray max-w-none"> ${renderSlot($$result2, $$slots["default"])} </div> <!-- Back link --> <div class="mt-16 pt-8 border-t border-gray-100"> <a href="/" class="text-sm text-gray-400 hover:text-gray-900 transition-colors">
← Back to work
</a> </div> </div> ` })}`;
}, "/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/layouts/CaseStudyLayout.astro", void 0);

export { $$CaseStudyLayout as $ };
