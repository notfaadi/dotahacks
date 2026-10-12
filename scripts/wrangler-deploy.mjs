#!/usr/bin/env node
/**
 * Cloudflare Workers Builds deploy step — strips dist/_redirects, then uploads static assets.
 * Dashboard: Deploy command = `npm run deploy` (not bare `npx wrangler deploy`).
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const strip = path.join(root, 'scripts', 'strip-dist-redirects.mjs');
const wranglerJs = path.join(root, 'node_modules', 'wrangler', 'bin', 'wrangler.js');

const stripRun = spawnSync(process.execPath, [strip], { cwd: root, stdio: 'inherit' });
if (stripRun.status !== 0) process.exit(stripRun.status ?? 1);

if (!fs.existsSync(wranglerJs)) {
  console.error('Missing wrangler — run npm ci before deploy.');
  process.exit(1);
}

const env = {
  ...process.env,
  CI: 'true',
  WRANGLER_SEND_METRICS: 'false',
};

const wrangler = spawnSync(
  process.execPath,
  [wranglerJs, 'deploy', '--config', 'wrangler.toml'],
  { cwd: root, stdio: 'inherit', env },
);

process.exit(wrangler.status ?? 1);

