#!/usr/bin/env node
/**
 * Prerenders every route to static HTML in dist/ after the Vite client + SSR builds.
 * Also generates sitemap.xml (trailing-slash URLs to match Netlify directory serving)
 * and 404.html. Run via `npm run build`.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');

const { render } = await import(pathToFileURL(resolve(ROOT, 'dist-ssr/entry-server.js')).href);
const { serviceAreas } = await import(pathToFileURL(resolve(ROOT, 'src/data/serviceAreas.js')).href);
const { blogPosts } = await import(pathToFileURL(resolve(ROOT, 'src/data/blog.js')).href);

const SITE_URL = 'https://claytileroofrepairs.com';

const routes = [
  '/',
  '/services',
  '/contact',
  '/financing',
  '/blog',
  ...serviceAreas.map((a) => `/service-area/${a.slug}`),
  ...blogPosts.map((p) => `/blog/${p.slug}`),
];

const template = readFileSync(resolve(DIST, 'index.html'), 'utf-8');

function renderPage(url) {
  // React 19 hoists <title>/<meta>/<link> to the START of the rendered string
  // (react-helmet-async v3 delegates to native hoisting on React 19). Split at
  // the app root element: everything before it belongs in <head>. JSON-LD
  // scripts render in place inside the body — valid for search engines and
  // left there so hydration matches.
  const { html } = render(url);
  const boundary = html.indexOf('<div class="min-h-screen');
  if (boundary === -1) throw new Error(`No app root found rendering ${url}`);
  const head = html.slice(0, boundary);
  const body = html.slice(boundary);
  return template
    .replace(/<title>[\s\S]*?<\/title>/, '') // page title comes from the hoisted head
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', body);
}

let count = 0;
for (const route of routes) {
  const outPath =
    route === '/' ? resolve(DIST, 'index.html') : resolve(DIST, route.slice(1), 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, renderPage(route), 'utf-8');
  count++;
}

// 404 — Netlify serves dist/404.html with a real 404 status for unknown paths
writeFileSync(resolve(DIST, '404.html'), renderPage('/this-page-does-not-exist'), 'utf-8');

// ─── Sitemap ───────────────────────────────────────────
// Trailing-slash URLs (Netlify's served form). lastmod only where genuinely
// known (blog dates) — fabricated lastmod teaches Google to ignore the field.
function urlEntry(path, changefreq, priority, lastmod = null) {
  const loc = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`;
  const lm = lastmod ? `<lastmod>${lastmod}</lastmod>` : '';
  return `  <url><loc>${loc}</loc>${lm}<changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

const sitemapUrls = [
  urlEntry('/', 'weekly', '1.0'),
  urlEntry('/services', 'monthly', '0.9'),
  urlEntry('/contact', 'monthly', '0.9'),
  urlEntry('/financing', 'monthly', '0.7'),
  ...serviceAreas.map((a) => urlEntry(`/service-area/${a.slug}`, 'monthly', '0.9')),
  urlEntry('/blog', 'weekly', '0.8'),
  ...blogPosts.map((p) => urlEntry(`/blog/${p.slug}`, 'monthly', '0.8', p.dateModified || p.date)),
];

writeFileSync(
  resolve(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.join('\n')}\n</urlset>\n`,
  'utf-8',
);

rmSync(resolve(ROOT, 'dist-ssr'), { recursive: true, force: true });

console.log(`Prerendered ${count} pages + 404.html + sitemap.xml (${sitemapUrls.length} URLs) → dist/`);
