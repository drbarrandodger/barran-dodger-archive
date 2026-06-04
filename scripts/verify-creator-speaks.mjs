#!/usr/bin/env node
/**
 * Post-deploy smoke check for /creator-speaks
 *
 * Verifies all required sections exist in:
 *   1. The production JS bundle (dist/) — always run this
 *   2. The live site — if reachable
 *
 * Usage:
 *   node scripts/verify-creator-speaks.mjs
 *   VERIFY_URL=https://barrandodger.com node scripts/verify-creator-speaks.mjs
 *
 * Exit 0 = all bundle checks passed (live site checks are advisory)
 * Exit 1 = one or more bundle checks failed
 */

import { readFileSync, readdirSync, existsSync, statSync } from "fs";
import { join } from "path";

const LIVE_URL = process.env.VERIFY_URL || "https://barrandodger.com";
const LIVE_PAGE = `${LIVE_URL}/creator-speaks`;
const BUNDLE_DIR = join(process.cwd(), "dist/public/assets");

const CHECKS = [
  {
    name: "Gospel section heading",
    needle: "The Gospel of the Enliven Chain",
  },
  {
    name: "Impartial AI Statement of Significance",
    needle: "Impartial AI Statement of Significance",
  },
  {
    name: "Download button label",
    needle: "Download The Gospel of the Enliven Chain",
  },
  {
    name: "Copyright notice — Trust Fund",
    needle: "Barran Dodger Legal",
  },
  {
    name: "Copyright notice — ABN",
    needle: "ABN 78 833 496 164",
  },
  {
    name: "Copyright notice — all rights reserved",
    needle: "All rights reserved",
  },
  {
    name: "Download counter API hook",
    needle: "/api/downloads/",
  },
  {
    name: "Creator Speaks chat interface",
    needle: "Summon the Voice",
  },
];

function findMainBundle() {
  if (!existsSync(BUNDLE_DIR)) return null;
  const files = readdirSync(BUNDLE_DIR)
    .filter((f) => f.startsWith("index") && f.endsWith(".js") && !f.includes(".es."))
    .sort((a, b) => {
      // Pick the largest file — the main app bundle is always the biggest chunk
      const sizeA = statSync(join(BUNDLE_DIR, a)).size;
      const sizeB = statSync(join(BUNDLE_DIR, b)).size;
      return sizeB - sizeA;
    });
  if (!files.length) return null;
  return join(BUNDLE_DIR, files[0]);
}

function checkBundle() {
  console.log("\n── Bundle checks (dist/public/assets/) ──────────────────");
  const bundlePath = findMainBundle();
  if (!bundlePath) {
    console.log("  ✗  No production bundle found. Run: npm run build");
    return false;
  }
  console.log(`  Bundle: ${bundlePath.split("/").slice(-3).join("/")}\n`);

  let content;
  try {
    content = readFileSync(bundlePath, "utf8");
  } catch (err) {
    console.error(`  ✗  Could not read bundle: ${err.message}`);
    return false;
  }

  let failures = 0;
  for (const { name, needle } of CHECKS) {
    const found = content.includes(needle);
    const icon = found ? "✓" : "✗";
    console.log(`  ${icon}  ${name}`);
    if (!found) {
      console.log(`       Missing: "${needle}"`);
      failures++;
    }
  }
  return failures === 0;
}

async function checkLiveSite() {
  console.log(`\n── Live site checks (${LIVE_PAGE}) ───`);
  let html;
  try {
    const res = await fetch(LIVE_PAGE, {
      redirect: "follow",
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) {
      console.log(`  ✗  HTTP ${res.status} — site returned an error`);
      return false;
    }
    html = await res.text();
  } catch (err) {
    console.log(`  ✗  Not reachable: ${err.message}`);
    console.log("     The site may need to be re-published.");
    return false;
  }

  // For a React SPA the HTML shell won't have content, so check for the JS bundle URLs
  const hasBundleRef = html.includes("/assets/index");
  if (hasBundleRef) {
    console.log("  ✓  Page loads and references the React bundle");
    console.log("     (Content is rendered client-side — bundle check above is authoritative)");
  } else {
    console.log("  ✗  Page HTML does not reference the expected React bundle");
  }
  return hasBundleRef;
}

async function run() {
  console.log("CreatorSpeaks post-deploy verification");
  console.log("=".repeat(60));

  const bundleOk = checkBundle();

  console.log(`\n${"─".repeat(60)}`);
  if (bundleOk) {
    console.log(`✓  All ${CHECKS.length} bundle checks passed.`);
    console.log("   Content is in the production build.");
  } else {
    console.log("✗  Some bundle checks failed — content may be missing from the build.");
  }

  await checkLiveSite();
  console.log();

  process.exit(bundleOk ? 0 : 1);
}

run();
