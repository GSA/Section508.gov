import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

// html-validate's recommended preset expects HTML void elements without the
// XHTML-style trailing slash: <img>, <meta>, <br>, and so on.
const VOID_ELEMENTS = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
];

const VOID_TAG_PATTERN = new RegExp(
  `<(${VOID_ELEMENTS.join('|')})(\\s(?:[^"'<>]|"[^"]*"|'[^']*')*?)\\s*/>`,
  'gi'
);

const EXCLUDED_DIRS = new Set([
  '.git',
  '.jekyll-cache',
  '.sass-cache',
  '_site',
  'node_modules'
]);

const EXCLUDED_PREFIXES = [
  `assets${path.sep}online-training${path.sep}`
];

const args = new Set(process.argv.slice(2));
const shouldWrite = args.has('--write');
const shouldCheck = args.has('--check') || !shouldWrite;
const root = process.cwd();

// Only source Markdown and HTML are formatted. Generated output and bundled
// training/vendor assets are intentionally left alone.
function isTargetFile(filePath) {
  return filePath.endsWith('.html') || filePath.endsWith('.md');
}

function isExcluded(relativePath) {
  return EXCLUDED_PREFIXES.some((prefix) => relativePath.startsWith(prefix));
}

// Walk the repository recursively while honoring the exclusion lists above.
async function collectFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    const relativePath = path.relative(root, fullPath);

    if (entry.isDirectory()) {
      if (!EXCLUDED_DIRS.has(entry.name) && !isExcluded(`${relativePath}${path.sep}`)) {
        files.push(...await collectFiles(fullPath));
      }
      continue;
    }

    if (entry.isFile() && isTargetFile(entry.name) && !isExcluded(relativePath)) {
      files.push(fullPath);
    }
  }

  return files;
}

function trimTrailingWhitespace(content) {
  return content.replace(/[ \t]+$/gm, '');
}

// Convert self-closing void elements while preserving attributes, including
// quoted values that may contain spaces.
function omitVoidElementSlash(content) {
  return content.replace(VOID_TAG_PATTERN, (_match, tagName, attributes) => {
    return `<${tagName}${attributes}>`;
  });
}

// Markdown files can contain code examples where tag syntax should stay
// literal. Split the document so void-tag formatting skips fenced code blocks.
function splitMarkdownFences(content) {
  const lines = content.split(/(\r?\n)/);
  const chunks = [];
  let buffer = '';
  let inFence = false;
  let fenceMarker = null;

  for (let index = 0; index < lines.length; index += 2) {
    const line = lines[index] ?? '';
    const newline = lines[index + 1] ?? '';
    const fenceMatch = line.match(/^(\s*)(`{3,}|~{3,})/);
    const isClosingFence = fenceMatch && fenceMarker && fenceMatch[2].startsWith(fenceMarker[0]);
    const isOpeningFence = fenceMatch && !inFence;

    if (isOpeningFence || isClosingFence) {
      if (buffer) {
        chunks.push({ content: buffer, fenced: inFence });
        buffer = '';
      }

      buffer += line + newline;

      if (isOpeningFence) {
        inFence = true;
        fenceMarker = fenceMatch[2];
      } else {
        chunks.push({ content: buffer, fenced: true });
        buffer = '';
        inFence = false;
        fenceMarker = null;
      }

      continue;
    }

    buffer += line + newline;
  }

  if (buffer) {
    chunks.push({ content: buffer, fenced: inFence });
  }

  return chunks;
}

// In fenced code blocks, trim trailing whitespace only. Outside fences, apply
// both whitespace cleanup and html-validate void-element style cleanup.
function formatMarkdown(content) {
  return splitMarkdownFences(content)
    .map((chunk) => {
      if (chunk.fenced) {
        return trimTrailingWhitespace(chunk.content);
      }

      return omitVoidElementSlash(trimTrailingWhitespace(chunk.content));
    })
    .join('');
}

function formatContent(filePath, content) {
  if (filePath.endsWith('.md')) {
    return formatMarkdown(content);
  }

  return omitVoidElementSlash(trimTrailingWhitespace(content));
}

// Compare each file before writing so dry-run mode and write mode report the
// same set of files.
const files = await collectFiles(root);
const changed = [];

for (const file of files) {
  const original = await fs.readFile(file, 'utf8');
  const formatted = formatContent(file, original);

  if (formatted !== original) {
    changed.push(path.relative(root, file));

    if (shouldWrite) {
      await fs.writeFile(file, formatted);
    }
  }
}

if (changed.length > 0) {
  const verb = shouldWrite ? 'Formatted' : 'Would format';
  console.log(`${verb} ${changed.length} file(s):`);
  for (const file of changed) {
    console.log(`- ${file}`);
  }

  if (shouldCheck) {
    process.exit(1);
  }
} else {
  console.log('No html-validate style fixes needed.');
}
