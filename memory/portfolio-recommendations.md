---
name: portfolio-recommendations
description: Recommendations for improving the portfolio website
metadata:
  type: feedback
---

**SEO and Crawlability**
- The current `robots.txt` blocks the entire `/assets/` directory, preventing search engines from loading images used in the Open Graph, favicon, and CSS/JS files. This can severely hurt SEO and social media preview generation.
- Remove `Disallow: /assets/` or add `Allow: /assets/` to enable crawlers to fetch images and assets.
- Add a `<meta name="robots" content="index,follow">` tag to explicitly allow indexing.
- Consider adding `<meta name="google-site-verification" content="YOUR_KEY">` if you plan to verify ownership.

**Performance**
- Use `loading="lazy"` on all non‑hero images (e.g., in blog cards or portfolio items). The hero image is correctly set with width/height; consider adding `loading="eager"` to emphasize it.
- Minify and combine the `style.css` and `script.js` files to reduce HTTP requests. Tools like `html-minifier` or a build step in a CI pipeline can automate this.
- Add `<link rel="preload" as="image" href="assets/arms-crossed.webp"/>` to pre‑load the hero image for faster first paint.
- Add a `<link rel="preload" as="style" href="assets/style.css"/>` and `<link rel="preload" as="script" href="assets/script.js"/>` to hint the browser to load critical assets earlier.

**Accessibility**
- Add a *skip‑to‑content* link at the top of the page: `<a href="#main" class="skip-link">Skip to content</a>`. This helps screen‑reader users.
- The navigation toggle button should include `aria-controls="nav-links"` and `id="nav-links"` on the `<ul>` for better accessibility.
- Provide `alt` text for social icons or use `aria-label` attributes on the `<a>` elements.
- Ensure color contrast meets WCAG AA; the current palette provides a 4.5:1 contrast for text on the main background.

**SEO Structured Data**
- Add an Organization schema for Northrop Grumman in the JSON‑LD. Example:

```html
<script type="application/ld+json">
{\n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "name": "Northrop Grumman",\n  "url": "https://www.northropgrumman.com/",\n  "logo": "https://thechef613.github.io/portfolio/assets/brand-logo.png"\n}
</script>
```
- If the site hosts multiple blog posts, generate a `BlogPosting` schema for each `blog_mbse.html` page.

**Security**
- Add a `Content‑Security‑Policy` meta tag to restrict scripts, styles, and images to the same origin:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self'; img-src 'self' data:" />
```
- Avoid inline scripts; `script.js` is external, which is good.
- Consider adding `X-Content-Type-Options: nosniff` and `X-Frame-Options: SAMEORIGIN` headers if served via a web server.

**Miscellaneous**
- The `robots.txt` blocks GPTBot, ClaudeBot, etc. If you want to allow these bots for indexing or content generation, remove those blocks.
- The `print` CSS hides the navigation and social links, which is intentional. Ensure that the `print` button is not rendered when printing (`@media print`).
- Add `rel="preconnect"` for `https://fonts.gstatic.com` (already present). Consider adding `preconnect` for the site's own origin for faster subresource loading.
- Consider a service worker for offline caching if the portfolio is intended to be accessed offline.

**Implementation Steps**
1. Edit `robots.txt` to allow `/assets/`.
2. Add `loading="lazy"` to all images except the hero.
3. Minify CSS/JS and add preload links.
4. Add accessibility improvements.
5. Add the Organization schema.
6. Add CSP meta tag.

**Impact**
- Improves SEO visibility and social preview quality.
- Faster page loads and reduced data usage.
- Better accessibility for screen‑reader users.
- Harder for malicious scripts to execute by limiting sources.
