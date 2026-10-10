import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const wrapper = path.join(root, 'scripts', 'wrangler-bin-wrapper.mjs');
const binDir = path.join(root, 'node_modules', '.bin');

if (!fs.existsSync(binDir) || !fs.existsSync(wrapper)) {
  process.exit(0);
}

const unixBin = path.join(binDir, 'wrangler');
if (fs.existsSync(unixBin)) {
  fs.writeFileSync(
    unixBin,
    `#!/usr/bin/env node\nimport ${JSON.stringify(pathToFileUrl(wrapper))};\n`,
    { mode: 0o755 },
  );
}

const winBin = path.join(binDir, 'wrangler.cmd');
if (fs.existsSync(winBin)) {
  fs.writeFileSync(winBin, `@ECHO off\r\nnode "${wrapper}" %*\r\n`);
}

function pathToFileUrl(filePath) {
  const resolved = path.resolve(filePath);
  return `file:///${resolved.replace(/\\/g, '/')}`;
}
