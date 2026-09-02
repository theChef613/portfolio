# Yaakov Schefres Portfolio - Project Rules

## Tech Stack

- **Vanilla HTML5** — Semantic markup for all pages; no frameworks or templating engines
- **CSS3** — Plain CSS with CSS variables for theming; no preprocessors (Sass, Less) or CSS-in-JS
- **JavaScript (ES6+)** — Vanilla JS for interactivity; no libraries or frameworks
- **Google Fonts** — Inter font family loaded via Google Fonts CDN
- **SVG Icons** — Inline SVGs for icons; no icon libraries
- **Static Assets** — Images in WebP and JPG formats with fallbacks; stored in `/assets` folder
- **GitHub Pages** — Deployed as static site; no build step required
- **JSON-LD** — Structured data for SEO (Person and Organization schemas)
- **Responsive Design** — Mobile-first CSS using media queries
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards, canonical URLs

## Code Organization

- All source files go in the root directory (no `src/` folder for this static site)
- Assets (CSS, JS, images) go in the `/assets` folder
- Blog posts go in the `/blog/[slug]/` directory structure
- Each blog post has its own `index.html`

## Styling Rules

| Use | Don't use |
|-----|-----------|
| Plain CSS with CSS variables | Preprocessors (Sass, Less), CSS-in-JS |
| BEM-like naming convention | Tailwind CSS or utility frameworks |
| Inline SVGs for icons | Icon libraries (Font Awesome, etc.) |
| CSS Grid and Flexbox | CSS frameworks (Bootstrap, etc.) |

## JavaScript Rules

| Use | Don't use |
|-----|-----------|
| Vanilla ES6+ JavaScript | jQuery, React, Vue, or other JS frameworks |
| Native DOM APIs | Component libraries |
| ES modules if needed | Bundlers (Webpack, Vite) — keep it simple |

## Performance Guidelines

- Use WebP images with JPG fallbacks
- Preload critical assets (fonts, hero images, CSS)
- Lazy-load below-the-fold images
- Keep JavaScript minimal and in vanilla JS
- No build step — files are served directly

## SEO & Accessibility

- Semantic HTML5 elements (`<nav>`, `<section>`, `<article>`, `<footer>`)
- Proper heading hierarchy (one `<h1>` per page)
- ARIA labels on interactive elements
- Meta description and Open Graph tags
- JSON-LD structured data
- Skip-to-content link for keyboard users

## Git Workflow

- Commit messages should be descriptive
- Work on feature branches for significant changes
- No CI/CD pipeline needed for static hosting
