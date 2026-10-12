import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { readSiteDomain } from './read-site-domain.mjs';

const root = process.cwd();

function stripDistRedirectsBeforeExit(code = 0) {
  spawnSync(process.execPath, [path.join(root, 'scripts/strip-dist-redirects.mjs')], {
    cwd: root,
    stdio: 'inherit',
  });
  process.exit(code);
}
const dist = path.join(root, 'dist');
const key = process.env.INDEXNOW_KEY?.trim();
const host = process.env.INDEXNOW_HOST?.trim() || readSiteDomain();

if (!key) {
  console.log('IndexNow: skipped (INDEXNOW_KEY not set).');
  stripDistRedirectsBeforeExit(0);
}

const sitemapPath = path.join(dist, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.warn('IndexNow: dist/sitemap.xml missing — skipping ping.');
  stripDistRedirectsBeforeExit(0);
}

const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]).slice(0, 10000);

if (urlList.length === 0) {
  console.warn('IndexNow: no URLs found in sitemap.');
  stripDistRedirectsBeforeExit(0);
}

const keyFile = path.join(dist, `${key}.txt`);
fs.writeFileSync(keyFile, key, 'utf8');

const payload = {
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList,
};

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

if (response.ok) {
  console.log(`IndexNow: submitted ${urlList.length} URL(s) (HTTP ${response.status}).`);
} else {
  const body = await response.text();
  console.warn(`IndexNow: ping failed HTTP ${response.status}: ${body.slice(0, 200)}`);
}

stripDistRedirectsBeforeExit(0);
