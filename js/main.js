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

  // ---------- shared chrome ----------
  function renderHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;

    const navId = 'main-nav';
    const navLinks = D.nav.map(item => {
      const active = item.href === currentPage;
      const cls = active
        ? 'text-red border-b-2 border-red pb-0.5 font-semibold'
        : 'text-white/70 hover:text-white pb-0.5 border-b-2 border-transparent transition-colors';
      return `<a href="${esc(item.href)}" class="${cls} whitespace-nowrap" ${active ? 'aria-current="page"' : ''}>${esc(item.label)}</a>`;
    }).join('');

    el.innerHTML = `
      <header class="bg-coal text-white sticky top-0 z-40 border-b border-white/10">
        <div class="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          <a href="index.html" class="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0" aria-label="CincySI Lab home">
            <img src="images/CincySI_Lab final Logo.png" alt="" style="height:36px;width:36px;flex-shrink:0;object-fit:cover;border-radius:6px;">
            <div class="leading-tight min-w-0">
              <span class="block text-base sm:text-lg font-black tracking-tight">Cincy<span class="text-red">SI</span></span>
              <span class="hidden sm:block text-[10px] tracking-widest uppercase text-white/50 font-medium">Super Intelligence Lab</span>
            </div>
          </a>
          <!-- Hamburger button (mobile only) -->
          <button id="nav-toggle" aria-controls="${navId}" aria-expanded="false"
                  class="sm:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-red shrink-0"
                  aria-label="Toggle navigation">
            <span class="block w-5 h-0.5 bg-white transition-transform duration-200 nav-bar-1"></span>
            <span class="block w-5 h-0.5 bg-white transition-opacity duration-200 nav-bar-2"></span>
            <span class="block w-5 h-0.5 bg-white transition-transform duration-200 nav-bar-3"></span>
          </button>
          <!-- Desktop nav -->
          <nav id="${navId}" class="hidden sm:flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium" aria-label="Primary">
            ${navLinks}
          </nav>
        </div>
        <!-- Mobile nav drawer -->
        <div id="mobile-nav" class="sm:hidden hidden bg-coal border-t border-white/10">
          <nav class="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 text-sm font-medium" aria-label="Mobile">
            ${navLinks}
          </nav>
        </div>
      </header>`;

    // Hamburger toggle
    const btn = document.getElementById('nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    if (btn && mobileNav) {
      btn.addEventListener('click', () => {
        const open = mobileNav.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', String(!open));
        const [b1, , b3] = btn.querySelectorAll('span');
        if (!open) {
          b1.style.transform = 'translateY(8px) rotate(45deg)';
          b3.style.transform = 'translateY(-8px) rotate(-45deg)';
          btn.querySelector('.nav-bar-2').style.opacity = '0';
        } else {
          b1.style.transform = '';
          b3.style.transform = '';
          btn.querySelector('.nav-bar-2').style.opacity = '1';
        }
      });
    }
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
        <div class="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-10 grid gap-6 sm:gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <img src="images/CincySI_Lab final Logo.png" alt="" style="height:40px;width:40px;flex-shrink:0;object-fit:cover;border-radius:6px;">
              <div class="min-w-0">
                <p class="font-bold text-base">Cincy<span class="text-red">SI</span> Lab</p>
                <p class="text-xs text-white/50">${esc(D.lab.institution)}</p>
              </div>
            </div>
            <p class="text-sm text-white/60 max-w-md leading-relaxed">${esc(D.lab.tagline)}</p>
          </div>
          <nav class="flex flex-wrap sm:flex-col gap-3" aria-label="Footer">${items}</nav>
        </div>
        <div class="border-t border-white/10">
          <p class="max-w-6xl mx-auto px-4 sm:px-8 py-4 text-xs text-white/40">
            © ${new Date().getFullYear()} ${esc(D.lab.name)} · ${esc(D.lab.institution)}
          </p>
        </div>
      </footer>`;
  }

  // ---------- live tech news (Hacker News API) ----------
  const TECH_KEYWORDS = ['AI', 'artificial intelligence', 'machine learning', 'LLM', 'deep learning',
    'neural network', 'NLP', 'computer vision', 'GPT', 'transformer', 'research', 'paper',
    'conference', 'arxiv', 'benchmark', 'dataset', 'model', 'language model'];

  async function fetchTechNews(container) {
    if (!container) return;
    container.innerHTML = `<p class="text-sm text-muted italic py-4">Loading latest tech &amp; AI news…</p>`;
    try {
      const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
      const ids = await res.json();
      const stories = await Promise.all(
        ids.slice(0, 100).map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(r => r.json()).catch(() => null)
        )
      );
      const filtered = stories
        .filter(s => s && s.title && s.url)
        .filter(s => TECH_KEYWORDS.some(kw => s.title.toLowerCase().includes(kw.toLowerCase())))
        .slice(0, 10);

      if (!filtered.length) {
        container.innerHTML = `<p class="text-sm text-muted italic py-4">No relevant stories right now — try again later.</p>`;
        return;
      }
      container.innerHTML = `<div class="grid gap-4 sm:grid-cols-2">` + filtered.map(s => {
        let domain = '';
        try { domain = new URL(s.url).hostname.replace('www.', ''); } catch (_) {}
        const date = new Date(s.time * 1000).toLocaleDateString('en-US',
          { year: 'numeric', month: 'short', day: 'numeric' });
        return `
          <article class="bg-silver rounded-xl border border-border p-4 hover:shadow-md transition-shadow flex flex-col gap-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-xs text-muted tabular-nums">${date}</span>
              <span class="rounded-full px-2.5 py-0.5 text-[11px] font-semibold bg-blue-50 text-blue-700 ring-1 ring-blue-200">AI / Tech</span>
              ${domain ? `<span class="text-[11px] text-muted/70">${esc(domain)}</span>` : ''}
            </div>
            <h3 class="font-semibold text-ink leading-snug text-sm">
              <a href="${esc(s.url)}" class="hover:text-red transition-colors" target="_blank" rel="noopener">${esc(s.title)}</a>
            </h3>
            <p class="text-xs text-muted">${s.score || 0} points · ${s.descendants || 0} comments</p>
          </article>`;
      }).join('') + `</div>`;
    } catch (e) {
      container.innerHTML = `<p class="text-sm text-muted italic py-4">Could not load news. Check your connection.</p>`;
    }
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
        <h1 class="mt-4 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          ${esc(D.lab.tagline)}
        </h1>
        <p class="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed">${esc(D.lab.mission)}</p>
        <div class="mt-6 sm:mt-8 flex flex-wrap gap-3">
          <a href="research.html" class="inline-flex items-center gap-2 rounded-md bg-red px-4 sm:px-5 py-2.5 text-sm font-semibold text-white hover:bg-deep transition-colors">Our Research</a>
          <a href="members.html" class="inline-flex items-center gap-2 rounded-md border border-white/25 px-4 sm:px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">Meet the Team</a>
        </div>`;
    },

    // Tech & AI News — live from Hacker News, auto-fetches on render
    technews(el) {
      setTimeout(() => fetchTechNews(el), 0);
      return `<p class="text-sm text-muted italic py-4">Loading latest tech &amp; AI news…</p>`;
    },

    // Research project cards
    projects() {
      if (!D.projects.length) return emptyState('Projects coming soon.');
      return D.projects.map(p => `
        <article class="flex flex-col bg-white rounded-xl border border-border p-4 sm:p-6 hover:shadow-md transition-shadow">
          <div class="flex items-start justify-between gap-3 mb-3">
            <h3 class="font-semibold text-ink text-base sm:text-lg leading-snug min-w-0">${esc(p.title)}</h3>
            <span class="shrink-0 rounded-full px-2.5 sm:px-3 py-1 text-xs font-semibold ${
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

    // Group photo carousel
    'group-photo'() {
      const photos = D.groupPhotos;
      if (!photos || !photos.length) return `
        <figure class="overflow-hidden rounded-2xl bg-coal border border-border">
          <div class="relative aspect-[3/2] w-full grid place-items-center">
            <p class="text-white/50 text-sm">Add group photos in js/data.js</p>
          </div>
        </figure>`;

      const slides = photos.map((p, i) => `
        <div class="carousel-slide absolute inset-0 transition-opacity duration-700 ${i === 0 ? 'opacity-100' : 'opacity-0'}">
          <img src="${esc(p.src)}" alt="${esc(p.caption)}"
               class="h-full w-full object-cover">
        </div>`).join('');

      setTimeout(() => {
        const wrap = document.querySelector('.carousel-wrap');
        if (!wrap) return;
        const allSlides = wrap.querySelectorAll('.carousel-slide');
        let current = 0;
        function goTo(n) {
          allSlides[current].classList.replace('opacity-100', 'opacity-0');
          current = (n + allSlides.length) % allSlides.length;
          allSlides[current].classList.replace('opacity-0', 'opacity-100');
        }
        setInterval(() => goTo(current + 1), 3000);
      }, 0);

      return `
        <figure class="carousel-wrap overflow-hidden rounded-xl sm:rounded-2xl border border-border">
          <div class="relative aspect-[4/3] sm:aspect-[3/2] w-full">
            ${slides}
          </div>
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
               class="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-xl bg-slate-100 text-slate-600 hover:bg-red hover:text-white transition-colors">
              ${ICONS[k] || ICONS.website}
            </a>`).join('');
        const email = m.email
          ? `<a href="mailto:${esc(m.email)}" aria-label="Email ${esc(m.name)}"
               class="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-xl bg-slate-100 text-slate-600 hover:bg-red hover:text-white transition-colors">
               ${ICONS.email}
             </a>`
          : '';
        const isPI = m.role === 'Principal Investigator';
        const focusTags = m.focus
          ? m.focus.split(',').map(t => t.trim()).filter(Boolean)
          : [];
        const avatar = m.photo
          ? `<img src="${esc(m.photo)}" alt="Photo of ${esc(m.name)}"
                  class="h-full w-full object-cover object-top" onerror="this.parentElement.innerHTML='<span class=\'text-2xl font-bold text-white/40\'>${esc(m.name.split(' ').map(w=>w[0]).join('').slice(0,2))}</span>'">`
          : `<span class="text-2xl font-bold text-white/40">${esc(m.name.split(' ').map(w=>w[0]).join('').slice(0,2))}</span>`;
        return `
          <article class="flex flex-col items-center text-center rounded-xl bg-white border border-border p-4 sm:p-6 hover:shadow-md transition-shadow ${isPI ? 'ring-1 ring-red/40' : ''}">
            <div class="h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden bg-silver ring-2 ${isPI ? 'ring-red' : 'ring-border'} grid place-items-center mb-3 sm:mb-4 shrink-0">
              ${avatar}
            </div>
            <h3 class="font-bold text-ink text-sm sm:text-base leading-snug">${esc(m.name)}</h3>
            <p class="mt-1 text-[11px] sm:text-xs font-medium text-red uppercase tracking-wider">${esc(m.role)}</p>
            ${focusTags.length ? `
              <div class="mt-2 sm:mt-3 flex flex-wrap justify-center gap-1 sm:gap-1.5">
                ${focusTags.map(t => `<span class="rounded-md bg-slate-100 border border-slate-200 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-slate-600">${esc(t)}</span>`).join('')}
              </div>` : ''}
            ${(email || social) ? `<div class="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2 justify-center">${email}${social}</div>` : ''}
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
        <section aria-labelledby="y-${year}" class="grid gap-4 sm:gap-6 md:grid-cols-[80px_1fr] lg:grid-cols-[96px_1fr]">
          <h2 id="y-${year}" class="text-xl sm:text-2xl font-bold text-red pt-1">${year}</h2>
          <ul class="space-y-3 sm:space-y-4 min-w-0">
            ${byYear[year].map(p => `
              <li class="bg-white rounded-xl border border-border p-4 sm:p-5 min-w-0">
                <div class="flex flex-wrap items-center gap-2 mb-2">
                  <span class="rounded-full bg-red/10 text-red px-2.5 py-0.5 text-[11px] font-semibold">${esc(p.type || 'Paper')}</span>
                  <span class="text-xs sm:text-sm text-muted min-w-0">${esc(p.venue)}</span>
                </div>
                <h3 class="font-semibold text-ink leading-snug text-sm sm:text-base min-w-0">
                  ${!isTodo(p.link) && p.link
                    ? `<a href="${esc(p.link)}" target="_blank" rel="noopener" class="hover:text-red transition-colors">${esc(p.title)}</a>`
                    : esc(p.title)}
                </h3>
                <p class="mt-1 text-xs sm:text-sm text-muted">${esc(p.authors)}</p>
              </li>`).join('')}
          </ul>
        </section>`).join('');
    },

    // Lab Tools
    tools() {
      if (!D.tools || !D.tools.length) return emptyState('No tools listed yet.');
      return D.tools.map(t => `
        <article class="bg-white rounded-xl border border-border p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3 sm:gap-4">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div class="min-w-0">
              <h3 class="text-base sm:text-lg font-bold text-ink">${esc(t.name)}</h3>
              <p class="mt-1 text-sm text-muted leading-relaxed">${esc(t.description)}</p>
              ${t.credit ? `<p class="mt-2 text-xs font-semibold text-ink">${esc(t.credit.label)}: ${esc(t.credit.name)}</p>` : ''}
            </div>
            ${t.tags && t.tags.length ? `
              <div class="flex flex-wrap gap-1.5 sm:shrink-0">
                ${t.tags.map(tag => `<span class="rounded-full bg-silver border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted">${esc(tag)}</span>`).join('')}
              </div>` : ''}
          </div>
          ${!isTodo(t.url) ? `
            <a href="${esc(t.url)}" target="_blank" rel="noopener"
               class="self-start rounded-lg bg-red px-4 py-2 text-sm font-semibold text-white hover:bg-deep transition-colors">
              Open tool ↗
            </a>` : `
            <span class="self-start rounded-lg bg-silver border border-border px-4 py-2 text-sm font-medium text-muted cursor-not-allowed">
              Coming soon
            </span>`}
        </article>`).join('');
    }
  };

  // fetchTechNews is called directly from index.html on DOMContentLoaded

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