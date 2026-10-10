import { SEO_YEAR } from './site';
import { joinKeywords, KEYWORD_GROUPS } from './seoKeywords';

export interface BlogSeoEntry {
  title: string;
  description: string;
  keywords: string;
}

/** Per-article SERP overrides (falls back to post title/description when missing). */
export const BLOG_SEO: Record<string, BlogSeoEntry> = {
  'dota-2-cheat-codes-guide': {
    title: `Dota 2 Cheat Codes ${SEO_YEAR} | Console Commands Guide`,
    description:
      'Dota 2 cheat codes for practice lobbies—gold, vision, and hero commands. How they differ from undetected ranked hacks, scripts, and maphack tools.',
    keywords: joinKeywords(KEYWORD_GROUPS.core, ['dota 2 cheat codes', 'dota 2 console cheats']),
  },
  'dota-2-console-cheats-tips': {
    title: `Dota 2 Console Cheats ${SEO_YEAR} | Tips & Commands`,
    description:
      'Console cheat tips for Dota 2 custom games—setup, binds, and practice drills. Compare with premium Dota 2 hacks, ESP, and scripts for ranked.',
    keywords: joinKeywords(KEYWORD_GROUPS.core, ['dota 2 console cheats', 'dota 2 cheat engine']),
  },
  'how-to-use-dota-2-cheat-codes': {
    title: `How to Use Dota 2 Cheat Codes | ${SEO_YEAR} Setup`,
    description:
      'Step-by-step: enable the Dota 2 console, run lobby cheat codes, and practice safely. When you need undetected maphack, scripts, and auto-combo instead.',
    keywords: joinKeywords(KEYWORD_GROUPS.safety, KEYWORD_GROUPS.core),
  },
  'dota-2-cheats-features-guide': {
    title: `Dota 2 Hacks Features | Aimbot, ESP, Maphack ${SEO_YEAR}`,
    description:
      'Full feature map for Dota 2 hacks: aimbot-style prediction, ESP, maphack, scripts, auto-combo, zoom hack, and skin changer—Lite, Pro, and Elite tiers.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, KEYWORD_GROUPS.intent),
  },
  'dota-2-console-commands-cheats': {
    title: `Dota 2 Console Commands & Cheats | ${SEO_YEAR}`,
    description:
      'Dota 2 console commands reference for lobbies and config—plus how ranked players use external Dota 2 cheats, scripts, and maphack tools.',
    keywords: joinKeywords(KEYWORD_GROUPS.core, ['dota 2 console commands', 'dota 2 scripts']),
  },
  'dota-2-lite-vs-pro': {
    title: `Free vs Premium Dota 2 Hacks | Lite vs Pro ${SEO_YEAR}`,
    description:
      'Compare Lite and Pro Dota 2 cheats—ESP and maphack vs scripts and auto-combo. Pick undetected tiers for ranked without overpaying.',
    keywords: joinKeywords(
      KEYWORD_GROUPS.intent,
      ['free dota 2 cheats', 'dota 2 lite vs pro', 'dota 2 ranked hacks'],
    ),
  },
  'dota-2-elite-tier-guide': {
    title: `Best Dota 2 Elite Hacks ${SEO_YEAR} | Premium Cheats`,
    description:
      'Elite Dota 2 hacks: bots, kill steal, full maphack suite, skin changer, and priority patches. Premium undetected tools for high-MMR ranked.',
    keywords: joinKeywords(KEYWORD_GROUPS.intent, ['dota 2 elite hacks', 'dota 2 pro scripts']),
  },
  'dota-2-scripts-ranked-mmr': {
    title: `Dota 2 Scripts for Ranked MMR | Auto Combo ${SEO_YEAR}`,
    description:
      'Configure Dota 2 scripts, auto-combo, last-hit assist, and humanized delays for ranked MMR—paired with ESP and maphack awareness.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 ranked hacks', 'dota 2 hero scripts']),
  },
  'dota-2-map-hack-setup': {
    title: `Dota 2 Map Hack Setup ${SEO_YEAR} | Maphack & ESP`,
    description:
      'Install and tune Dota 2 maphack and ESP—wards, hero boxes, smoke alerts, and minimap overlays. Undetected presets for Steam ranked on Windows.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 wallhack', 'dota 2 radar hack']),
  },
  'dota-2-zoom-hack-guide': {
    title: `Dota 2 Zoom Hack ${SEO_YEAR} | Camera Hack Guide`,
    description:
      'Dota 2 zoom hack and camera distance settings for map awareness—safe caps, ranked presets, and pairing with maphack modules.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 camera hack', 'dota 2 ui hack']),
  },
  'dota-2-skin-changer-guide': {
    title: `Dota 2 Skin Changer ${SEO_YEAR} | Unlock All Guide`,
    description:
      'Local Dota 2 skin changer setup—preview arcanas and immortals client-side. Works alongside undetected scripts and maphack tiers.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 unlock all', 'dota 2 custom hacks']),
  },
  'vac-patch-day-checklist': {
    title: `Dota 2 VAC Patch Checklist ${SEO_YEAR} | Safe Hacks`,
    description:
      'Patch-day checklist for Dota 2 hacks—status banners, loader updates, and when to pause ranked. Keep undetected cheats working after VAC updates.',
    keywords: joinKeywords(KEYWORD_GROUPS.safety, KEYWORD_GROUPS.intent),
  },
  'dota-2-hwid-spoofer-after-ban': {
    title: `Dota 2 HWID Spoofer After Ban | ${SEO_YEAR} Guide`,
    description:
      'When to use a Dota 2 HWID spoofer after hardware bans—setup order, verification, and loading conservative cheat profiles before ranked.',
    keywords: joinKeywords(KEYWORD_GROUPS.safety, ['dota 2 hwid spoofer', 'dota 2 hack tool']),
  },
  'how-to-buy-dota-2-cheats-2026': {
    title: `Download Dota 2 Hacks ${SEO_YEAR} | Buy Cheats Guide`,
    description:
      'How to download and buy Dota 2 hacks in 2026—pick Lite, Pro, or Elite, complete checkout, and install the loader with portal access.',
    keywords: joinKeywords(KEYWORD_GROUPS.intent, ['dota 2 hack client', 'dota 2 mod menu']),
  },
  'dota-2-auto-combo-hero-scripts': {
    title: `Dota 2 Auto Combo Scripts ${SEO_YEAR} | Hero Guide`,
    description:
      'Hero-specific Dota 2 auto-combo and script presets—Invoker, PA, Lion, and burst cores with humanized delays for undetected ranked play.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 combo script', 'dota 2 auto cast']),
  },
  'valve-anti-cheat-unable-to-verify': {
    title: `VAC Unable to Verify ${SEO_YEAR} | Dota 2 Hack Safety`,
    description:
      'Fix Valve Anti-Cheat unable to verify errors before running Dota 2 cheats—integrity checks, Steam verify, and status before maphack or scripts.',
    keywords: joinKeywords(KEYWORD_GROUPS.safety, ['dota 2 vac ban hacks', 'is dota 2 hack safe']),
  },
  'dota-2-external-cheat-guide': {
    title: `Dota 2 External Cheat Guide ${SEO_YEAR} | Loader & ESP`,
    description:
      'How external Dota 2 cheat loaders work—overlay ESP, maphack, scripts, and stream-proof modes vs risky injection for ranked Steam PC.',
    keywords: joinKeywords(KEYWORD_GROUPS.intent, ['dota 2 cheat software', 'dota 2 external cheat']),
  },
  'dota-2-stream-proof-setup': {
    title: `Stream Proof Dota 2 Hacks ${SEO_YEAR} | OBS Safe Setup`,
    description:
      'Stream-proof setup for Dota 2 hacks—hide ESP and maphack from OBS while keeping undetected scripts on your monitor for ranked.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 stream proof', 'working dota 2 cheats']),
  },
};

export function getBlogSeoEntry(slug: string): BlogSeoEntry | undefined {
  return BLOG_SEO[slug];
}
