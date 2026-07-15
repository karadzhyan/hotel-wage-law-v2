import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { normalizeRoutePrefix } from '../e2e/url.mjs';

const main = await readFile(new URL('../src/main.js', import.meta.url), 'utf8');
const build = await readFile(new URL('../scripts/build.mjs', import.meta.url), 'utf8');

test('client navigation preserves a GitHub Pages project base', () => {
  assert.match(main, /deploymentBase/);
  assert.match(main, /a\[href\^=/);
  assert.match(main, /getAttribute\('href'\)/);
});

test('jurisdiction filtering normalizes numeric tiers', () => {
  assert.match(main, /String\(JSON\.parse\(card\.dataset\.jurisdiction\)\.tier\)/);
});

test('build emits an explicit deployment base', () => {
  assert.match(build, /BASE_PATH/);
  assert.match(build, /<base href=/);
});

test('browser verification normalizes explicit route prefixes', () => {
  assert.equal(normalizeRoutePrefix('/hotel-wage-law-v2/'), '/hotel-wage-law-v2');
  assert.equal(normalizeRoutePrefix('hotel-wage-law-v2'), '/hotel-wage-law-v2');
  assert.equal(normalizeRoutePrefix('/'), '');
  assert.equal(normalizeRoutePrefix('///'), '');
  assert.equal(normalizeRoutePrefix(''), '');
});
