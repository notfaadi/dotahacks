import { t } from '../i18n';
import { SITE_DOMAIN as INDEXNOW_HOST_NAME, SITE_URL } from './site';
import { getBlogSeoEntry } from './blogSeo';
import { getPageSeoEntry, normalizeSeoPath } from './pageSeo';
import { DEFAULT_META_KEYWORDS, joinKeywords, KEYWORD_GROUPS } from './seoKeywords';

export const SITE_ORIGIN = SITE_URL;

export const DEFAULT_OG_IMAGE = '/images/gameplay/dota-2-map-hack.png';

export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;

/** @example @dota2hacks */
export const TWITTER_SITE = import.meta.env.PUBLIC_TWITTER_SITE as string | undefined;

export const TWITTER_CREATOR = import.meta.env.PUBLIC_TWITTER_CREATOR as string | undefined;

/** Comma-separated profile URLs (X, YouTube, etc.) for Organization sameAs. */
export function getOrganizationSameAs(): string[] {
  const raw = import.meta.env.PUBLIC_ORG_SAME_AS as string | undefined;
  if (!raw?.trim()) return [];
  return raw
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY as string | undefined;

export function canonicalUrl(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export interface ResolvedPageSeo {
  title: string;
  description: string;
  keywords: string;
  ogDescription: string;
}

export function resolveMetaKeywords(pathname: string): string {
  const entry = getPageSeoEntry(pathname);
  if (entry?.keywords) return entry.keywords;

  const blogMatch = normalizeSeoPath(pathname).match(/^\/blog\/([^/]+)\/$/);
  if (blogMatch) {
    const blog = getBlogSeoEntry(blogMatch[1]!);
    if (blog?.keywords) return blog.keywords;
  }

  const normalized = normalizeSeoPath(pathname);
  if (normalized.startsWith('/forum/') && normalized !== '/forum/') {
    return joinKeywords(KEYWORD_GROUPS.forum, KEYWORD_GROUPS.core);
  }

  return DEFAULT_META_KEYWORDS;
}

export function resolvePageSeo(pathname: string): ResolvedPageSeo {
  const entry = getPageSeoEntry(pathname);
  if (entry) {
    return {
      title: entry.title,
      description: entry.description,
      keywords: entry.keywords ?? DEFAULT_META_KEYWORDS,
      ogDescription: entry.ogDescription ?? entry.description,
    };
  }
  return {
    title: t.site.title,
    description: t.site.description,
    keywords: DEFAULT_META_KEYWORDS,
    ogDescription: t.site.description,
  };
}

const TITLE_STOP_WORDS = new Set([
  'a',
  'an',
  'and',
  'after',
  'at',
  'before',
  'by',
  'for',
  'from',
  'in',
  'into',
  'my',
  'of',
  'on',
  'or',
  'our',
  'over',
  'the',
  'to',
  'vs',
  'with',
  'your',
]);

const DANGLING_BEFORE = new Set(['a', 'an', 'my', 'our', 'the', 'to', 'your']);

/** SERP title: primary phrase plus brand, cut on a word boundary under 60 characters. */
export function pageTitle(keyword: string, brand = t.site.name): string {
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${keyword}${suffix}`.length <= max) return `${keyword}${suffix}`;

  let trimmed = keyword.slice(0, max - suffix.length);
  const lastSpace = trimmed.lastIndexOf(' ');
  if (lastSpace >= 20) trimmed = trimmed.slice(0, lastSpace);

  let words = trimmed.trim().split(/\s+/).filter(Boolean);
  const core = (word: string) => word.toLowerCase().replace(/[^a-z0-9]+/g, '');
  const weakEnding = (word: string) => {
    const text = core(word);
    return TITLE_STOP_WORDS.has(text) || (text.length > 0 && text.length <= 3);
  };

  while (words.length > 3 && weakEnding(words[words.length - 1])) words.pop();
  while (
    words.length > 4 &&
    DANGLING_BEFORE.has(core(words[words.length - 2] ?? '')) &&
    core(words[words.length - 1]).length <= 4
  ) {
    words.pop();
    while (words.length > 3 && weakEnding(words[words.length - 1])) words.pop();
  }

  let joined = words.join(' ').replace(/[\s:|,–—-]+$/g, '');
  const colon = joined.lastIndexOf(':');
  if (colon > 0) {
    const after = joined
      .slice(colon + 1)
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    if (after.length < 2 && joined.slice(0, colon).trim().length >= 24) {
      joined = joined.slice(0, colon).trim();
    }
  }

  return `${joined}${suffix}`;
}

/** Product names are often short. Keep the game and "cheats" in the SERP title. */
export function productPageTitle(name: string): string {
  const mentionsGame = /dota\s*2/i.test(name);
  const phrase = mentionsGame
    ? /cheat/i.test(name)
      ? name
      : `${name} Cheats`
    : `${name} for Dota 2`;
  return pageTitle(phrase);
}

/** Social crawlers should fetch a sized WebP, not the multi-megabyte source PNG. */
export function openGraphImage(src: string): { url: string; width: number; height: number } {
  if (/^\/images\/.+\.(png|jpe?g)$/i.test(src)) {
    const base = src.replace(/\.(png|jpe?g)$/i, '');
    return { url: `${base}-960.webp`, width: 960, height: 540 };
  }
  return { url: src, width: DEFAULT_OG_IMAGE_WIDTH, height: DEFAULT_OG_IMAGE_HEIGHT };
}

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const RSS_FEED_PATH = '/rss.xml';

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = INDEXNOW_HOST_NAME;
