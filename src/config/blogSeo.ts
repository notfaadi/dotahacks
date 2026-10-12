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
  'dota-2-hacks-october-2026-update': {
    title: `Dota 2 Hacks Update ${SEO_YEAR} | ESP & Map Hack Patch`,
    description:
      'October 2026 dota2hacks.org update—Hero ESP, fog removal, rune timers, auto-dodge caps, and loader stability on Windows 10 and 11.',
    keywords: joinKeywords(KEYWORD_GROUPS.intent, ['dota 2 hack update', 'dota 2 cheats 2026']),
  },
  'best-dota-2-hacks-cheats-2026': {
    title: `Best Dota 2 Hacks & Cheats ${SEO_YEAR} | dota2hacks.org`,
    description:
      'Best dota hacks cheats in 2026—twelve core modules, Lite vs Pro vs Elite, external loader, and patch-day maintenance for ranked Steam PC.',
    keywords: joinKeywords(KEYWORD_GROUPS.intent, ['best dota hacks cheats', 'best dota 2 cheats']),
  },
  'dota-2-loader-hvci-core-isolation-fix': {
    title: `Dota 2 Loader HVCI Fix ${SEO_YEAR} | Core Isolation`,
    description:
      'Fix dota2hacks.org loader errors with HVCI, Core Isolation, TPM, and Secure Boot enabled on Windows 10 and 11—without disabling VAC-safe security.',
    keywords: joinKeywords(KEYWORD_GROUPS.safety, ['dota 2 cheat loader', 'dota 2 hack not working']),
  },
  'dota-2-cheat-overlay-lag-fix': {
    title: `Dota 2 ESP Lag Fix ${SEO_YEAR} | Performance Hacks`,
    description:
      'Stop Hero ESP and map hack stutter—Performance optimized presets, GPU settings, and portal profiles for dota2hacks.org overlays.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 esp hack', 'dota 2 maphack lag']),
  },
  'dota-2-hero-esp-items-level-guide': {
    title: `Dota 2 Hero ESP Guide ${SEO_YEAR} | Items & Level`,
    description:
      'Hero ESP with items and level—ranked tuning for the best dota hacks cheats awareness stack on Lite, Pro, and Elite at dota2hacks.org.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 esp hack', 'dota 2 wallhack']),
  },
  'dota-2-full-map-hack-remove-fog-guide': {
    title: `Dota 2 Map Hack Fog Removal ${SEO_YEAR} | Guide`,
    description:
      'Full map hack remove fog of war—pair rune timers, ward ESP, and performance caps for undetected ranked play on dota2hacks.org.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 map hack', 'dota 2 remove fog']),
  },
  'dota-2-ability-cooldown-tracker-guide': {
    title: `Dota 2 Cooldown Tracker ${SEO_YEAR} | ESP Hacks`,
    description:
      'Ability cooldown tracker for dota2hacks.org—ult timing and ranked awareness with the best dota hacks cheats module stack.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 esp hack', 'dota 2 cooldown hack']),
  },
  'dota-2-auto-dodge-skillshots-guide': {
    title: `Dota 2 Auto Dodge ${SEO_YEAR} | Skillshot Hacks`,
    description:
      'Auto-dodge skillshots on Pro and Elite—humanized ranked caps and Turbo presets for dota2hacks.org scripts and cheats.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 dodge script', 'dota 2 hack tool']),
  },
  'dota-2-ward-placement-esp-guide': {
    title: `Dota 2 Ward ESP ${SEO_YEAR} | Maphack Guide`,
    description:
      'Ward placement ESP with observer and sentry icons—best dota hacks cheats vision on dota2hacks.org Lite and Pro tiers.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 ward hack', 'dota 2 maphack']),
  },
  'dota-2-loader-september-2026-update': {
    title: `Dota 2 Loader Update Sep ${SEO_YEAR} | Stability`,
    description:
      'September 2026 dota2hacks.org loader stability—ESP sync, cloud configs, and Windows 10/11 security baseline.',
    keywords: joinKeywords(KEYWORD_GROUPS.intent, ['dota 2 hack update', 'dota 2 cheats download']),
  },
  'dota-2-ranked-preset-refresh-2026': {
    title: `Dota 2 Ranked Presets ${SEO_YEAR} | Safe Hacks`,
    description:
      'Ranked preset refresh for Lite, Pro, and Elite—conservative ESP and script delays on dota2hacks.org.',
    keywords: joinKeywords(KEYWORD_GROUPS.safety, ['dota 2 ranked hacks', 'best dota 2 cheats']),
  },
  'dota-2-windows-11-security-baseline-update': {
    title: `Dota 2 Loader Security ${SEO_YEAR} | HVCI & TPM`,
    description:
      'Windows 11 security baseline for dota2hacks.org—HVCI, Core Isolation, TPM, and Secure Boot ON with cheats.',
    keywords: joinKeywords(KEYWORD_GROUPS.safety, ['dota 2 hack safe', 'dota 2 cheat loader']),
  },
  'dota-2-loader-secure-boot-tpm-fix': {
    title: `Secure Boot & TPM Fix ${SEO_YEAR} | Dota 2 Loader`,
    description:
      'Fix Secure Boot and TPM loader errors for dota2hacks.org on Windows 10 and 11 before running ESP and map hack.',
    keywords: joinKeywords(KEYWORD_GROUPS.safety, ['dota 2 hack not working', 'dota 2 loader fix']),
  },
  'dota-2-portal-login-download-fix': {
    title: `Dota 2 Portal Login Fix ${SEO_YEAR} | Download`,
    description:
      'Fix operator portal login and loader download issues after buying best dota hacks cheats at dota2hacks.org.',
    keywords: joinKeywords(KEYWORD_GROUPS.intent, ['dota 2 hack download', 'dota 2 mod menu']),
  },
  'dota-2-black-screen-overlay-fix': {
    title: `Dota 2 Black Screen Fix ${SEO_YEAR} | Overlay ESP`,
    description:
      'Fix black screen and invisible ESP overlays—display mode, GPU, and loader order for dota2hacks.org cheats.',
    keywords: joinKeywords(KEYWORD_GROUPS.safety, ['dota 2 esp not working', 'dota 2 hack overlay']),
  },
  'dota-2-rune-spawn-indicators-guide': {
    title: `Dota 2 Rune Timer ${SEO_YEAR} | Spawn Hacks`,
    description:
      'Rune spawn indicators for mid tempo—best dota hacks cheats module on dota2hacks.org Lite and Pro.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 rune hack', 'dota 2 maphack']),
  },
  'dota-2-roshan-timer-guide': {
    title: `Dota 2 Roshan Timer ${SEO_YEAR} | Objective Hack`,
    description:
      'Roshan timer and Aegis tracking with ESP—dota2hacks.org best dota hacks cheats objective module.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 roshan hack', 'dota 2 esp hack']),
  },
  'dota-2-last-hit-creep-spawn-guide': {
    title: `Dota 2 Last Hit Helper ${SEO_YEAR} | Lane Hacks`,
    description:
      'Last hit prediction and creep spawn timers—lane modules in the best dota hacks cheats stack at dota2hacks.org.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 last hit script', 'dota 2 lane hack']),
  },
  'dota-2-enemy-inventory-esp-guide': {
    title: `Dota 2 Inventory ESP ${SEO_YEAR} | Item Hacks`,
    description:
      'Enemy inventory ESP for Blink and BKB reads—Pro tier best dota hacks cheats on dota2hacks.org.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 item esp', 'dota 2 wallhack']),
  },
  'dota-2-performance-optimized-mode-guide': {
    title: `Dota 2 Performance ESP ${SEO_YEAR} | Optimized Hacks`,
    description:
      'Performance optimized mode for Hero ESP and map hack—smooth best dota hacks cheats on dota2hacks.org.',
    keywords: joinKeywords(KEYWORD_GROUPS.features, ['dota 2 esp lag', 'dota 2 hack performance']),
  },
};

export function getBlogSeoEntry(slug: string): BlogSeoEntry | undefined {
  return BLOG_SEO[slug];
}
