#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const strip = path.join(root, 'scripts', 'strip-dist-redirects.mjs');
const wrangler = path.join(root, 'node_modules', 'wrangler', 'bin', 'wrangler.js');

const stripRun = spawnSync(process.execPath, [strip], { cwd: root, stdio: 'inherit' });
if (stripRun.status !== 0) process.exit(stripRun.status ?? 1);

const args = process.argv.slice(2);
const run = spawnSync(process.execPath, [wrangler, ...args], { cwd: root, stdio: 'inherit' });
process.exit(run.status ?? 1);
