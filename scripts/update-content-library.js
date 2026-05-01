#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const matter = require("gray-matter");

const SITE_ORIGIN = "";
const PROJECT_ROOT = path.resolve(__dirname, "..");
const EXISTING_DOCUMENTS_FILE = path.join(PROJECT_ROOT, "_data", "content-library-documents.yml");
const DEFAULT_OUTPUT_FILE = "_data/update-content-library.yml";
const CONTENT_DIRS = [
  path.join(PROJECT_ROOT, "_pages"),
  path.join(PROJECT_ROOT, "_posts")
];

const FORMAT_MAP = {
  ".pdf": "Document (PDF)",
  ".doc": "Document (DOC)",
  ".docx": "Document (DOCX)",
  ".ppt": "Presentation (PPT)",
  ".pptx": "Presentation (PPTX)",
  ".xls": "Spreadsheet (XLS)",
  ".xlsx": "Spreadsheet (XLSX)",
  ".csv": "CSV",
  ".txt": "TXT",
  ".rtf": "Document (RTF)",
  ".zip": "ZIP",
  ".html": "HTML",
  ".htm": "HTML",
  ".xml": "XML",
  ".json": "JSON",
};

const TITLE_ACRONYM_MAP = new Map([
  ["acr", "ACR"],
  ["api", "API"],
  ["art", "ART"],
  ["ato", "ATO"],
  ["cao", "CAO"],
  ["cio", "CIO"],
  ["cop", "CoP"],
  ["cor", "COR"],
  ["csv", "CSV"],
  ["cxo", "CXO"],
  ["doc", "DOC"],
  ["docx", "DOCX"],
  ["far", "FAR"],
  ["fitara", "FITARA"],
  ["fy", "FY"],
  ["gsa", "GSA"],
  ["html", "HTML"],
  ["iaaf", "IAAF"],
  ["ict", "ICT"],
  ["it", "IT"],
  ["json", "JSON"],
  ["mas", "MAS"],
  ["nsf", "NSF"],
  ["omb", "OMB"],
  ["pdf", "PDF"],
  ["ppt", "PPT"],
  ["pptx", "PPTX"],
  ["qr", "QR"],
  ["rfp", "RFP"],
  ["sdlc", "SDLC"],
  ["sme", "SME"],
  ["srt", "SRT"],
  ["usa", "USA"],
  ["vpat", "VPAT"],
  ["wcag", "WCAG"],
  ["xls", "XLS"],
  ["xlsx", "XLSX"],
  ["xml", "XML"],
  ["yaml", "YAML"],
]);

