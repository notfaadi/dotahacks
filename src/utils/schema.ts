import type { FaqItem } from '../i18n/types';
import { SUPPORT_EMAIL } from '../config/site';
import { SITE_ORIGIN, absoluteAssetUrl, canonicalUrl, getOrganizationSameAs, openGraphImage } from '../config/seo';
import { getProductPlans } from '../data/productPricing';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_ORIGIN}/#website`,
    name: 'DotaCheats',
    alternateName: ['Dota 2 Hacks', 'Dota Hacks', 'Dota 2 Cheats'],
    url: `${SITE_ORIGIN}/`,
    inLanguage: 'en-US',
    description:
      'Dota 2 hacks and dota cheats with aimbot-style prediction, ESP, maphack, scripts, zoom hack, and skin changer for Steam ranked on PC.',
    publisher: { '@id': `${SITE_ORIGIN}/#organization` },
  };
}

export function organizationSchema() {
  const sameAs = getOrganizationSameAs();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_ORIGIN}/#organization`,
    name: 'DotaCheats',
    url: `${SITE_ORIGIN}/`,
    logo: `${SITE_ORIGIN}/logo.svg`,
    email: SUPPORT_EMAIL,
    alternateName: ['Dota Hacks', 'Dota 2 Hacks', 'Dota Cheats'],
    knowsAbout: [
      'Dota 2 hacks',
      'Dota hacks',
      'Dota 2 cheats',
      'Dota 2 aimbot',
      'Dota 2 ESP',
      'Dota 2 map hack',
      'Dota 2 scripts',
      'Steam ranked play',
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SUPPORT_EMAIL,
        url: canonicalUrl('/support/'),
        availableLanguage: ['English'],
        areaServed: 'Worldwide',
      },
    ],
  };
}

export function collectionPageSchema(input: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'DotaCheats',
      url: `${SITE_ORIGIN}/`,
    },
  };
}

export function webPageSchema(input: {
  name: string;
  description: string;
  url: string;
  primaryImage?: string;
}) {
  const pageUrl = canonicalUrl(input.url);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: input.name,
    description: input.description,
    url: pageUrl,
    inLanguage: 'en-US',
    isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
    about: [
      { '@type': 'Thing', name: 'Dota 2 hacks' },
      { '@type': 'Thing', name: 'Dota 2 cheats' },
      { '@type': 'Thing', name: 'Dota 2 aimbot' },
    ],
    ...(input.primaryImage
      ? {
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: absoluteAssetUrl(openGraphImage(input.primaryImage).url),
          },
        }
      : {}),
  };
}

/** Homepage service entity for brand + product intent queries. */
export function dotaHacksServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_ORIGIN}/#dota-2-hacks-service`,
    name: 'Dota 2 Hacks & Cheats',
    serviceType: 'Game utility software and setup guides',
    description:
      'Undetected Dota 2 hacks, dota cheats, aimbot-style combo tools, ESP, maphack, and scripts for Steam ranked on Windows.',
    provider: { '@id': `${SITE_ORIGIN}/#organization` },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    url: `${SITE_ORIGIN}/`,
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: canonicalUrl(item.url),
    })),
  };
}

export function discussionForumPostingSchema(input: {
  name: string;
  text: string;
  url: string;
  author: string;
  comments: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DiscussionForumPosting',
    headline: input.name,
    articleBody: input.text,
    url: canonicalUrl(input.url),
    author: { '@type': 'Person', name: input.author },
    commentCount: input.comments,
    isPartOf: { '@type': 'CollectionPage', name: 'DotaCheats Community Forum', url: canonicalUrl('/forum/') },
  };
}

function offerUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return canonicalUrl(path);
}

function usdPrice(amount: number): string {
  return amount.toFixed(2);
}

export function productSchema(input: {
  name: string;
  description: string;
  url: string;
  offerUrl: string;
  image?: string;
  sku?: string;
}) {
  const plans = input.sku ? getProductPlans(input.sku) : [];
  const prices = plans.map((plan) => plan.priceUsd);
  const low = prices.length ? Math.min(...prices) : undefined;
  const high = prices.length ? Math.max(...prices) : undefined;
  const seller = { '@type': 'Organization', name: 'DotaCheats' };
  const offers =
    low != null && high != null && low !== high
      ? {
          '@type': 'AggregateOffer',
          url: offerUrl(input.offerUrl),
          priceCurrency: 'USD',
          lowPrice: usdPrice(low),
          highPrice: usdPrice(high),
          offerCount: prices.length,
          availability: 'https://schema.org/InStock',
          seller,
        }
      : {
          '@type': 'Offer',
          url: offerUrl(input.offerUrl),
          priceCurrency: 'USD',
          ...(low != null ? { price: usdPrice(low) } : {}),
          availability: 'https://schema.org/InStock',
          seller,
        };

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: input.name,
    description: input.description,
    sku: input.sku ?? input.url.replace(/\//g, '-'),
    brand: {
      '@type': 'Brand',
      name: 'DotaCheats',
    },
    ...(input.image ? { image: absoluteAssetUrl(openGraphImage(input.image).url) } : {}),
    offers,
  };
}

/** @deprecated Prefer productSchema for product/cheat detail pages. */
export function softwareApplicationSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
  offerUrl?: string;
}) {
  return productSchema({
    name: input.name,
    description: input.description,
    url: input.url,
    offerUrl: input.offerUrl ?? input.url,
    image: input.image,
  });
}

export function articleSchema(input: {
  name: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    image: absoluteAssetUrl(openGraphImage(input.image).url),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: 'en-US',
    author: {
      '@type': 'Organization',
      name: 'DotaCheats',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DotaCheats',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl(input.url),
    },
  };
}

export function parseBlogDate(date: string): string {
  const parsed = Date.parse(date);
  if (Number.isNaN(parsed)) return new Date().toISOString().slice(0, 10);
  return new Date(parsed).toISOString().slice(0, 10);
}
