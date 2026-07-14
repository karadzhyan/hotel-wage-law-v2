import { access, readFile } from 'node:fs/promises';
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

for (const file of ['src/main.js','src/styles.css','src/layout.css','src/icons.svg','scripts/build.mjs','.github/workflows/ci.yml','.github/workflows/pages.yml']) {
  try { await access(join(root,file)); } catch { failures.push(`missing ${file}`); }
}

for (const file of ['src/main.js','src/pages-public.js','src/pages-app.js','src/styles.css','src/layout.css']) {
  const content = await readFile(join(root,file),'utf8');
  assert(!/\bTODO\b|\blorem\b|\[VERIFY\]/i.test(content), `${file} contains a forbidden placeholder`);
}

if (failures.length) {
  console.error(failures.map(item=>`✗ ${item}`).join('\n'));
  process.exit(1);
}
console.log(`Validated ${routes.length} routes, ${changes.length} changes, ${properties.length} properties, ${controls.length} controls, ${jurisdictions.length} prototype jurisdictions, and ${tools.length} tools.`);
