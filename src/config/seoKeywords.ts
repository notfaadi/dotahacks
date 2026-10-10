import { SEO_YEAR } from './site';

/** Default meta keywords (~15 high-value terms; Bing still reads keywords lightly). */
export const DEFAULT_META_KEYWORDS = [
  'dota 2 hacks',
  'dota hacks',
  'dota 2 cheats',
  'dota cheats',
  'dota 2 hack',
  'dota 2 aimbot',
  'dota aimbot',
  'dota 2 esp',
  'dota 2 maphack',
  'dota 2 scripts',
  'free dota 2 hacks',
  'undetected dota 2 cheats',
  `dota 2 hacks ${SEO_YEAR}`,
  'dota 2 cheats download',
  'dota 2 auto combo',
  'dota 2 map hack',
  'best dota 2 hacks',
  'dota 2 skin changer',
].join(', ');

export function joinKeywords(...groups: string[][]): string {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const group of groups) {
    for (const term of group) {
      const key = term.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(term);
    }
  }
  return out.slice(0, 15).join(', ');
}

export const KEYWORD_GROUPS = {
  core: [
    'dota 2 hacks',
    'dota hacks',
    'dota 2 cheats',
    'dota cheats',
    'dota 2 hack',
    'dota 2 cheat',
    `dota 2 hacks ${SEO_YEAR}`,
  ],
  features: [
    'dota 2 aimbot',
    'dota aimbot',
    'aimbot dota 2',
    'dota 2 esp',
    'dota 2 maphack',
    'dota 2 map hack',
    'dota 2 scripts',
    'dota 2 auto combo',
    'dota 2 zoom hack',
    'dota 2 skin changer',
  ],
  intent: [
    'best dota 2 hacks',
    'undetected dota 2 cheats',
    'dota 2 hacks download',
    'dota 2 cheats download',
    'premium dota 2 hacks',
    'working dota 2 cheats',
  ],
  safety: [
    'are dota 2 hacks bannable',
    'dota 2 vac ban hacks',
    'safe dota 2 hacks',
    'how to install dota 2 hacks',
  ],
  forum: ['dota 2 hack reddit', 'do dota 2 hacks work', 'how to hack dota 2'],
} as const;
