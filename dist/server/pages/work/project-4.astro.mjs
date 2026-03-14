/* empty css                                    */
import { f as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cor0hUFc.mjs';
import 'kleur/colors';
import { $ as $$CaseStudyLayout } from '../../chunks/CaseStudyLayout_D6Y0jT39.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Project4 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CaseStudyLayout", $$CaseStudyLayout, { "title": "Project Four", "description": "A one-sentence summary of what this project was and the impact it had.", "role": "Lead Product Designer", "timeline": "Jan \u2013 Mar 2025", "tools": "Figma, FullStory, Jira", "tags": ["Redesign", "E-commerce"] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Overview</h2> <p>Replace this with your project overview.</p> <h2>Problem</h2> <p>Describe the problem you were solving.</p> <h2>Process</h2> <p>Walk through your design process.</p> <h2>Solution</h2> <p>Describe the final design.</p> <h2>Outcome</h2> <p>Share the results.</p> ` })}`;
}, "/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/work/project-4.astro", void 0);

const $$file = "/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/work/project-4.astro";
const $$url = "/work/project-4";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Project4,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
