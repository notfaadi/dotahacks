# Deploy on Cloudflare (dota2hacks)

Static Astro site → **`dist/`**.

## Workers Builds — required settings

| Setting | Value |
|--------|--------|
| **Build command** | `npm run build` |
| **Deploy command** | `npm run cf:upload` |

Do **not** use bare `npx wrangler deploy` — Wrangler may auto-run `astro add cloudflare` and fail the build.

`wrangler.toml` and `wrangler.jsonc` are committed (static assets only).

## Cloudflare Pages (alternative)

- Build: `npm run build`
- Output directory: `dist`
- **Deploy command: leave empty**

## After deploy

Hard-refresh the site. Header should show **Dota 2** + **Hacks** (purple).
