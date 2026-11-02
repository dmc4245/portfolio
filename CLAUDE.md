# Portfolio – Claude Code Guide

## Site
- **URL**: https://dianaminjichun.com
- **Owner**: Diana Minji Chun — product designer at Microsoft
- **Hosted**: Netlify (auto-deploys on push to main)

## Stack
- **Framework**: Astro (hybrid output mode)
- **Styling**: Tailwind CSS via `@astrojs/tailwind`
- **Fonts**: Inter (body), IBM Plex Mono (h2 headings), Poppins — loaded from Google Fonts
- **Adapter**: `@astrojs/netlify`
- **Node**: 20

## Breakpoints (custom — not Tailwind defaults)
- `tablet`: 810px+
- `desktop`: 1200px+

## Colors
- Background: `#F6F7F1` (off-white)
- Accent / logo: `#FEC202` (yellow)
- Text: `text-gray-500` (body), `text-gray-400` (labels/muted)

## File Structure
```
src/
  layouts/
    BaseLayout.astro      — global HTML shell, nav, footer
    CaseStudyLayout.astro — layout for project case studies
  pages/
    index.astro           — homepage (hero + project list)
    about.astro
    contact.astro
    work/
      project-1.astro     — case studies (export `projectMeta`)
      project-3.astro
  archive/
    work/                 — archived case studies (not routed; move back to restore)
  components/
    ProjectCard.astro     — card used on homepage work list
    ImageGallery.astro
    ImageLightbox.astro
    VimeoEmbed.astro
    Icon.astro
public/
  images/                 — project screenshots and GIFs
  icons/                  — SVG sprite (sprite.svg), brand logos
```

## Adding / Editing Projects
Each `work/project-N.astro` exports a `projectMeta` object at the top:
```js
export const projectMeta = {
  title: '',
  description: '',
  href: '/work/project-N',
  tags: ['Tag1', 'Tag2'],
  locked: false,        // shows a 🔒 in the card meta (no password gate exists)
  date: 'YYYY',
  image: '/images/filename.png',
};
```
The homepage and the header Work menu automatically pick up all project files — no manual list to update. Order is by file name; add `order: 1` (2, 3…) to `projectMeta` to pin a project to the top (co-design, project-6, is pinned first).

## Design Notes
- Nav logo animates from "Diana Minji Chun" text → decorative SVG icons on hover
- Inline SVG icons use a sprite sheet at `/icons/sprite.svg`
- h2 tags are globally styled as IBM Plex Mono (set in BaseLayout `<style is:global>`)
- Body uses Inter; Poppins is available via `font-poppins` Tailwind class

## Case Study Side Nav (preferred pattern — use on case study pages)
Diana wants this section nav on case study pages going forward. Use the `SectionNav` component (`src/components/SectionNav.astro`) with an `items` list of `{ id, label }`; see `project-1.astro` and `project-6.astro`.
- Vertical timeline: thin gray line, a dot per item, plain text labels (no buttons)
- First item is **Context** (anchors the Overview `h2`), then the page's main sections (e.g. Theory / Action / Change)
- Desktop (1200px+): fixed to the left of the article, always visible
- Scroll-spy: the current section's label turns bold `text-gray-900` and its dot fills `bg-gray-900`; Context is active until the first section is reached
- Clicking an item smooth-scrolls to the section (targets use `scroll-mt-20`)
- Below desktop: same list renders inline under the intro/Process area

## Dev Commands
```bash
npm run dev      # localhost:4321
npm run build    # builds to dist/
```

## Deploy
Push to `main` → Netlify auto-deploys.
Build command: `npm run build` | Publish dir: `dist`
