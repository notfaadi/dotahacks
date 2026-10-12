import fs from 'node:fs';
import path from 'node:path';

/** Keep Node scripts aligned with `src/config/site.ts` without importing TypeScript. */
export function readSiteDomain(root = process.cwd()) {
  const file = path.join(root, 'src', 'config', 'site.ts');
  const src = fs.readFileSync(file, 'utf8');
  const match = src.match(/SITE_DOMAIN\s*=\s*['"]([^'"]+)['"]/);
  return match?.[1] ?? 'dota2hacks.org';
}
