# Deploy on Cloudflare (dota2hacks.org)

Static Astro site → **`dist/`**. Git repo: **`notfaadi/dotahacks`**, Worker name: **`dotahacks`**.

See **[CLOUDFLARE.md](../CLOUDFLARE.md)** for the dashboard copy-paste table.

## Site down after deleting the Worker

1. Cloudflare dashboard → **Workers & Pages** → **Create** → connect **`notfaadi/dotahacks`**, branch **`main`**.
2. **Build command:** `npm run build`
3. **Deploy command:** `npm run deploy` (runs `node scripts/wrangler-deploy.mjs`)
4. Attach custom domain **`dota2hacks.org`** (and www redirect rule).
5. Deploy **latest `main`** — not an old commit.

**Important:** Do not manually redeploy old commits (for example `ed9280e`) — they include `public/_redirects` with absolute URLs and will always fail Wrangler deploy. Deploy **latest `main`** only.

## Workers Builds — required settings

| Setting | Value |
|--------|--------|
| **Build command** | `npm run build` |
| **Deploy command** | `npm run deploy` |

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
