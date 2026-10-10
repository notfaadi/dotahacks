/** Checkout destinations keyed by internal product id. */
/** FDI affiliate — `to` must match Zadeyo’s live slug `/products/dota-2-cheats` (not `/products/dota2`). */
export const ZADEYO_DOTA2_AFFILIATE =
  'https://zadeyo.com/go/FDI?to=%2Fproducts%2Fdota-2-cheats';

export const CHECKOUT_URLS = {
  dota2: ZADEYO_DOTA2_AFFILIATE,
  skinChanger: 'https://zadeyo.com/products/skin-changer',
  hwidSpoofer: 'https://zadeyo.com/products/hwid-spoofer',
  ugc: 'https://zadeyo.com/products/ugc',
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
/** Dota 2 uses `src/pages/go/dota-2/` (instant JS redirect) + direct affiliate hrefs on Buy now. */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
