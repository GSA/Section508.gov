#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const SITE_ORIGIN = "";

const FORMAT_MAP = {
  ".pdf": "Document (PDF)",
  ".doc": "Document (DOC)",
  ".docx": "Document (DOCX)",
  ".ppt": "Document (PPT)",
  ".pptx": "Document (PPTX)",
  ".xls": "Document (XLS)",
  ".xlsx": "Document (XLSX)",
  ".csv": "CSV",
  ".txt": "TXT",
  ".rtf": "Document (RTF)",
  ".zip": "ZIP",
  ".html": "HTML",
  ".htm": "HTML",
  ".xml": "XML",
  ".json": "JSON",
};

function smartTitleCase(text) {
  const smallWords = new Set([
    "a", "an", "and", "as", "at", "but", "by", "for", "from",
    "in", "into", "nor", "of", "on", "or", "per", "the", "to", "vs", "via"
  ]);

  const words = text.trim().toLowerCase().split(/\s+/);

  return words
    .map((word, index) => {
      const isFirst = index === 0;
      const isLast = index === words.length - 1;

      if (!isFirst && !isLast && smallWords.has(word)) {
        return word;
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function filenameToTitle(filename) {
  const stem = path.parse(filename).name;
  const normalized = stem
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return smartTitleCase(normalized);
}

function detectFormat(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return FORMAT_MAP[ext] || ext.replace(".", "").toUpperCase() || "";
}

function toPosixPath(value) {
  return value.split(path.sep).join("/");
}

function formatPermalink(filePath, baseDir, permalinkBase = "/") {
  const relPath = toPosixPath(path.relative(baseDir, filePath));
  const cleanedBase = permalinkBase.trim() ? `/${permalinkBase.replace(/^\/+|\/+$/g, "")}` : "";
  const permalinkPath = `${cleanedBase}/${relPath}`.replace(/\/+/g, "/");
  return encodeURI(`${SITE_ORIGIN}${permalinkPath.startsWith("/") ? "" : "/"}${permalinkPath}`);
}

function yamlEscape(value) {
  if (value === null || value === undefined) {
    return '""';
  }

  return `"${String(value).replace(/[\u0000-\u001f\u007f-\u009f"\\\u2028\u2029]/g, (char) => {
    switch (char) {
      case "\\":
        return "\\\\";
      case "\"":
        return "\\\"";
      case "\b":
        return "\\b";
      case "\t":
        return "\\t";
      case "\n":
        return "\\n";
      case "\v":
        return "\\v";
      case "\f":
        return "\\f";
      case "\r":
        return "\\r";
      case "\u2028":
        return "\\L";
      case "\u2029":
        return "\\P";
      default: {
        const codePoint = char.codePointAt(0);
        return `\\x${codePoint.toString(16).toUpperCase().padStart(2, "0")}`;
      }
    }
  })}"`;
}

function buildEntry(filePath, baseDir, permalinkBase) {
  const filename = path.basename(filePath);
  const permalink = formatPermalink(filePath, baseDir, permalinkBase);
  const fileFormat = detectFormat(filePath);
  const title = filenameToTitle(filename);

  return [
    `- filename: ${yamlEscape(filename)}`,
    `  permalink: ${yamlEscape(permalink)}`,
    `  title: ${yamlEscape(title)}`,
    `  description: ""`,
    `  topic: ""`,
    `  sub-topic: ""`,
    `  audience: ""`,
    `  resource-type: ""`,
    `  format: ${yamlEscape(fileFormat)}`
  ].join("\n");
}

function shouldInclude(filePath, extensions) {
  const stat = fs.statSync(filePath);
  if (!stat.isFile()) {
    return false;
  }

  if (!extensions || extensions.size === 0) {
    return true;
  }

  const ext = path.extname(filePath).toLowerCase();
  return extensions.has(ext);
}

function walkDirectory(dirPath) {
  let results = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      results = results.concat(walkDirectory(fullPath));
    } else if (entry.isFile()) {
      results.push(fullPath);
    }
  }

  return results;
}

function printUsage() {
  console.log(`
Usage:
  node scripts/generate-library-yml.js <input_dir> [output_file] [permalink_base] [extensions]

Examples:
  node scripts/generate-library-yml.js assets/files
  node scripts/generate-library-yml.js assets/files _data/content-library-documents.yml /assets/files
  node scripts/generate-library-yml.js assets/files _data/content-library-documents.yml /assets/files .pdf,.docx,.pptx,.xlsx

Arguments:
  <input_dir>       Directory to scan recursively
  [output_file]     Output YAML file (default: content-library-documents.yml)
  [permalink_base]  Base path prefix for permalinks (default: /)
  [extensions]      Optional comma-separated list of extensions to include
                    Example: .pdf,.docx,.pptx,.xlsx
`);
}

function main() {
  const args = process.argv.slice(2);

  if (args.length < 1 || args.includes("--help") || args.includes("-h")) {
    printUsage();
    process.exit(args.length < 1 ? 1 : 0);
  }

  const inputDir = path.resolve(args[0]);
  const outputFile = path.resolve(args[1] || "content-library-documents.yml");
  const permalinkBase = args[2] || "/";
  const extensionsArg = args[3];

  if (!fs.existsSync(inputDir) || !fs.statSync(inputDir).isDirectory()) {
    console.error(`Error: input directory does not exist or is not a directory: ${inputDir}`);
    process.exit(1);
  }

  let extensions = null;
  if (extensionsArg) {
    extensions = new Set(
      extensionsArg
        .split(",")
        .map((ext) => ext.trim().toLowerCase())
        .filter(Boolean)
        .map((ext) => (ext.startsWith(".") ? ext : `.${ext}`))
    );
  }

  const files = walkDirectory(inputDir)
    .filter((filePath) => shouldInclude(filePath, extensions))
    .sort((a, b) => {
      const relA = toPosixPath(path.relative(inputDir, a)).toLowerCase();
      const relB = toPosixPath(path.relative(inputDir, b)).toLowerCase();
      return relA.localeCompare(relB);
    });

  const entries = files.map((filePath) => buildEntry(filePath, inputDir, permalinkBase));
  const outputText = entries.join("\n\n") + (entries.length ? "\n" : "");

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, outputText, "utf8");

  console.log(`Wrote ${files.length} entries to ${outputFile}`);
}

main();
