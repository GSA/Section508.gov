"use strict";

const yaml = require("js-yaml");

function parseFrontMatter(raw) {
  const content = raw.replace(/^\uFEFF/, "");
  const openingDelimiter = content.match(/^---[ \t]*\r?\n/);

  if (!openingDelimiter) {
    return {
      data: {},
      content: raw
    };
  }

  const frontMatterStart = openingDelimiter[0].length;
  const closingDelimiter = /\r?\n---[ \t]*(?:\r?\n|$)/g;
  closingDelimiter.lastIndex = frontMatterStart;

  const match = closingDelimiter.exec(content);

  if (!match) {
    return {
      data: {},
      content: raw
    };
  }

  const frontMatter = content.slice(frontMatterStart, match.index);
  const data = yaml.load(frontMatter) || {};

  return {
    data: data && typeof data === "object" && !Array.isArray(data) ? data : {},
    content: content.slice(match.index + match[0].length)
  };
}

module.exports = {
  parseFrontMatter
};
