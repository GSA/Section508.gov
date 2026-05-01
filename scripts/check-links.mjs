import { readFile } from 'node:fs/promises';
import net from 'node:net';
import { LinkChecker, LinkState } from 'linkinator';

const [path = 'index.html', configPath = 'linkinator.offline.config.json'] = process.argv.slice(2);

// Linkinator serves local files through a temporary HTTP server. Picking the
// port up front avoids a CLI issue where the random port can be read too early.
function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on('error', reject);
    server.listen(0, () => {
      const address = server.address();
      const port = address && typeof address === 'object' ? address.port : undefined;
      server.close(() => {
        if (port) {
          resolve(port);
        } else {
          reject(new Error('Unable to reserve a local port for link checking.'));
        }
      });
    });
  });
}

// The config files use Linkinator CLI-style names where practical. Convert
// those to the API option names used by LinkChecker.
function normalizeConfig(config) {
  const options = { ...config };

  if (options.skip) {
    options.linksToSkip = Array.isArray(options.skip) ? options.skip : [options.skip];
    delete options.skip;
  }

  return options;
}

// Local-origin rewrites are built as regular expressions, so escape the
// configured production hostnames before inserting them into patterns.
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const config = normalizeConfig(JSON.parse(await readFile(configPath, 'utf8')));
const checker = new LinkChecker();
const start = Date.now();

// Surface useful non-fatal events without printing every successful link.
checker.on('retry', ({ url, secondsUntilRetry }) => {
  console.warn(`Retrying ${url} in ${secondsUntilRetry} seconds.`);
});

checker.on('redirect', ({ url, targetUrl, status }) => {
  console.warn(`[redirect] ${url} -> ${targetUrl} (${status})`);
});

checker.on('statusCodeWarning', ({ url, status }) => {
  console.warn(`[warn] ${url} (${status})`);
});

console.error(`-> crawling ${path} with ${configPath}`);

const port = await getFreePort();
const localOrigins = config.localOrigins ?? [];
delete config.localOrigins;

// Absolute links to the public site should be checked against this PR's local
// build, not the currently deployed production site.
const result = await checker.check({
  ...config,
  path,
  port,
  urlRewriteExpressions: [
    ...(config.urlRewriteExpressions ?? []),
    ...localOrigins.flatMap((origin) => [
      {
        pattern: new RegExp(`^${escapeRegExp(origin)}/+`),
        replacement: `http://localhost:${port}/`
      },
      {
        pattern: new RegExp(`^${escapeRegExp(origin)}$`),
        replacement: `http://localhost:${port}`
      }
    ])
  ]
});

// Keep final output compact: broken links get detail, successful runs get a
// single summary line suitable for PR logs.
const broken = result.links.filter((link) => link.state === LinkState.BROKEN);
const scanned = result.links.filter((link) => link.state !== LinkState.SKIPPED);
const elapsed = ((Date.now() - start) / 1000).toFixed(1);

for (const link of broken) {
  const parent = link.parent ? ` from ${link.parent}` : '';
  const status = link.status ? ` (${link.status})` : '';
  console.error(`[broken] ${link.url}${status}${parent}`);
}

if (broken.length > 0) {
  console.error(`ERROR: Detected ${broken.length} broken links. Scanned ${scanned.length} links in ${elapsed} seconds.`);
  process.exit(1);
}

console.error(`OK: Successfully scanned ${scanned.length} links in ${elapsed} seconds.`);
