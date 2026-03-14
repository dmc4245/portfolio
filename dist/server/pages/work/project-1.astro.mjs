/* empty css                                    */
import { f as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cor0hUFc.mjs';
import 'kleur/colors';
import { $ as $$CaseStudyLayout } from '../../chunks/CaseStudyLayout_D6Y0jT39.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Project1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CaseStudyLayout", $$CaseStudyLayout, { "title": "Project One", "description": "A one-sentence summary of what this project was and the impact it had.", "role": "Lead Product Designer", "timeline": "Jan \u2013 Apr 2024", "tools": "Figma, Protopie, Dovetail", "tags": ["UX Research", "Product Design", "Mobile"] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Overview</h2> <p>
Describe the product and company context here. What was the product,
    who used it, and why did it matter? Keep this to 2–3 sentences.
</p> <h2>Problem</h2> <p>
What specific problem were you solving? What was the pain point for users,
    and what was the business impact if left unsolved?
</p>  <h2>Process</h2> <p>
Walk through your design process. What methods did you use? What did you
    discover? How did it shape your decisions?
</p>  <h2>Solution</h2> <p>
Describe the final design. What did you ship? Include the key decisions
    you made and why.
</p> <h2>Outcome</h2> <p>
What happened after launch? Include metrics, qualitative feedback,
    or business results where possible.
</p> ` })}`;
}, "/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/work/project-1.astro", void 0);

const $$file = "/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/work/project-1.astro";
const $$url = "/work/project-1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Project1,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
