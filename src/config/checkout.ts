import { CHECKOUT_URLS, ZADEYO_DOTA2_AFFILIATE } from './checkout-redirects.mjs';

/** Zadeyo affiliate checkout (FDI) — use on Buy now / primary CTAs. */
export const DOTA2_AFFILIATE_CHECKOUT_URL = ZADEYO_DOTA2_AFFILIATE;

export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  dota2: 'dota-2',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Checkout href: Dota 2 opens Zadeyo affiliate directly; utilities use /go/ redirects. */
export function checkoutPath(product: CheckoutProduct = 'dota2'): string {
  if (product === 'dota2') return DOTA2_AFFILIATE_CHECKOUT_URL;
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Default Buy now destination (Zadeyo affiliate). */
export const PRIMARY_CHECKOUT_PATH = DOTA2_AFFILIATE_CHECKOUT_URL;

/** Map internal product slugs to checkout redirect paths. */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'unlock-all':
      return checkoutPath('skinChanger');
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'ugc':
    case 'account-recovery':
      return checkoutPath('ugc');
    case 'lite':
    case 'pro':
    case 'elite':
    default:
      return checkoutPath('dota2');
  }
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    let path = href.startsWith('/') ? href : `/${href}`;
    if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
    if (path === '/go/dota-2/') return DOTA2_AFFILIATE_CHECKOUT_URL;
    return path;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return product === 'dota2' ? DOTA2_AFFILIATE_CHECKOUT_URL : checkoutPath(product);
    }
  }

  // Legacy / encoded product paths → internal checkout
  if (href.includes('%2Fproducts%2Fcloud-dma') || href.includes('/products/cloud-dma')) {
    return checkoutPath('dota2');
  }
  if (href.includes('%2Fproducts%2Fskin-changer') || href.includes('/products/skin-changer')) {
    return checkoutPath('skinChanger');
  }
  if (href.includes('%2Fproducts%2Fhwid-spoofer') || href.includes('/products/hwid-spoofer')) {
    return checkoutPath('hwidSpoofer');
  }
  if (href.includes('%2Fproducts%2Fugc') || href.includes('/products/ugc')) {
    return checkoutPath('ugc');
  }
  if (
    href.includes('zadeyo.com/go/FDI') ||
    href.includes('%2Fproducts%2Fdota-2-cheats') ||
    href.includes('%2Fproducts%2Fdota2') ||
    href.includes('%2Fproducts%2Fdota-2') ||
    href.includes('/products/dota-2-cheats') ||
    href.includes('/products/dota2-cheats') ||
    href.includes('/products/dota-2') ||
    href.includes('/products/dota2')
  ) {
    return DOTA2_AFFILIATE_CHECKOUT_URL;
  }

  return href;
}

export function isExternalCheckoutHref(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://');
}
