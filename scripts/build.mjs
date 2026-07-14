import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { routes } from '../src/data.js';
import { pageDocument } from '../src/lib.js';

const root = new URL('..', import.meta.url).pathname;
const out = join(root, 'dist');
const basePath = (process.env.BASE_PATH || '/').replace(/\/+$/, '') + '/';

await rm(out, { recursive:true, force:true });
await mkdir(join(out, 'assets'), { recursive:true });
for (const name of ['main.js','data.js','lib.js','pages-public.js','pages-app.js','styles.css','layout.css']) {
  await cp(join(root,'src',name), join(out,'assets',name));
}
await cp(join(root,'src','icons.svg'), join(out,'assets','icons.svg'));
await cp(join(root,'src','favicon.svg'), join(out,'assets','favicon.svg'));

for (const [route,label] of routes) {
  const path = route === '/' ? out : join(out, route.replace(/^\/+|\/+$/g,''));
  await mkdir(path, { recursive:true });
  const title = label;
  const description = `${label} — Hotel Wage Law hospitality wage-and-hour intelligence and control-plane prototype.`;
  let html = pageDocument(title, description, route.startsWith('/app/') ? 'app-page' : 'public-page');
  html = html.replace('<head>', `<head><base href="${basePath}">`).replace('<body class="', `<body data-route="${route}" class="`);
  await writeFile(join(path,'index.html'), html);
}

await writeFile(join(out,'404.html'), pageDocument('Not found','The requested Hotel Wage Law prototype route was not found.').replace('<head>',`<head><base href="${basePath}">`).replace('<div id="app"></div>','<main style="padding:10vh 8vw"><h1>Page not found</h1><p><a href="./">Return to Hotel Wage Law</a></p></main>'));
await writeFile(join(out,'.nojekyll'),'');
console.log(`Built ${routes.length} routes at ${basePath}`);
