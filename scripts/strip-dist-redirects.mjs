import fs from 'node:fs';
import path from 'node:path';

/** Workers static assets reject absolute URLs in _redirects; drop stale file from cache. */
const file = path.join(process.cwd(), 'dist', '_redirects');
if (!fs.existsSync(file)) {
  process.exit(0);
}
fs.unlinkSync(file);
console.log('Removed dist/_redirects (use Cloudflare dashboard rules for www/HTTPS).');
