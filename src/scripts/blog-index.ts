/** Blog index topic filters + Starwind sort select. */
export function initBlogIndexFilters(emptyMessage: string) {
  const grid = document.getElementById('blog-grid');
  const emptyEl = document.getElementById('blog-empty');
  const sortRoot = document.getElementById('blog-sort-select');
  if (!grid) return;

  const filters = document.querySelectorAll<HTMLButtonElement>('[data-blog-filter]');

  const cards = () => [...grid.querySelectorAll<HTMLElement>('[data-blog-card]')];

  const activeTag = () =>
    document.querySelector<HTMLButtonElement>('[data-blog-filter][aria-pressed="true"]')?.getAttribute(
      'data-blog-filter',
    ) ?? 'all';

  const getSortSelectRoot = () => sortRoot?.querySelector<HTMLElement>('[data-sw-select]') ?? null;

  const getSort = () => {
    const root = getSortSelectRoot();
    const fromAttr = root?.getAttribute('data-value');
    if (fromAttr) return fromAttr;
    const input = sortRoot?.querySelector<HTMLInputElement>('[data-sw-select-input]');
    return input?.value || 'newest';
  };

  const compareCards = (a: HTMLElement, b: HTMLElement, sort: string) => {
    const tsA = Number(a.getAttribute('data-ts') ?? 0);
    const tsB = Number(b.getAttribute('data-ts') ?? 0);
    const readA = Number(a.getAttribute('data-read-minutes') ?? 0);
    const readB = Number(b.getAttribute('data-read-minutes') ?? 0);
    if (sort === 'oldest') return tsA - tsB;
    if (sort === 'short') return readA - readB;
    if (sort === 'long') return readB - readA;
    return tsB - tsA;
  };

  const apply = () => {
    const tag = activeTag();
    const sort = getSort();
    const items = cards();

    const sorted = [...items].sort((a, b) => compareCards(a, b, sort));
    sorted.forEach((el) => grid.appendChild(el));

    let visibleCount = 0;
    items.forEach((el) => {
      const cardTag = el.getAttribute('data-tag') ?? '';
      const match = tag === 'all' || cardTag === tag;
      el.classList.toggle('hidden', !match);
      if (match) visibleCount += 1;
    });

    if (emptyEl) {
      emptyEl.classList.toggle('hidden', visibleCount > 0);
      emptyEl.textContent = emptyMessage;
    }
  };

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      apply();
    });
  });

  const onSortChange = (event: Event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!sortRoot?.contains(target)) return;
    apply();
  };

  document.addEventListener('starwind:value-change', onSortChange);

  const selectRoot = getSortSelectRoot();
  const hiddenInput = sortRoot?.querySelector<HTMLInputElement>('[data-sw-select-input]');
  hiddenInput?.addEventListener('change', apply);

  if (selectRoot) {
    const observer = new MutationObserver(() => apply());
    observer.observe(selectRoot, { attributes: true, attributeFilter: ['data-value'] });
  }

  apply();
  window.setTimeout(apply, 100);
  document.addEventListener('starwind:init', () => window.setTimeout(apply, 0));
}
