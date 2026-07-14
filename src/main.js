import { renderPublic } from './pages-public.js';
import { renderApp } from './pages-app.js';

const route = document.body.dataset.route || '/';
const root = document.querySelector('#app');
root.innerHTML = route.startsWith('/app/') ? renderApp(route) : renderPublic(route);

// Root-relative application routes must stay under the GitHub Pages project path.
const deploymentBase = new URL(document.baseURI).pathname.replace(/\/$/, '');
if (deploymentBase) {
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.setAttribute('href', `${deploymentBase}${link.getAttribute('href')}`);
  });
}

const $ = (selector, context=document) => context.querySelector(selector);
const $$ = (selector, context=document) => [...context.querySelectorAll(selector)];
let overlayTrigger = null;

function toast(message) {
  const node = $('[data-toast]');
  if (!node) return;
  node.textContent = message;
  node.hidden = false;
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => { node.hidden = true; }, 3200);
}

function openOverlay() {
  const overlay = $('[data-overlay]');
  if (!overlay) return;
  overlayTrigger = document.activeElement;
  overlay.hidden = false;
  document.body.classList.add('locked');
  setTimeout(() => $('[data-query]', overlay)?.focus(), 0);
}
function closeOverlay() {
  const overlay = $('[data-overlay]');
  if (overlay) overlay.hidden = true;
  document.body.classList.remove('locked');
  overlayTrigger?.focus();
  overlayTrigger = null;
}
$$('[data-command]').forEach(button => button.addEventListener('click', openOverlay));
$('[data-close-overlay]')?.addEventListener('click', closeOverlay);
$('[data-overlay]')?.addEventListener('click', event => { if (event.target.matches('[data-overlay]')) closeOverlay(); });
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase()==='k') { event.preventDefault(); openOverlay(); }
  if (event.key==='Escape') {
    closeOverlay();
    $('[data-sidebar]')?.classList.remove('open');
    $('[data-open-sidebar]')?.setAttribute('aria-expanded','false');
    $('[data-mobile-nav]')?.setAttribute('hidden','');
    $('[data-menu]')?.setAttribute('aria-expanded','false');
    $('[data-menu]')?.setAttribute('aria-label','Open navigation');
  }
});

const query = $('[data-query]');
query?.addEventListener('keydown', event => {
  if (event.key!=='Enter' || !query.value.trim()) return;
  event.preventDefault();
  $('[data-command-default]').hidden = true;
  $('[data-command-answer]').hidden = false;
  $('[data-answer-question]').textContent = query.value.trim();
});
$('[data-reset]')?.addEventListener('click', () => {
  query.value='';
  $('[data-command-default]').hidden=false;
  $('[data-command-answer]').hidden=true;
  query.focus();
});

$('[data-menu]')?.addEventListener('click', () => {
  const nav=$('[data-mobile-nav]');
  nav.hidden=!nav.hidden;
  $('[data-menu]').setAttribute('aria-expanded',String(!nav.hidden));
  $('[data-menu]').setAttribute('aria-label',nav.hidden?'Open navigation':'Close navigation');
});
$('[data-open-sidebar]')?.addEventListener('click', () => {
  $('[data-sidebar]')?.classList.add('open');
  $('[data-open-sidebar]').setAttribute('aria-expanded','true');
});
$('[data-close-sidebar]')?.addEventListener('click', () => {
  $('[data-sidebar]')?.classList.remove('open');
  $('[data-open-sidebar]')?.setAttribute('aria-expanded','false');
  $('[data-open-sidebar]')?.focus();
});

$$('[data-action]').forEach(button => button.addEventListener('click', event => {
  event.preventDefault();
  const messages={export:'Export prepared from the current governed version.',demo:'The inspectable workflow opened.',evidence:'Evidence request opened.',source:'Source lineage opened.',copy:'Answer copied with citations.',revise:'Decision returned with requested revisions.'};
  toast(messages[button.dataset.action] || 'Prototype action recorded.');
}));

