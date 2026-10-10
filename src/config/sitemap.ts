import type { SitemapItem } from '@astrojs/sitemap';
import { blogPosts } from '../data/blog';
import { parseBlogDate } from '../utils/schema';

const buildDate = new Date().toISOString();

const blogLastmod = new Map(
  blogPosts.map((post) => [`/blog/${post.slug}/`, parseBlogDate(post.date)] as const),
);

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (path.includes('/404') || path.startsWith('/go/') || path.includes('/rss.xml')) {
    return undefined;
  }

  item.lastmod = buildDate;

  if (path === '/') {
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/products/dota-2-cheats/') {
    item.priority = 0.95;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/products/dota-2-cheats/elite/') {
    item.priority = 0.95;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/blog/') {
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.startsWith('/blog/')) {
    item.priority = 0.75;
    item.changefreq = 'monthly';
    item.lastmod = blogLastmod.get(path) ?? buildDate;
    return item;
  }

  if (path.startsWith('/products/')) {
    item.priority = 0.85;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/forum/') {
    item.priority = 0.65;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.startsWith('/forum/')) {
    item.priority = 0.45;
    item.changefreq = 'monthly';
    return item;
  }

  if (
    path === '/about/' ||
    path === '/support/' ||
    path === '/privacy/' ||
    path === '/terms/' ||
    path === '/faq/'
  ) {
    item.priority = 0.5;
    item.changefreq = 'yearly';
    return item;
  }

  item.priority = 0.6;
  item.changefreq = 'monthly';
  return item;
}
