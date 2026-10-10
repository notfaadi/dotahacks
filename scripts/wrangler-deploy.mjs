#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const strip = path.join(root, 'scripts', 'strip-dist-redirects.mjs');

const stripRun = spawnSync(process.execPath, [strip], { cwd: root, stdio: 'inherit' });
if (stripRun.status !== 0) process.exit(stripRun.status ?? 1);

const wrangler = spawnSync(
  'npx',
  ['wrangler', 'deploy', '--config', 'wrangler.toml'],
  { cwd: root, stdio: 'inherit', shell: true },
);
process.exit(wrangler.status ?? 1);
