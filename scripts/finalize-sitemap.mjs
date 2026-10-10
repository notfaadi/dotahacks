import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');

/** Find sitemap-0.xml (static: dist/; Cloudflare adapter: dist/client/). */
function findSitemapSource() {
  const direct = path.join(dist, 'sitemap-0.xml');
  if (fs.existsSync(direct)) return { file: direct, outDir: dist };

  const client = path.join(dist, 'client', 'sitemap-0.xml');
  if (fs.existsSync(client)) {
    return { file: client, outDir: path.join(dist, 'client') };
  }

  if (!fs.existsSync(dist)) return null;

  const stack = [dist];
  while (stack.length) {
    const dir = stack.pop();
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
        continue;
      }
      if (entry.name === 'sitemap-0.xml') {
        return { file: full, outDir: dir };
      }
    }
  }
  return null;
}

const located = findSitemapSource();
if (!located) {
  console.warn(
    'finalize-sitemap: no sitemap-0.xml under dist/ — skipping (post-build step optional).',
  );
  process.exit(0);
}

const { file: source, outDir: distRoot } = located;

const { SITE_URL } = await import('../src/config/site.ts');

const raw = fs.readFileSync(source, 'utf8');
const urlCount = (raw.match(/<url>/g) ?? []).length;

if (urlCount === 0) {
  console.error('finalize-sitemap: sitemap-0.xml contains no URLs.');
  process.exit(1);
}

function formatUrlset(xml) {
  return xml
    .replace(/^<\?xml[^?]*\?>/, '<?xml version="1.0" encoding="UTF-8"?>\n')
    .replace(/<urlset([^>]*)>/, '<urlset$1>\n')
    .replace(/<\/urlset>/, '\n</urlset>\n')
    .replace(/<url>/g, '  <url>\n')
    .replace(/<\/url>/g, '\n  </url>\n')
    .replace(/<loc>/g, '    <loc>')
    .replace(/<\/loc>/g, '</loc>\n')
    .replace(/<lastmod>/g, '    <lastmod>')
    .replace(/<\/lastmod>/g, '</lastmod>\n')
    .replace(/<changefreq>/g, '    <changefreq>')
    .replace(/<\/changefreq>/g, '</changefreq>\n')
    .replace(/<priority>/g, '    <priority>')
    .replace(/<\/priority>/g, '</priority>\n');
}

const formatted = formatUrlset(raw);
fs.writeFileSync(path.join(distRoot, 'sitemap.xml'), formatted, 'utf8');

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(distRoot, 'sitemap-index.xml'), indexXml, 'utf8');
fs.writeFileSync(path.join(distRoot, 'sitemap-0.xml'), formatted, 'utf8');

console.log(`Sitemap finalized: ${urlCount} URLs → ${path.relative(root, distRoot)}/sitemap.xml`);
