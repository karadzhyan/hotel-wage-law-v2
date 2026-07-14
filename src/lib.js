import { product, routes } from './data.js';

export const esc = value => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
export const icon = name => `<svg class="icon" aria-hidden="true"><use href="assets/icons.svg#${name}"></use></svg>`;
export const status = (text, tone='neutral') => `<span class="status status--${tone}">${esc(text)}</span>`;
export const meter = value => `<span class="meter"><i><em style="width:${Number(value)}%"></em></i><b>${Number(value)}%</b></span>`;
export const button = (label, href='#', kind='secondary') => `<a class="button button--${kind}" href="${href}">${label}</a>`;
export const sectionHead = (eyebrow, title, copy='') => `<header class="section-head"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2>${copy ? `<p>${copy}</p>` : ''}</header>`;

export function brand(inverse=false) {
  return `<span class="brand ${inverse?'brand--inverse':''}"><span class="brand__mark"><i></i><i></i><i></i></span><span><strong>Hotel Wage Law</strong><small>Hospitality intelligence & control</small></span></span>`;
}

function publicNav(active) {
  return routes.slice(0,5).map(([path,label]) => `<a href="${path}" ${path===active?'aria-current="page"':''}>${label}</a>`).join('');
}

export function publicShell(route, content) {
  return `<a class="skip" href="#main">Skip to content</a><header class="public-header"><a href="/">${brand(true)}</a><nav>${publicNav(route)}</nav><div class="header-actions"><button class="quiet" data-command>${icon('search')} Search</button>${button('Enterprise access →','/app/','ghost')}</div><button class="menu" data-menu aria-label="Toggle navigation">${icon('menu')}</button></header><nav class="mobile-nav" data-mobile-nav hidden>${publicNav(route)}<a href="/app/">Enterprise access</a></nav><main id="main">${content}</main>${publicFooter()}${overlay()}<div class="toast" data-toast hidden></div>`;
}

function publicFooter() {
  return `<footer class="public-footer"><div class="footer-grid"><div>${brand(true)}<p>Independent, source-governed hospitality wage-and-hour intelligence designed to connect legal change to accountable enterprise response.</p></div><div><strong>Intelligence</strong><a href="/intelligence/">Issue architecture</a><a href="/jurisdictions/">Jurisdictions</a><a href="/tools/">Tools</a><a href="/methodology/">Evidence standard</a></div><div><strong>Enterprise</strong><a href="/app/">Portfolio command</a><a href="/app/changes/">Changes</a><a href="/app/controls/">Controls</a><a href="/app/research/">Research</a></div><div class="footer-cta"><span class="eyebrow eyebrow--light">Enterprise control plane</span><h2>Turn authority into accountable response.</h2>${button('Enter the prototype →','/app/','accent')}</div></div><div class="footer-legal"><span>© 2026 Hotel Wage Law</span><span>Educational information—not legal advice</span><span>Prototype data is illustrative</span></div></footer>`;
}

const appItems = [
  ['/app/','command','Portfolio command'],['/app/changes/','signal','Changes'],['/app/matters/','matter','Matter'],['/app/controls/','shield','Controls'],['/app/properties/','building','Portfolio'],['/app/research/','book','Research'],['/app/decisions/','decision','Decision records']
];

function appSidebar(active) {
  return `<aside class="sidebar" data-sidebar><div class="sidebar-brand"><a href="/app/">${brand(true)}</a><button data-close-sidebar aria-label="Close navigation">${icon('close')}</button></div><button class="portfolio-switch">${icon('building')}<span><small>Active portfolio</small><strong>North America · 34 properties</strong></span>${icon('chevron')}</button><nav><small>CONTROL PLANE</small>${appItems.slice(0,5).map(([path,ic,label])=>`<a href="${path}" ${path===active?'aria-current="page"':''}>${icon(ic)}<span>${label}</span>${label==='Changes'?'<b>4</b>':label==='Matter'?'<b>7</b>':''}</a>`).join('')}<small>INTELLIGENCE</small>${appItems.slice(5).map(([path,ic,label])=>`<a href="${path}" ${path===active?'aria-current="page"':''}>${icon(ic)}<span>${label}</span></a>`).join('')}</nav><footer><div class="health"><span>94</span><div><strong>Source health</strong><small>1 item requires review</small></div></div><a href="/methodology/">${icon('shield')} Evidence standard</a></footer></aside>`;
}

