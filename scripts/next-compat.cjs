#!/usr/bin/env node

const path = require("path");

const preload = path.join(__dirname, "node25-buffer-compat.cjs");
const preloadOption = `--require=${preload}`;

require(preload);

if (!process.env.NODE_OPTIONS?.includes(preloadOption)) {
  process.env.NODE_OPTIONS = [process.env.NODE_OPTIONS, preloadOption]
    .filter(Boolean)
    .join(" ");
}

require("next/dist/bin/next");
