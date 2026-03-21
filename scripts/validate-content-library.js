#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const matter = require("gray-matter");

const REPO_ROOT = process.cwd();

const TAXONOMY_FILE = path.join(REPO_ROOT, "_data", "content-library-taxonomy.yml");
const DOCUMENTS_FILE = path.join(REPO_ROOT, "_data", "content-library-documents.yml");

const FRONT_MATTER_DIRS = [
  path.join(REPO_ROOT, "_pages"),
  path.join(REPO_ROOT, "_posts")
];

// Adjust this list if you only want to validate certain keys in front matter
const TAXONOMY_KEYS = ["topic", "sub-topic", "audience", "resource-type", "format"];

// If your permalink values in content-library-documents.yml map directly to public URLs
// but the actual files live in a different place, define that mapping here.
// Example:
//   "/files/foo/bar.pdf" -> "<repo>/assets/files/foo/bar.pdf"
const PERMALINK_MAPPINGS = [
  // {
  //   urlPrefix: "/files/",
  //   repoPrefix: "assets/files/"
  // },
  // {
  //   urlPrefix: "/assets/files/",
  //   repoPrefix: "assets/files/"
  // }
];

function loadYamlFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing file: ${filePath}`);
  }

  try {
    return yaml.load(fs.readFileSync(filePath, "utf8"));
  } catch (err) {
    throw new Error(formatYamlError(filePath, err));
  }
}

function formatYamlError(filePath, err) {
  const location =
    err.mark && typeof err.mark.line === "number" && typeof err.mark.column === "number"
      ? ` at line ${err.mark.line + 1}, column ${err.mark.column + 1}`
      : "";

  return `YAML parse error in ${relativeRepoPath(filePath)}${location}: ${err.message}`;
}

function walkDirectory(dirPath) {
  let results = [];

  if (!fs.existsSync(dirPath)) {
    return results;
  }

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

function normalizeToArray(value) {
  if (value === undefined || value === null || value === "") {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

function relativeRepoPath(filePath) {
  return path.relative(REPO_ROOT, filePath).split(path.sep).join("/");
}

function resolvePermalinkToFile(permalink) {
  if (!permalink || typeof permalink !== "string") {
    return null;
  }

  const cleanPermalink = permalink.split("?")[0].split("#")[0];

  for (const mapping of PERMALINK_MAPPINGS) {
    if (cleanPermalink.startsWith(mapping.urlPrefix)) {
      const relativePart = cleanPermalink.slice(mapping.urlPrefix.length);
      return path.join(REPO_ROOT, mapping.repoPrefix, relativePart);
    }
  }

  // Default behavior: treat permalink as repo-relative
  return path.join(REPO_ROOT, cleanPermalink.replace(/^\/+/, ""));
}

function validateTaxonomyValue(filePath, key, value, allowedValues, errors) {
  const values = normalizeToArray(value);

  for (const item of values) {
    if (typeof item !== "string") {
      errors.push(
        `${relativeRepoPath(filePath)}: front matter key "${key}" contains a non-string value: ${JSON.stringify(item)}`
      );
      continue;
    }

    if (!allowedValues.includes(item)) {
      errors.push(
        `${relativeRepoPath(filePath)}: front matter key "${key}" has invalid value "${item}". Allowed values: ${allowedValues.join(" | ")}`
      );
    }
  }
}

function validateFrontMatter(taxonomy, errors, warnings) {
  for (const dir of FRONT_MATTER_DIRS) {
    const files = walkDirectory(dir).filter(isContentFile);

    for (const filePath of files) {
      const raw = fs.readFileSync(filePath, "utf8");
      let parsed;

      try {
        parsed = matter(raw);
      } catch (err) {
        errors.push(formatYamlError(filePath, err));
        continue;
      }

      const data = parsed.data || {};

      for (const key of TAXONOMY_KEYS) {
        if (!(key in data)) {
          continue;
        }

        if (!(key in taxonomy)) {
          warnings.push(
            `${relativeRepoPath(filePath)}: front matter key "${key}" is not present in taxonomy file`
          );
          continue;
        }

        validateTaxonomyValue(filePath, key, data[key], taxonomy[key], errors);
      }
    }
  }
}

function validateDocumentsManifest(taxonomy, errors, warnings) {
  const docs = loadYamlFile(DOCUMENTS_FILE);

  if (!Array.isArray(docs)) {
    errors.push(`${relativeRepoPath(DOCUMENTS_FILE)}: expected a top-level YAML array`);
    return;
  }

  docs.forEach((entry, index) => {
    const label = `${relativeRepoPath(DOCUMENTS_FILE)} [entry ${index + 1}]`;

    if (!entry || typeof entry !== "object") {
      errors.push(`${label}: entry is not a valid object`);
      return;
    }

    if (!entry.permalink) {
      errors.push(`${label}: missing required key "permalink"`);
    } else {
      const resolvedPath = resolvePermalinkToFile(entry.permalink);
      if (!resolvedPath || !fs.existsSync(resolvedPath) || !fs.statSync(resolvedPath).isFile()) {
        errors.push(
          `${label}: permalink "${entry.permalink}" does not resolve to a real file in the repository`
        );
      }
    }

    for (const key of TAXONOMY_KEYS) {
      if (!(key in entry)) {
        continue;
      }

      const value = entry[key];

      // allow blank values in the documents manifest for now
      if (value === "" || value === null || value === undefined) {
        continue;
      }

      if (!(key in taxonomy)) {
        warnings.push(`${label}: key "${key}" is not present in taxonomy file`);
        continue;
      }

      validateTaxonomyValue(DOCUMENTS_FILE, key, value, taxonomy[key], errors);
    }
  });
}

function main() {
  const errors = [];
  const warnings = [];

  let taxonomy;
  try {
    taxonomy = loadYamlFile(TAXONOMY_FILE);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  try {
    validateFrontMatter(taxonomy, errors, warnings);
    validateDocumentsManifest(taxonomy, errors, warnings);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  if (warnings.length) {
    console.log("\nWarnings:");
    warnings.forEach((msg) => console.log(`- ${msg}`));
  }

  if (errors.length) {
    console.log("\nErrors:");
    errors.forEach((msg) => console.log(`- ${msg}`));
    console.log(`\nValidation failed with ${errors.length} error(s).`);
    process.exit(1);
  }

  console.log("Validation passed with no errors.");
}

main();
