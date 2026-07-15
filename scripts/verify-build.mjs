import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { routes } from '../src/data.js';

const root = new URL('..', import.meta.url).pathname;
const out = join(root, 'dist');
const baseSegments = (process.env.BASE_PATH || '/').split('/').filter(Boolean);
const expectedBasePath = baseSegments.length ? `/${baseSegments.join('/')}/` : '/';
const expectedAssets = ['main.js','data.js','lib.js','pages-public.js','pages-app.js','styles.css','layout.css','icons.svg','favicon.svg']
  .map(name => `assets/${name}`);
const failures = [];

async function exists(path) {
  try { await access(path); return true; } catch { return false; }
}

for (const [route] of routes) {
  const directory = route === '/' ? out : join(out, route.replace(/^\/+|\/+$/g, ''));
  const file = join(directory, 'index.html');
  if (!await exists(file)) {
    failures.push(`missing generated route ${route}`);
    continue;
  }
  const html = await readFile(file, 'utf8');
  if (!html.includes(`<base href="${expectedBasePath}">`)) failures.push(`${route} has the wrong base path`);
  if (!html.includes(`data-route="${route}"`)) failures.push(`${route} has the wrong route bootstrap`);
  if (!html.includes('src="assets/main.js"')) failures.push(`${route} is missing the application entry point`);
}

for (const asset of expectedAssets) {
  if (!await exists(join(out, asset))) failures.push(`missing generated asset ${asset}`);
}

for (const file of ['.nojekyll','404.html','build-manifest.json']) {
  if (!await exists(join(out, file))) failures.push(`missing generated file ${file}`);
}

if (await exists(join(out, '404.html'))) {
  const notFound = await readFile(join(out, '404.html'), 'utf8');
  if (!notFound.includes(`<base href="${expectedBasePath}">`)) failures.push('404.html has the wrong base path');
  if (notFound.includes('assets/main.js')) failures.push('404.html must not bootstrap the route application');
  if (!notFound.includes('<main id="main"')) failures.push('404.html is missing its main landmark');
}

if (await exists(join(out, 'build-manifest.json'))) {
  const manifest = JSON.parse(await readFile(join(out, 'build-manifest.json'), 'utf8'));
  if (manifest.basePath !== expectedBasePath) failures.push('build manifest has the wrong base path');
  if (JSON.stringify(manifest.routes) !== JSON.stringify(routes.map(([route]) => route))) failures.push('build manifest route list is stale');
  if (JSON.stringify(manifest.assets) !== JSON.stringify(expectedAssets)) failures.push('build manifest asset list is stale');
}

if (failures.length) {
  console.error(failures.map(failure => `✗ ${failure}`).join('\n'));
  process.exit(1);
}

console.log(`Verified ${routes.length} generated routes and ${expectedAssets.length} assets at ${expectedBasePath}`);
