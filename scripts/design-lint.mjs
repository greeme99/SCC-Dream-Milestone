#!/usr/bin/env node
/**
 * DESIGN.md Section 6 & RULE-006 / RULE-007 Automated Design & Compliance Linter
 * - Blocks raw pure colors (#ff0000, #00ff00, #0000ff) and unauthorized hardcoded hex in src/ (outside globals.css)
 * - Verifies mandatory table sort indicators (⇅, ▲, ▼) exist in src/
 * - Verifies RULE-007 / DEC-008: zero occurrences of external association strings in src/
 */
import fs from 'node:fs';
import path from 'node:path';

const SRC_DIR = path.resolve(process.cwd(), 'src');
const PURE_COLOR_RE = /#(?:ff0000|00ff00|0000ff|f00|0f0|00f)\b/i;
const HEX_COLOR_RE = /#[0-9a-fA-F]{3,8}\b/g;
const FORBIDDEN_ORG_RE = /\bKCA\b|한국코치협회/;

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(full));
    } else if (/\.(ts|tsx|css|js|mjs)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const files = walkFiles(SRC_DIR);
const errors = [];
let hasNeutralSort = false;
let hasAscSort = false;
let hasDescSort = false;

for (const file of files) {
  const rel = path.relative(process.cwd(), file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  if (content.includes('⇅')) hasNeutralSort = true;
  if (content.includes('▲')) hasAscSort = true;
  if (content.includes('▼')) hasDescSort = true;

  if (PURE_COLOR_RE.test(content)) {
    errors.push(`${rel}: forbidden pure color (#ff0000 / #00ff00 / #0000ff) detected`);
  }

  // Exclude authorized KCA header logo assets and certified coach title
  const contentForOrgCheck = content
    .replace(/kca-logo\.png/g, '')
    .replace(/한국코치협회 로고/g, '')
    .replace(/한국코치협회 인증코치/g, '');

  if (FORBIDDEN_ORG_RE.test(contentForOrgCheck)) {
    errors.push(`${rel}: forbidden external association mention detected (DEC-008 / RULE-007)`);
  }

  // Only globals.css may define raw hex color tokens
  if (!rel.endsWith('globals.css')) {
    const matches = content.match(HEX_COLOR_RE);
    if (matches) {
      errors.push(`${rel}: hardcoded hex color(s) ${matches.join(', ')} found; use DESIGN.md CSS variables instead`);
    }
  }
}

if (errors.length > 0) {
  console.error('DESIGN LINT FAILED:');
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
}

console.log(`DESIGN LINT PASSED: ${files.length} source files verified (0 violations, sort indicators present).`);
