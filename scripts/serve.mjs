import { createReadStream } from 'node:fs';
import { access, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize, sep } from 'node:path';

const root = new URL('../dist', import.meta.url).pathname;
const port = Number(process.env.PORT || 4173);
const baseSegments = (process.env.BASE_PATH || '/hotel-wage-law-v2/').split('/').filter(Boolean);
const basePath = baseSegments.length ? `/${baseSegments.join('/')}/` : '/';
const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};

function safePath(requestPath) {
  const relative = requestPath.slice(basePath.length).replace(/^\/+/, '');
  const file = normalize(join(root, relative));
  return file === root || file.startsWith(`${root}${sep}`) ? file : null;
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  if (!url.pathname.startsWith(basePath)) {
    response.writeHead(404).end('Not found');
    return;
  }

  let file = safePath(decodeURIComponent(url.pathname));
  if (!file) {
    response.writeHead(400).end('Bad request');
    return;
  }

  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    await access(file);
  } catch {
    file = join(root, '404.html');
    response.statusCode = 404;
  }

  response.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
  response.setHeader('Cache-Control', 'no-store');
  createReadStream(file).pipe(response);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Serving ${root} at http://127.0.0.1:${port}${basePath}`);
});
