import { access, readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { routes, product, changes, properties, controls, jurisdictions, tools, evidenceLayers } from '../src/data.js';

const root = new URL('..', import.meta.url).pathname;
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

assert(routes.length === 12, `expected 12 routes, found ${routes.length}`);
assert(new Set(routes.map(([path])=>path)).size === routes.length, 'routes must be unique');
assert(product.corpus.issueBriefs === 18, 'issue brief count changed without review');
assert(product.corpus.jurisdictions === 51, 'jurisdiction count changed without review');
assert(product.corpus.hotelLaws === 19, 'hotel-law count changed without review');
assert(product.corpus.tools === 10, 'tool count changed without review');
assert(changes.every(item => item.id && item.title && item.materiality), 'change records are incomplete');
assert(properties.every(item => item.readiness >= 0 && item.readiness <= 100), 'property readiness must be 0–100');
assert(controls.every(item => item.coverage >= 0 && item.coverage <= 100), 'control coverage must be 0–100');
assert(new Set(jurisdictions.map(item=>item.code)).size === jurisdictions.length, 'jurisdiction codes must be unique');
assert(tools.length === 10 && new Set(tools.map(item=>item.id)).size === tools.length, 'tool registry must contain ten unique records');
assert(evidenceLayers.length === 7, 'evidence standard must contain seven layers');

for (const file of ['src/main.js','src/styles.css','src/layout.css','src/icons.svg','scripts/build.mjs','scripts/verify-build.mjs','scripts/serve.mjs','playwright.config.mjs','docs/CURRENT-STATE.md','docs/evidence/phase-0/README.md','.github/workflows/ci.yml','.github/workflows/pages.yml']) {
  try { await access(join(root,file)); } catch { failures.push(`missing ${file}`); }
}

for (const file of ['src/main.js','src/pages-public.js','src/pages-app.js','src/styles.css','src/layout.css']) {
  const content = await readFile(join(root,file),'utf8');
  assert(!/\bTODO\b|\blorem\b|\[VERIFY\]/i.test(content), `${file} contains a forbidden placeholder`);
}

const packageJson = JSON.parse(await readFile(join(root,'package.json'),'utf8'));
const lockfile = JSON.parse(await readFile(join(root,'package-lock.json'),'utf8'));
assert(packageJson.scripts?.verify?.includes('check:build'), 'verify must inspect generated output');
assert(packageJson.scripts?.['verify:pages']?.includes('build:pages'), 'verify:pages must create a project-path build');
assert(packageJson.scripts?.['test:browser'] === 'playwright test', 'browser smoke command is missing');
assert(lockfile.packages?.['']?.devDependencies?.['@playwright/test'] === packageJson.devDependencies?.['@playwright/test'], 'Playwright lockfile version is stale');
assert(lockfile.packages?.['']?.devDependencies?.['@axe-core/playwright'] === packageJson.devDependencies?.['@axe-core/playwright'], 'axe lockfile version is stale');

const workflowDirectory = join(root,'.github','workflows');
const workflows = (await readdir(workflowDirectory)).filter(file => /\.ya?ml$/.test(file)).sort();
assert(workflows.includes('ci.yml') && workflows.includes('pages.yml'), `continuing workflow inventory is incomplete: ${workflows.join(', ')}`);
for (const retired of ['final-branch-cleanup.yml','fix-pages-routing.yml','merge-release.yml','normalize-release.yml','post-release-cleanup.yml']) {
  assert(!workflows.includes(retired), `retired one-time workflow remains: ${retired}`);
}
try {
  const releaseMarkers = await readdir(join(root,'.release'));
  assert(releaseMarkers.length === 0, `one-time release markers still exist: ${releaseMarkers.join(', ')}`);
} catch {}

const ci = await readFile(join(workflowDirectory,'ci.yml'),'utf8');
const pages = await readFile(join(workflowDirectory,'pages.yml'),'utf8');
for (const [name, workflow] of [['CI',ci],['Pages',pages]]) {
  assert(/permissions:\n\s+contents: read/.test(workflow), `${name} lacks least-privilege default permissions`);
  assert(/concurrency:/.test(workflow), `${name} lacks concurrency control`);
  assert(/timeout-minutes:/.test(workflow), `${name} lacks job timeouts`);
  assert(/npm ci --ignore-scripts --no-audit --no-fund/.test(workflow), `${name} lacks deterministic install`);
}
assert(/Browser and accessibility smoke/.test(ci), 'CI lacks browser and accessibility coverage');
assert(/actions\/upload-artifact@v7/.test(ci), 'CI lacks retained build and browser artifacts');
assert(/\n  deploy:\n[\s\S]*?\n    environment:\n      name: github-pages/.test(pages), 'Pages environment must be scoped to the deploy job');
assert(/\n    permissions:\n      contents: read\n      pages: write\n      id-token: write/.test(pages), 'Pages deploy permissions are incomplete or overbroad');
assert(/actions\/upload-pages-artifact@v5/.test(pages), 'Pages artifact upload is missing');
assert(/actions\/deploy-pages@v5/.test(pages), 'Pages deployment is missing');

const currentState = await readFile(join(root,'docs','CURRENT-STATE.md'),'utf8');
for (const phrase of ['Phase 0 boundary','Remote baseline evidence','Owner-setting dependencies','Legal, security, privacy, and accessibility state']) {
  assert(currentState.includes(phrase), `CURRENT-STATE.md is missing ${phrase}`);
}

if (failures.length) {
  console.error(failures.map(item=>`✗ ${item}`).join('\n'));
  process.exit(1);
}
console.log(`Validated ${routes.length} routes, ${changes.length} changes, ${properties.length} properties, ${controls.length} controls, ${jurisdictions.length} prototype jurisdictions, and ${tools.length} tools.`);