function smartTitleCase(text) {
  const smallWords = new Set([
    "a", "an", "and", "as", "at", "but", "by", "for", "from",
    "in", "into", "nor", "of", "on", "or", "per", "the", "to", "vs", "via"
  ]);

  const words = text.trim().split(/\s+/);

  return words
    .map((word, index) => {
      const lowerWord = word.toLowerCase();
      const isFirst = index === 0;
      const isLast = index === words.length - 1;
      const acronymMatch = lowerWord.match(/^([a-z]+)(\d*)$/);

      if (acronymMatch) {
        const [, letters, digits] = acronymMatch;
        const normalizedAcronym = TITLE_ACRONYM_MAP.get(letters);

        if (normalizedAcronym) {
          return `${normalizedAcronym}${digits}`;
        }
      }

      if (!isFirst && !isLast && smallWords.has(lowerWord)) {
        return lowerWord;
      }

      return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
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

function isPathInside(parentPath, childPath) {
  const relativePath = path.relative(parentPath, childPath);
  return relativePath === "" || (!relativePath.startsWith("..") && !path.isAbsolute(relativePath));
}

function resolveProjectPath(inputPath, label) {
  if (!inputPath) {
    throw new Error(`${label} is required.`);
  }

  if (path.isAbsolute(inputPath)) {
    throw new Error(`${label} must be a relative path inside the project.`);
  }

  const resolvedPath = path.resolve(PROJECT_ROOT, inputPath);

  if (!isPathInside(PROJECT_ROOT, resolvedPath)) {
    throw new Error(`${label} must stay inside the project directory.`);
  }

  return resolvedPath;
}

function formatPermalink(filePath, baseDir, permalinkBase = "/") {
  const relPath = toPosixPath(path.relative(baseDir, filePath));
  const cleanedBase = permalinkBase.trim() ? `/${permalinkBase.replace(/^\/+|\/+$/g, "")}` : "";
  const permalinkPath = `${cleanedBase}/${relPath}`.replace(/\/+/g, "/");
  return encodeURI(`${SITE_ORIGIN}${permalinkPath.startsWith("/") ? "" : "/"}${permalinkPath}`);
}

function defaultPermalinkBaseForDir(dirPath) {
  const relativeDir = toPosixPath(path.relative(PROJECT_ROOT, dirPath));
  return relativeDir ? `/${relativeDir}` : "/";
}

function yamlEscape(value) {
  if (value === null || value === undefined) {
    return "\"\"";
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

function normalizeDisplayText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeToArray(value) {
  if (value === undefined || value === null || value === "") {
    return [];
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => normalizeDisplayText(item))
      .filter(Boolean);
  }

  return [normalizeDisplayText(value)].filter(Boolean);
}

function cleanPermalink(value) {
  const normalized = normalizeDisplayText(value);

  if (!normalized) {
    return "";
  }

  try {
    const url = new URL(normalized);
    return encodeURI(url.pathname);
  } catch {
    return encodeURI(normalized.split("?")[0].split("#")[0]);
  }
}

function loadYamlFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const raw = fs.readFileSync(filePath, "utf8");
  if (!raw.trim()) {
    return [];
  }

  const parsed = yaml.load(raw);
  return Array.isArray(parsed) ? parsed : [];
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

function isContentFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return [".md", ".markdown", ".html"].includes(ext);
}

function loadContentPages() {
  return CONTENT_DIRS.flatMap((dirPath) => {
    if (!fs.existsSync(dirPath)) {
      return [];
    }

    return walkDirectory(dirPath)
      .filter(isContentFile)
      .map((filePath) => {
        const fileContents = fs.readFileSync(filePath, "utf8");
        const parsed = matter(fileContents);
        const data = parsed.data || {};

        return {
          filePath,
          title: normalizeDisplayText(data.title),
          description: normalizeDisplayText(data.description),
          topic: normalizeToArray(data.topic),
          subTopic: normalizeToArray(data["sub-topic"] || data.subtopic),
          audience: normalizeToArray(data.audience),
          resourceType: normalizeToArray(data["resource-type"]),
          content: parsed.content || "",
          excludeLibrary: Boolean(data["exclude-library"])
        };
      })
      .filter((page) => !page.excludeLibrary);
  });
}

function buildExistingDocumentIndex(documents) {
  const permalinks = new Set();
  const filenames = new Set();

  documents.forEach((document) => {
    const permalink = cleanPermalink(document?.permalink);
    const filename = normalizeDisplayText(document?.filename).toLowerCase();

    if (permalink) {
      permalinks.add(permalink);
    }

    if (filename) {
      filenames.add(filename);
    }
  });

  return { permalinks, filenames };
}

function dedupeValues(values) {
  return Array.from(new Set(values.map((value) => normalizeDisplayText(value)).filter(Boolean)));
}

function renderYamlValue(key, value) {
  const values = Array.isArray(value) ? dedupeValues(value) : [];

  if (values.length > 1) {
    return [
      `  ${key}:`,
      ...values.map((item) => `    - ${yamlEscape(item)}`)
    ].join("\n");
  }

  const singleValue = values.length === 1 ? values[0] : normalizeDisplayText(value);
  return `  ${key}: ${yamlEscape(singleValue)}`;
}

function countMatches(haystack, needle) {
  if (!haystack || !needle) {
    return 0;
  }

  let count = 0;
  let startIndex = 0;

  while (true) {
    const matchIndex = haystack.indexOf(needle, startIndex);
    if (matchIndex === -1) {
      break;
    }

    count += 1;
    startIndex = matchIndex + needle.length;
  }

  return count;
}

function getMatchingPages(documentPermalink, filename, contentPages) {
  const exactPermalink = cleanPermalink(documentPermalink);

  return contentPages
    .map((page) => {
      const permalinkMatches = exactPermalink ? countMatches(page.content, exactPermalink) : 0;
      const filenameMatches = filename ? countMatches(page.content, filename) : 0;
      const score = permalinkMatches * 10 + filenameMatches;

      if (!score) {
        return null;
      }

      return { ...page, matchScore: score };
    })
    .filter(Boolean)
    .sort((a, b) => b.matchScore - a.matchScore || a.filePath.localeCompare(b.filePath));
}

function collectLinkedValues(linkedPages, key) {
  return dedupeValues(linkedPages.flatMap((page) => normalizeToArray(page[key])));
}

function chooseDescription(linkedPages) {
  for (const page of linkedPages) {
    if (page.description) {
      return page.description;
    }
  }

  return "";
}

function hasAnyKeyword(text, keywords) {
  return keywords.some((keyword) => text.includes(keyword));
}

function inferResourceType(filename, title, format, linkedPages) {
  const keywordText = `${filename} ${title}`.toLowerCase();
  const linkedResourceTypes = collectLinkedValues(linkedPages, "resourceType");
  const isStructuredDataFormat = format === "CSV" || format === "JSON";

  if (isStructuredDataFormat) {
    if (hasAnyKeyword(keywordText, ["data dictionary", "dictionary"])) {
      return "Tool";
    }

    if (hasAnyKeyword(keywordText, ["response data", "top viewed", "top-viewed", "dataset", "open data"])) {
      return "Tool";
    }

    return "";
  }

  if (/(template|sample|checklist|worksheet|matrix|form)\b/.test(keywordText)) {
    return "Template";
  }

  if (/\bplaybook\b/.test(keywordText)) {
    return "Playbook";
  }

  if (/\b(tool|calculator|finder|tracker)\b/.test(keywordText)) {
    return "Tool";
  }

  if (/\b(policy|statute|regulation|directive|law)\b/.test(keywordText)) {
    return "Law and Policy";
  }

  if (format.startsWith("Presentation")) {
    return "Training";
  }

  if (linkedResourceTypes.length === 1) {
    const [linkedResourceType] = linkedResourceTypes;

    if (["Template", "Tool", "Playbook", "Training", "Law and Policy", "Process & How-To"].includes(linkedResourceType)) {
      return linkedResourceType;
    }
  }

  if (format === "HTML" && linkedResourceTypes.length === 1) {
    return linkedResourceTypes[0];
  }

  if (/\b(guide|how to|how-to|instructions?)\b/.test(keywordText)) {
    return "Process & How-To";
  }

  return "";
}

function buildEntry(filePath, baseDir, permalinkBase, contentPages) {
  const filename = path.basename(filePath);
  const permalink = formatPermalink(filePath, baseDir, permalinkBase);
  const fileFormat = detectFormat(filePath);
  const title = filenameToTitle(filename);
  const linkedPages = getMatchingPages(permalink, filename, contentPages);
  const topics = collectLinkedValues(linkedPages, "topic");
  const subTopics = collectLinkedValues(linkedPages, "subTopic");
  const audiences = collectLinkedValues(linkedPages, "audience");
  const description = chooseDescription(linkedPages);
  const resourceType = inferResourceType(filename, title, fileFormat, linkedPages);

  return [
    `- filename: ${yamlEscape(filename)}`,
    `  permalink: ${yamlEscape(permalink)}`,
    `  title: ${yamlEscape(title)}`,
    `  description: ${yamlEscape(description)}`,
    renderYamlValue("topic", topics),
    renderYamlValue("sub-topic", subTopics),
    renderYamlValue("audience", audiences),
    renderYamlValue("resource-type", resourceType),
    renderYamlValue("format", fileFormat)
  ].join("\n");
}

function printUsage() {
  console.log(`
Usage:
  node scripts/update-content-library <input_dir> [output_file] [permalink_base] [extensions]

Examples:
  node scripts/update-content-library assets/files
  node scripts/update-content-library assets/files _data/update-content-library.yml /assets/files
  node scripts/update-content-library assets/files _data/update-content-library.yml /assets/files .pdf,.docx,.pptx,.xlsx

Arguments:
  <input_dir>       Project-relative directory to scan recursively
  [output_file]     Project-relative YAML output file containing only net-new entries
                    (default: _data/update-content-library.yml)
  [permalink_base]  Base path prefix for permalinks
                    (default: the project-relative input directory, e.g. /assets/files)
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

  try {
    const inputDir = resolveProjectPath(args[0], "Input directory");
    const outputFile = resolveProjectPath(args[1] || DEFAULT_OUTPUT_FILE, "Output file");
    const permalinkBase = args[2] || defaultPermalinkBaseForDir(inputDir);
    const extensionsArg = args[3];

    if (!fs.existsSync(inputDir) || !fs.statSync(inputDir).isDirectory()) {
      throw new Error(`Input directory does not exist or is not a directory: ${inputDir}`);
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

    const existingDocuments = loadYamlFile(EXISTING_DOCUMENTS_FILE);
    const existingIndex = buildExistingDocumentIndex(existingDocuments);
    const contentPages = loadContentPages();

    const files = walkDirectory(inputDir)
      .filter((filePath) => shouldInclude(filePath, extensions))
      .filter((filePath) => {
        const filename = path.basename(filePath).toLowerCase();
        const permalink = cleanPermalink(formatPermalink(filePath, inputDir, permalinkBase));

        return !existingIndex.permalinks.has(permalink) && !existingIndex.filenames.has(filename);
      })
      .sort((a, b) => {
        const relA = toPosixPath(path.relative(inputDir, a)).toLowerCase();
        const relB = toPosixPath(path.relative(inputDir, b)).toLowerCase();
        return relA.localeCompare(relB);
      });

    const entries = files.map((filePath) => buildEntry(filePath, inputDir, permalinkBase, contentPages));
    const outputText = entries.join("\n\n") + (entries.length ? "\n" : "");

    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFileSync(outputFile, outputText, "utf8");

    console.log(`Wrote ${files.length} new entries to ${outputFile}`);
    console.log(`Skipped ${existingDocuments.length} existing library entries from ${path.relative(PROJECT_ROOT, EXISTING_DOCUMENTS_FILE)}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
