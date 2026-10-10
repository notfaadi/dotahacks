import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

for (const rel of ['dist/_redirects', 'public/_redirects']) {
  const file = path.join(root, ...rel.split('/'));
  if (!fs.existsSync(file)) continue;
  fs.unlinkSync(file);
  console.log(`Removed ${rel} (use Cloudflare Redirect Rules for www/HTTPS).`);
}

const assetsIgnore = path.join(root, 'dist', '.assetsignore');
if (fs.existsSync(path.join(root, 'dist'))) {
  const lines = ['_redirects', '_routes.json', '_worker.js'];
  const existing = fs.existsSync(assetsIgnore) ? fs.readFileSync(assetsIgnore, 'utf8') : '';
  const merged = [...new Set([...existing.split(/\r?\n/).filter(Boolean), ...lines])].join('\n') + '\n';
  fs.writeFileSync(assetsIgnore, merged);
}
