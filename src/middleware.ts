import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';

export const onRequest = defineMiddleware((context, next) => {
  // Production (Workers static assets): `/go/[slug]/` HTML handles checkout redirects.
  // Middleware redirects here only run in dev — otherwise Astro SSG emits a 2s "Redirecting from…" stub page.
  if (!import.meta.env.DEV) return next();

  const destination = resolveCheckoutPathRedirect(new URL(context.request.url).pathname);
  if (destination) {
    return context.redirect(destination, 302);
  }
  return next();
});
