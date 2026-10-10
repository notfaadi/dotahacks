# Deploy on Cloudflare (dota2hacks)

Static Astro site → **`dist/`**.

## Workers Builds — required settings

| Setting | Value |
|--------|--------|
| **Build command** | `npm run build` |
| **Deploy command** | `node scripts/wrangler-deploy.mjs` or `npm run cf:upload` |

Do **not** use bare `npx wrangler deploy` — Wrangler may auto-run `astro add cloudflare` and fail the build.

`wrangler.toml` and `wrangler.jsonc` are committed (static assets only).

## Cloudflare Pages (alternative)

- Build: `npm run build`
- Output directory: `dist`
- **Deploy command: leave empty**

## www / HTTPS redirects (dashboard)

Workers **`_redirects`** cannot use absolute `https://` URLs. Do not commit `public/_redirects` with `https://` targets. The build runs `scripts/strip-dist-redirects.mjs` so a **cached `dist/_redirects`** from an old build cannot break deploy.

Set redirects in **Cloudflare → Rules → Redirect Rules**:

- `www.dota2hacks.org/*` → `https://dota2hacks.org/${1}` (301)
- Enable **SSL/TLS → Always Use HTTPS**

## After deploy

Hard-refresh the site. Header should show **Dota 2** + **Hacks** (purple).

Do **not** use bare **`npx wrangler deploy`** — it skips the pre-deploy strip. Use **`node scripts/wrangler-deploy.mjs`** instead (same as `npm run cf:upload`).

The build wipes **`dist/`** first (`prepare-dist.mjs`) and runs **`postbuild`** strip so Cloudflare’s build cache cannot restore an old `_redirects`.
