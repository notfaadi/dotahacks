/** Canonical production domain — change here before deploy (sitemap, IndexNow, OG, JSON-LD). */
export const SITE_DOMAIN = 'dota2hacks.org';
/** Apex host only (no www) — used for canonical and hreflang. */
export const CANONICAL_ORIGIN = `https://${SITE_DOMAIN}`;
export const SITE_URL = CANONICAL_ORIGIN;
export const PRODUCT_BASE = '/products/dota-2-cheats/';
/** Bump yearly in titles for freshness (Search Console / SERP). */
export const SEO_YEAR = '2026';
/** Primary SERP phrases (homepage + default meta). */
export const TITLE_PREFIX = 'Dota 2 Hacks & Cheats';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;
