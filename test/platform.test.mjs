import test from 'node:test';
import assert from 'node:assert/strict';
import { product, routes, changes, properties, controls, jurisdictions, tools, evidenceLayers } from '../src/data.js';
import { renderPublic } from '../src/pages-public.js';
import { renderApp } from '../src/pages-app.js';

const publicRoutes = routes.filter(([path]) => !path.startsWith('/app/')).map(([path])=>path);
const appRoutes = routes.filter(([path]) => path.startsWith('/app/')).map(([path])=>path);

test('canonical corpus counts remain explicit', () => {
  assert.deepEqual(product.corpus, { issueBriefs:18, jurisdictions:51, hotelLaws:19, tools:10 });
});

test('route registry contains twelve unique routes', () => {
  assert.equal(routes.length,12);
  assert.equal(new Set(routes.map(([path])=>path)).size,12);
});

test('every public route renders a main experience', () => {
  for (const route of publicRoutes) {
    const html=renderPublic(route);
    assert.match(html,/<main id="main">/);
    assert.match(html,/Hotel Wage Law/);
    assert.doesNotMatch(html,/undefined|null/);
  }
});

test('every enterprise route renders the governed shell', () => {
  for (const route of appRoutes) {
    const html=renderApp(route);
    assert.match(html,/class="sidebar"/);
    assert.match(html,/Authority current through/);
    assert.doesNotMatch(html,/undefined|null/);
  }
});

test('change records expose materiality and reach', () => {
  for (const item of changes) {
    assert.ok(item.id.startsWith('CHG-'));
    assert.ok(['critical','high','elevated'].includes(item.materiality));
    assert.ok(item.reach.length>3);
  }
});

test('property readiness is bounded', () => {
  for (const item of properties) assert.ok(item.readiness>=0 && item.readiness<=100);
});

test('control coverage is bounded and IDs are unique', () => {
  assert.equal(new Set(controls.map(item=>item.id)).size,controls.length);
  for (const item of controls) assert.ok(item.coverage>=0 && item.coverage<=100);
});

test('jurisdiction tiers are valid and codes are unique', () => {
  assert.equal(new Set(jurisdictions.map(item=>item.code)).size,jurisdictions.length);
  for (const item of jurisdictions) assert.ok(['1','2','3','4'].includes(item.tier));
});

test('tool registry contains ten unique inspectable workflows', () => {
  assert.equal(tools.length,10);
  assert.equal(new Set(tools.map(item=>item.id)).size,10);
  for (const item of tools) assert.ok(item.inputs && item.output);
});

test('evidence standard preserves seven distinct layers', () => {
  assert.equal(evidenceLayers.length,7);
  assert.equal(new Set(evidenceLayers.map(([,name])=>name)).size,7);
});

test('public content discloses the prototype boundary', () => {
  assert.match(renderPublic('/'),/Prototype data is illustrative|illustrative/i);
});

test('decision page preserves recommendation, alternatives, conditions, and provenance', () => {
  const html=renderApp('/app/decisions/');
  for (const term of ['RECOMMENDATION','ALTERNATIVES','CONDITIONS','PROVENANCE SNAPSHOT']) assert.match(html,new RegExp(term));
});

test('matter page separates authority, facts, model, and decision', () => {
  const html=renderApp('/app/matters/');
  for (const term of ['Governed matter','Fact and judgment ledger','Illustrative model','Decision required']) assert.match(html,new RegExp(term,'i'));
});

test('control page distinguishes design, operation, evidence, and assurance', () => {
  const html=renderApp('/app/controls/');
  for (const term of ['Design','Operate','Evidence','Assure']) assert.match(html,new RegExp(term));
});
