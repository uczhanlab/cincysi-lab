/* =====================================================================
   PRESENTATION LOGIC. No content lives here.
   Content comes from js/data.js (window.SITE_DATA).

   Any element with data-render="key" is filled by RENDER[key](element).
   A data-limit="n" attribute on the element caps how many items show.
   ===================================================================== */
(function () {
  'use strict';

  const D = window.SITE_DATA;
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  // ---------- helpers ----------
  const esc = (v = '') => String(v).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const isTodo = url => !url || String(url).includes('#TODO');
  const emptyState = msg => `<p class="text-muted italic">${esc(msg)}</p>`;
  const fmtDate = iso => new Date(iso + 'T00:00:00').toLocaleDateString('en-US',
    { year: 'numeric', month: 'short', day: 'numeric' });

  // Tag colours for news badges
  const TAG_COLORS = {
    Award:   'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
    Grant:   'bg-green-50 text-green-700 ring-1 ring-green-200',
    Paper:   'bg-blue-50 text-blue-700 ring-1 ring-blue-200',
    Talk:    'bg-purple-50 text-purple-700 ring-1 ring-purple-200',
    Service: 'bg-slate-100 text-slate-600 ring-1 ring-slate-200',
    Event:   'bg-orange-50 text-orange-700 ring-1 ring-orange-200',
    Welcome: 'bg-red-50 text-red-700 ring-1 ring-red-200',
  };
  const tagClass = tag => TAG_COLORS[tag] || 'bg-slate-100 text-slate-600 ring-1 ring-slate-200';

  // Inline SVG icons
  const ICONS = {
    linkedin: `<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.06c0-1.2-.02-2.75-1.68-2.75-1.68 0-1.94 1.31-1.94 2.66V21h-4z"/></svg>`,
    github:   `<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>`,
    scholar:  `<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18V17c0 1.66 3.13 3 7 3s7-1.34 7-3v-3.82L12 17l-7-3.82z"/></svg>`,
    website:  `<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>`,
    email:    `<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>`,
    drZhan:   `<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>`
  };

  // Shield logo SVG (inline, UC Red)
  const SHIELD_SVG = `
    <svg width="34" height="38" viewBox="0 0 72 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M36 2 L68 14 L68 44 C68 60 52 73 36 78 C20 73 4 60 4 44 L4 14 Z" fill="#E00122"/>
      <path d="M36 8 L63 18 L63 44 C63 57 49 69 36 73 C23 69 9 57 9 44 L9 18 Z" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="1.5"/>
      <g stroke="rgba(255,255,255,.32)" stroke-width="1.2" stroke-linecap="round">
        <line x1="36" y1="22" x2="22" y2="40"/>
        <line x1="36" y1="22" x2="50" y2="40"/>
        <line x1="22" y1="40" x2="36" y2="58"/>
        <line x1="50" y1="40" x2="36" y2="58"/>
        <line x1="22" y1="40" x2="50" y2="40"/>
      </g>
      <circle cx="36" cy="22" r="3.5" fill="rgba(255,255,255,.9)"/>
      <circle cx="22" cy="40" r="2.5" fill="rgba(255,255,255,.65)"/>
      <circle cx="50" cy="40" r="2.5" fill="rgba(255,255,255,.65)"/>
      <circle cx="36" cy="58" r="3.5" fill="rgba(255,255,255,.9)"/>
      <text x="36" y="44" text-anchor="middle" dominant-baseline="middle"
        font-family="Inter, system-ui, sans-serif"
        font-weight="700" font-size="20" fill="white" letter-spacing="1">SI</text>
    </svg>`;

  // ---------- shared chrome ----------
  function renderHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;

    const navLinks = D.nav.map(item => {
      const active = item.href === currentPage;
      const cls = active
        ? 'text-red border-b-2 border-red pb-0.5 font-semibold'
        : 'text-white/70 hover:text-white pb-0.5 border-b-2 border-transparent transition-colors';
      return `<a href="${esc(item.href)}" class="${cls}" ${active ? 'aria-current="page"' : ''}>${esc(item.label)}</a>`;
    }).join('');

    el.innerHTML = `
      <header class="bg-coal text-white sticky top-0 z-40 border-b border-white/10">
        <div class="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between gap-6">
          <a href="index.html" class="flex items-center gap-3 shrink-0" aria-label="CincySI Lab home">
            ${SHIELD_SVG}
            <div class="leading-tight">
              <span class="block text-base font-bold tracking-tight">Cincy<span class="text-red">SI</span></span>
              <span class="block text-[10px] tracking-widest uppercase text-white/50 font-medium">Super Intelligence Lab</span>
            </div>
          </a>
          <nav class="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium" aria-label="Primary">${navLinks}</nav>
        </div>
      </header>`;
  }

  function renderFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;

    const items = Object.entries(D.links).map(([key, cfg]) => {
      const todo = isTodo(cfg.url);
      const attrs = todo
        ? 'aria-disabled="true" title="Add this link in js/data.js"'
        : 'target="_blank" rel="noopener noreferrer"';
      return `<a href="${todo ? '#' : esc(cfg.url)}" ${attrs}
                 class="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5">
                 ${ICONS[key] || ''}${esc(cfg.label)}
               </a>`;
    }).join('');

    el.innerHTML = `
      <footer class="bg-coal text-white mt-auto border-t border-white/10">
        <div class="max-w-6xl mx-auto px-5 sm:px-8 py-10 grid gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <div class="flex items-center gap-3 mb-3">
              ${SHIELD_SVG}
              <div>
                <p class="font-bold text-base">Cincy<span class="text-red">SI</span> Lab</p>
                <p class="text-xs text-white/50">${esc(D.lab.institution)}</p>
              </div>
            </div>
            <p class="text-sm text-white/60 max-w-md leading-relaxed">${esc(D.lab.tagline)}</p>
          </div>
          <nav class="flex flex-col gap-3" aria-label="Footer">${items}</nav>
        </div>
        <div class="border-t border-white/10">
          <p class="max-w-6xl mx-auto px-5 sm:px-8 py-4 text-xs text-white/40">
            © ${new Date().getFullYear()} ${esc(D.lab.name)} · ${esc(D.lab.institution)}
          </p>
        </div>
      </footer>`;
  }

  // ---------- renderers ----------
  function limit(items, el) {
    const n = parseInt(el && el.dataset.limit, 10);
    return Number.isFinite(n) ? items.slice(0, n) : items;
  }

  const RENDER = {

    // Hero mission block
    mission() {
      return `
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red">University of Cincinnati</p>
        <h1 class="mt-4 text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          ${esc(D.lab.tagline)}
        </h1>
        <p class="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">${esc(D.lab.mission)}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="research.html" class="inline-flex items-center gap-2 rounded-md bg-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-deep transition-colors">Our Research</a>
          <a href="members.html" class="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">Meet the Team</a>
        </div>`;
    },

    // News feed
    news(el) {
      const sorted = [...D.news].sort((a, b) => b.date.localeCompare(a.date));
      const items = limit(sorted, el);
      if (!items.length) return emptyState('No announcements yet.');
      return items.map(n => `
        <article class="py-5 border-b border-border last:border-0">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <time datetime="${esc(n.date)}" class="text-xs text-muted tabular-nums">${fmtDate(n.date)}</time>
            ${n.tag ? `<span class="rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${tagClass(n.tag)}">${esc(n.tag)}</span>` : ''}
          </div>
          <h3 class="font-semibold text-ink leading-snug">
            ${n.link ? `<a href="${esc(n.link)}" class="hover:text-red transition-colors" target="_blank" rel="noopener">${esc(n.title)}</a>` : esc(n.title)}
          </h3>
          <p class="mt-1.5 text-sm text-muted leading-relaxed">${esc(n.body)}</p>
        </article>`).join('');
    },

    // Research project cards
    projects() {
      if (!D.projects.length) return emptyState('Projects coming soon.');
      return D.projects.map(p => `
        <article class="flex flex-col bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
          <div class="flex items-start justify-between gap-4 mb-3">
            <h3 class="font-semibold text-ink text-lg leading-snug">${esc(p.title)}</h3>
            <span class="shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
              p.status === 'Active'
                ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
                : 'bg-slate-100 text-slate-500 ring-1 ring-slate-200'
            }">${esc(p.status)}</span>
          </div>
          <p class="flex-1 text-sm text-muted leading-relaxed">${esc(p.summary)}</p>
          ${p.tags && p.tags.length ? `
            <ul class="mt-4 flex flex-wrap gap-2">
              ${p.tags.map(t => `<li class="rounded-md bg-silver px-2.5 py-1 text-xs font-medium text-ink/70">${esc(t)}</li>`).join('')}
            </ul>` : ''}
        </article>`).join('');
    },

    // Group photo
    'group-photo'() {
      const g = D.groupPhoto;
      const hasImg = g && g.src;
      return `
        <figure class="overflow-hidden rounded-2xl bg-coal border border-border">
          <div class="relative aspect-[21/9] w-full min-h-[200px] grid place-items-center">
            ${hasImg ? `<img src="${esc(g.src)}" alt="${esc(g.caption)}" class="absolute inset-0 h-full w-full object-cover" onerror="this.remove()">` : ''}
            <div class="text-center text-white/50 px-6 ${hasImg ? 'hidden' : ''}">
              <p class="text-lg font-medium text-white/70">Group Photo</p>
              <p class="mt-1 text-sm">Add images/group-photo.jpg to show a photo here</p>
            </div>
          </div>
          ${g && g.caption ? `<figcaption class="px-6 py-3 text-sm text-white/60 border-t border-white/10">${esc(g.caption)}</figcaption>` : ''}
        </figure>`;
    },

    // Member cards
    members() {
      if (!D.members.length) return emptyState('Members coming soon.');
      return D.members.map(m => {
        const social = Object.entries(m.links || {})
          .filter(([, url]) => url)
          .map(([k, url]) => `
            <a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${esc(m.name)} on ${esc(k)}"
               class="grid h-8 w-8 place-items-center rounded-full border border-border text-muted hover:border-red hover:text-red transition-colors">
              ${ICONS[k] || ICONS.website}
            </a>`).join('');
        const email = m.email
          ? `<a href="mailto:${esc(m.email)}" aria-label="Email ${esc(m.name)}"
               class="grid h-8 w-8 place-items-center rounded-full border border-border text-muted hover:border-red hover:text-red transition-colors">
               ${ICONS.email}
             </a>`
          : '';
        const isPI = m.role === 'Principal Investigator';
        return `
          <article class="flex flex-col overflow-hidden rounded-xl bg-white border border-border ${isPI ? 'ring-2 ring-red/30' : ''}">
            <div class="relative bg-silver ${isPI ? 'aspect-[4/3]' : 'aspect-square'}">
              <span class="absolute inset-0 grid place-items-center text-xs text-muted">Photo</span>
              ${m.photo ? `<img src="${esc(m.photo)}" alt="Photo of ${esc(m.name)}" class="absolute inset-0 h-full w-full object-cover" onerror="this.remove()">` : ''}
              ${isPI ? `<span class="absolute top-3 left-3 rounded-full bg-red px-2.5 py-0.5 text-[11px] font-semibold text-white">Principal Investigator</span>` : ''}
            </div>
            <div class="flex flex-1 flex-col p-5">
              <p class="text-xs font-semibold uppercase tracking-wider text-red mb-1">${esc(m.role)}</p>
              <h3 class="font-semibold text-ink text-lg">${esc(m.name)}</h3>
              <p class="mt-2 flex-1 text-sm text-muted leading-relaxed">${esc(m.focus)}</p>
              <div class="mt-4 flex gap-2">${email}${social}</div>
            </div>
          </article>`;
      }).join('');
    },

    // Publications grouped by year
    publications() {
      if (!D.publications.length) return emptyState('Publications coming soon.');
      const byYear = D.publications.reduce((acc, p) => {
        (acc[p.year] = acc[p.year] || []).push(p);
        return acc;
      }, {});
      return Object.keys(byYear).sort((a, b) => b - a).map(year => `
        <section aria-labelledby="y-${year}" class="grid gap-6 md:grid-cols-[96px_1fr]">
          <h2 id="y-${year}" class="text-2xl font-bold text-red pt-1">${year}</h2>
          <ul class="space-y-4">
            ${byYear[year].map(p => `
              <li class="bg-white rounded-xl border border-border p-5">
                <div class="flex flex-wrap items-center gap-2 mb-2">
                  <span class="rounded-full bg-red/10 text-red px-2.5 py-0.5 text-[11px] font-semibold">${esc(p.type || 'Paper')}</span>
                  <span class="text-sm text-muted">${esc(p.venue)}</span>
                </div>
                <h3 class="font-semibold text-ink leading-snug">
                  ${!isTodo(p.link) && p.link
                    ? `<a href="${esc(p.link)}" target="_blank" rel="noopener" class="hover:text-red transition-colors">${esc(p.title)}</a>`
                    : esc(p.title)}
                </h3>
                <p class="mt-1 text-sm text-muted">${esc(p.authors)}</p>
              </li>`).join('')}
          </ul>
        </section>`).join('');
    }
  };

  // ---------- boot ----------
  document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    document.querySelectorAll('[data-render]').forEach(el => {
      const fn = RENDER[el.dataset.render];
      if (fn) el.innerHTML = fn(el);
      else console.warn('Unknown data-render key:', el.dataset.render);
    });
  });
})();