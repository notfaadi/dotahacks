# Cloudflare Workers Builds — `dotahacks`

Use these **exact** settings in **Workers & Pages → dotahacks → Settings → Builds**:

| Setting | Value |
|--------|--------|
| **Repository** | `notfaadi/dotahacks` |
| **Branch** | `main` |
| **Build command** | `npm run build` |
| **Deploy command** | `npm run deploy` |

Do **not** use bare `npx wrangler deploy`. It skips `_redirects` cleanup and can hang or fail on Astro static sites.

`wrangler.toml` worker **name** must match the dashboard worker: **`dotahacks`**.

After changing settings, **Retry build** on the failed deployment or push a new commit.

Custom domain: attach `dota2hacks.org` under **Domains & routes** (www redirect via Cloudflare Redirect Rules).

More detail: [docs/cloudflare-deploy.md](docs/cloudflare-deploy.md).