export function appShell(route, title, subtitle, content, rail='') {
  return `<a class="skip" href="#main">Skip to content</a>${appSidebar(route)}<div class="app"><header class="topbar"><button class="sidebar-toggle" data-open-sidebar>${icon('menu')}</button><div class="crumb"><a href="/app/">North America</a><span>›</span><strong>${title}</strong></div><span class="current"><i></i> Authority current through ${product.reviewedThrough}</span><button class="ask" data-command>${icon('spark')} Ask across law + portfolio <kbd>⌘K</kbd></button><button class="avatar">AK</button></header><main id="main" class="app-main"><header class="page-title"><div><span class="eyebrow">${title}</span><h1>${subtitle}</h1></div><div class="page-actions"><button class="button button--secondary" data-action="export">${icon('download')} Export</button><button class="button button--primary" data-command>${icon('spark')} Grounded ask</button></div></header><div class="workspace ${rail?'workspace--rail':''}"><div class="workspace-main">${content}</div>${rail?`<aside class="rail">${rail}</aside>`:''}</div></main></div>${overlay()}<div class="toast" data-toast hidden></div>`;
}

export function card(eyebrow,title,body='',extra='') {
  return `<section class="card"><header><div><span class="eyebrow">${eyebrow}</span><h2>${title}</h2></div>${extra}</header>${body}</section>`;
}

export function railCard(eyebrow,title,body, tone='') {
  return `<section class="rail-card ${tone?`rail-card--${tone}`:''}"><span class="eyebrow ${tone?'eyebrow--light':''}">${eyebrow}</span><h2>${title}</h2>${body}</section>`;
}

function overlay() {
  return `<div class="overlay" data-overlay hidden><section class="command" role="dialog" aria-modal="true" aria-label="Grounded search"><header><div>${icon('spark')}<span><strong>Grounded ask</strong><small>Authority + permitted portfolio context</small></span></div><button data-close-overlay>${icon('close')}</button></header><label>${icon('search')}<input data-query placeholder="Ask a legal or portfolio question…"><kbd>↵</kbd></label><div data-command-default><small class="eyebrow">Continue working</small><a href="/app/matters/">${icon('matter')}<span><strong>Los Angeles hotel wage step</strong><small>MTR-2026-041 · decision due</small></span>→</a><a href="/app/controls/">${icon('shield')}<span><strong>Benefit-credit variance control</strong><small>CTL-BEN-006 · evidence gap</small></span>→</a></div><article data-command-answer hidden><span>${icon('check')} Grounded in governed records</span><h2 data-answer-question></h2><p>Seven Southern California properties require review. Four are implementation-ready, two require benefit evidence, and one requires employee-population reconciliation.</p><div><a href="/app/changes/">Open impact analysis</a><button data-reset>Ask another question</button></div></article><footer><span><kbd>↵</kbd> Answer</span><span><kbd>Esc</kbd> Close</span><span>${icon('lock')} Permission scoped</span></footer></section></div>`;
}

export function evidenceRail() {
  return railCard('Evidence health','Why this is supportable',`<ul class="evidence-mini"><li><i class="dot good"></i><span><strong>Primary authority</strong><small>3 current source versions</small></span><b>100%</b></li><li><i class="dot good"></i><span><strong>Approved rule</strong><small>Version 3 · Jun 13</small></span><b>100%</b></li><li><i class="dot warn"></i><span><strong>Fact readiness</strong><small>2 material gaps</small></span><b>74%</b></li><li><i class="dot good"></i><span><strong>Owners assigned</strong><small>4 accountabilities</small></span><b>100%</b></li></ul><a class="text-link" href="/methodology/">Inspect evidence standard →</a>`);
}

export function pageDocument(title, description, bodyClass='') {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${esc(description)}"><meta name="theme-color" content="#07182f"><meta name="robots" content="noindex,nofollow"><title>${esc(title)} · Hotel Wage Law</title><link rel="icon" href="assets/favicon.svg"><link rel="stylesheet" href="assets/styles.css"><link rel="stylesheet" href="assets/layout.css"><script type="module" src="assets/main.js"></script></head><body class="${bodyClass}"><div id="app"></div></body></html>`;
}
