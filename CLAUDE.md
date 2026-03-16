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
    unlock.astro          — password-protected content gate
    work/
      project-1.astro     — case studies (export `projectMeta`)
      project-2.astro
      project-3.astro
      project-4.astro
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
  locked: false,        // true = password-protected
  date: 'YYYY',
  image: '/images/filename.png',
};
```
The homepage automatically picks up all project files — no manual list to update.

## Design Notes
- Nav logo animates from "Diana Minji Chun" text → decorative SVG icons on hover
- Inline SVG icons use a sprite sheet at `/icons/sprite.svg`
- h2 tags are globally styled as IBM Plex Mono (set in BaseLayout `<style is:global>`)
- Body uses Inter; Poppins is available via `font-poppins` Tailwind class

## Dev Commands
```bash
npm run dev      # localhost:4321
npm run build    # builds to dist/
```

## Deploy
Push to `main` → Netlify auto-deploys.
Build command: `npm run build` | Publish dir: `dist`