$$('[data-change-item]').forEach(item => item.addEventListener('click', () => {
  $$('[data-change-item]').forEach(x=>x.classList.toggle('active',x===item));
  const detail=JSON.parse(item.dataset.change);
  $('[data-change-eyebrow]').textContent=detail.eyebrow;
  $('[data-change-title]').textContent=detail.title;
  $('[data-change-summary]').textContent=detail.summary;
  const detailStatus=$('[data-change-status]');
  detailStatus.textContent=detail.status;
  detailStatus.className=`status status--${detail.tone}`;
  $('[data-change-delta]').textContent=detail.delta;
  $('[data-change-published]').textContent=detail.published;
  $('[data-change-effective]').textContent=detail.effective;
  $('[data-change-authority]').textContent=detail.authority;
  $('[data-change-source-health]').textContent=detail.sourceHealth;
  $('[data-change-scope]').textContent=detail.scope;
  $('[data-change-property-table]').hidden=!detail.hasPropertyScope;
  $('[data-change-unmodeled]').hidden=detail.hasPropertyScope;
  $$('[data-change-modeled]').forEach(node=>{node.hidden=!detail.hasPropertyScope;});
  $$('[data-change-unmodeled-only]').forEach(node=>{node.hidden=detail.hasPropertyScope;});
}));

const scenarioInputs=$$('[data-scenario]');
function updateScenario(){
  if(!scenarioInputs.length) return;
  const [p,e,b]=scenarioInputs.map(x=>Number(x.value));
  const structure=$('input[name="structure"]:checked')?.value || 'mixed';
  const factor=structure==='cash'?1.18:structure==='benefit'?.84:1;
  const base=(p*72000+e*b*210)*factor;
  $('[data-properties]').textContent=p;
  $('[data-employees]').textContent=e.toLocaleString();
  $('[data-benefit]').textContent=`$${b.toFixed(2)}`;
  $('[data-range]').textContent=`$${(base*.89/1e6).toFixed(2)}M – $${(base*1.19/1e6).toFixed(2)}M`;
}
scenarioInputs.forEach(x=>x.addEventListener('input',updateScenario));
$$('input[name="structure"]').forEach(x=>x.addEventListener('change',updateScenario));
updateScenario();

$$('[data-tier]').forEach(button=>button.addEventListener('click',()=>{
  $$('[data-tier]').forEach(x=>x.classList.toggle('active',x===button));
  const tier=button.dataset.tier;
  $$('[data-jurisdiction]').forEach(card=>card.hidden=tier!=='all'&&String(JSON.parse(card.dataset.jurisdiction).tier)!==tier);
}));
$('[data-jurisdiction-search]')?.addEventListener('input',event=>{
  const q=event.target.value.toLowerCase();
  $$('[data-jurisdiction]').forEach(card=>{ const j=JSON.parse(card.dataset.jurisdiction); card.hidden=!`${j.code} ${j.name}`.toLowerCase().includes(q); });
});
$$('[data-jurisdiction]').forEach(card=>card.addEventListener('click',()=>{
  $$('[data-jurisdiction]').forEach(x=>x.classList.toggle('selected',x===card));
  const j=JSON.parse(card.dataset.jurisdiction), detail=$('[data-jurisdiction-detail]');
  detail.querySelector('.code').textContent=j.code;
  detail.querySelector('h2').textContent=j.name;
  const values=[j.rate,j.tip,j.overtime,j.hotel];
  detail.querySelectorAll('dd').forEach((dd,i)=>dd.textContent=values[i]);
}));

$$('[data-tool-filter]').forEach(button=>button.addEventListener('click',()=>{
  $$('[data-tool-filter]').forEach(x=>x.classList.toggle('active',x===button));
  $$('[data-tool-family]').forEach(card=>card.hidden=button.dataset.toolFilter!=='all'&&card.dataset.toolFamily!==button.dataset.toolFilter);
}));

$('[data-run-research]')?.addEventListener('click',()=>{
  $('[data-research-status]').textContent='Grounded answer regenerated · 4 primary authorities · 1 disclosed fact gap';
  toast('Research answer regenerated against the current source and fact snapshots.');
});

$$('[data-approve]').forEach(button=>button.addEventListener('click',()=>{
  $$('[data-approve]').forEach(x=>{x.textContent='Approved';x.disabled=true;});
  toast('Decision approved. The exact provenance snapshot was preserved.');
}));
