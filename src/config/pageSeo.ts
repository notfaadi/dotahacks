/**
 * Central titles/descriptions/keywords for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

import { t } from '../i18n';
import { SEO_YEAR } from './site';
import { DEFAULT_META_KEYWORDS, joinKeywords, KEYWORD_GROUPS } from './seoKeywords';

export interface PageSeoEntry {
  title: string;
  description: string;
  keywords?: string;
  /** Optional shorter copy for Open Graph / Twitter when description is long. */
  ogDescription?: string;
}

const brand = t.site.name;

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: `Dota 2 Hacks ${SEO_YEAR} | Cheats, Scripts & Aimbot for Dota 2`,
    description:
      'Download the best Dota 2 hacks and dota cheats for 2026. Undetected aimbot, ESP, maphack, scripts, and auto-combo—whether you search dota hacks or dota 2 hacks, start here.',
    ogDescription:
      'Undetected Dota 2 hacks and cheats. Aimbot, ESP, maphack, auto-combo and scripts. Free and premium. Updated for 2026.',
    keywords: DEFAULT_META_KEYWORDS,
  },
  '/products/dota-2-cheats/': {
    title: `Dota 2 Cheats – Aimbot, ESP, Scripts, Maphack | Dota 2 Hacks ${SEO_YEAR}`,
    description:
      'Compare undetected Dota 2 hacks and cheats—aimbot-style prediction, ESP, maphack, scripts, auto-combo, and skin tools. Download premium tiers for Steam ranked.',
    keywords: joinKeywords(KEYWORD_GROUPS.core, KEYWORD_GROUPS.features, KEYWORD_GROUPS.intent),
  },
  '/products/dota-2-cheats/elite/': {
    title: `Best Dota 2 Elite Hacks ${SEO_YEAR} | Premium Cheats Download`,
    description:
      'Elite Dota 2 hacks with bots, kill steal, full maphack, skin changer, and priority patch delivery. Top-rated undetected premium cheats for ranked PC.',
    keywords: joinKeywords(KEYWORD_GROUPS.intent, ['dota 2 elite hacks', 'premium dota 2 hacks']),
  },
  '/products/dota-2-cheats/hwid-spoofer/': {
    title: `Dota 2 HWID Spoofer ${SEO_YEAR} | PC Reset After Ban`,
    description:
      'HWID spoofer for Dota 2 on Windows—rotate disk, MAC, and GPU IDs before Steam. Pair with undetected Dota 2 cheats after hardware restrictions.',
    keywords: joinKeywords(KEYWORD_GROUPS.safety, ['dota 2 hwid spoofer', 'dota 2 hack tool']),
  },
  '/products/dota-2-cheats/ugc/': {
    title: `Dota 2 UGC & Account Recovery ${SEO_YEAR}`,
    description:
      'Appeal workflows for Steam restrictions, VAC holds, and account recovery tied to Dota 2—documentation before you reinstall hacks or scripts.',
    keywords: joinKeywords(KEYWORD_GROUPS.safety, KEYWORD_GROUPS.core),
  },
  '/products/dota-2-cheats/unlock-all/': {
    title: `Dota 2 Skin Changer ${SEO_YEAR} | Unlock All Cosmetics`,
    description:
      'Local Dota 2 skin changer—preview arcanas, immortals, and sets client-side. Works alongside undetected maphack and script tiers.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 unlock all', 'dota 2 mod menu']),
  },
  '/products/dota-2-cheats/utilities/': {
    title: `Dota 2 Hack Utilities ${SEO_YEAR} | HWID, UGC & Skins`,
    description:
      'Compare HWID spoofer, UGC recovery, and skin changer utilities for Dota 2 players—when each tool fits before you download cheat tiers.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, KEYWORD_GROUPS.safety),
  },
  '/blog/': {
    title: `Dota 2 Hacks Guides ${SEO_YEAR} | Scripts, Maphack & VAC`,
    description:
      'Dota 2 hacks guides: install maphack, tune scripts and auto-combo, patch-day VAC checks, Lite vs Pro, and safe download workflows for 2026.',
    keywords: joinKeywords(KEYWORD_GROUPS.core, KEYWORD_GROUPS.safety, ['dota 2 hacks download']),
  },
  '/forum/': {
    title: `Dota 2 Hacks Forum ${SEO_YEAR} | Cheats Q&A`,
    description:
      'Community Q&A on Dota 2 hacks—aimbot, ESP, maphack, scripts, VAC safety, install help, and tier picks. Answers linked to our guides.',
    keywords: joinKeywords(KEYWORD_GROUPS.forum, KEYWORD_GROUPS.core),
  },
  '/faq/': {
    title: `Dota 2 Hacks FAQ ${SEO_YEAR} | Bannable? Install & Tiers`,
    description:
      `Are Dota 2 hacks bannable? How to install cheats, free vs premium tiers, VAC updates, and checkout—answers from ${brand}.`,
    keywords: joinKeywords(KEYWORD_GROUPS.safety, KEYWORD_GROUPS.intent),
  },
  '/terms/': {
    title: `Terms & Conditions | ${brand}`,
    description: `Purchase terms, license use, and refund policy for ${brand} Dota 2 hack products and checkout.`,
    keywords: joinKeywords(KEYWORD_GROUPS.core, ['dota 2 cheat software']),
  },
  '/privacy/': {
    title: `Privacy Policy | ${brand}`,
    description: `How ${brand} uses analytics, cookies, and contact data when you browse Dota 2 hack guides or request support.`,
    keywords: joinKeywords(KEYWORD_GROUPS.core),
  },
  '/about/': {
    title: `About ${brand} | Dota 2 Hacks ${SEO_YEAR}`,
    description: `${brand} publishes undetected Dota 2 hacks, utilities, setup guides, and live status for Steam ranked on Windows.`,
    keywords: joinKeywords(KEYWORD_GROUPS.core, KEYWORD_GROUPS.intent),
  },
  '/support/': {
    title: `Dota 2 Hacks Support ${SEO_YEAR} | Install Help`,
    description:
      'Loader setup, HWID resets, and checkout help for Dota 2 aimbot, ESP, maphack, and script tiers—contact the operator team.',
    keywords: joinKeywords(KEYWORD_GROUPS.safety, KEYWORD_GROUPS.intent),
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
