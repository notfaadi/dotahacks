# Deploy on Cloudflare (dota2hacks)

Static Astro site. Build output: **`dist/`** (HTML at `dist/index.html`).

## Required: `wrangler.toml` in the repo

Cloudflare runs **`npx wrangler deploy`** on your project. Without `wrangler.toml`, Wrangler **auto-installs `@astrojs/cloudflare`**, runs a **second build**, and deploy fails.

This repo includes **`wrangler.toml`** (static assets only). Keep it committed.

## Workers Builds (your current setup)

| Setting | Value |
|--------|--------|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy --config wrangler.toml` |

Do **not** use bare `npx wrangler deploy` until `wrangler.toml` is on the branch Cloudflare builds.

After a successful deploy, attach **dota2hacks.org** under **Domains**.

## Cloudflare Pages (alternative)

1. Create a **Pages** project from GitHub `notfaadi/dota2hacks`.
2. Build: `npm run build`
3. Output directory: `dist`
4. **Deploy command: leave empty**

## Before go-live

Set **`SITE_DOMAIN`** in `src/config/site.ts`, then redeploy.
