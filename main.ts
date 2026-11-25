// The Funniest One-Line Resignation Letter — entry for
// u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.
//
// Writes one resignation letter, in the voice of a cron job that has
// fired every minute since March, to <output dir>/entry.txt.
// The joke: it resigns because of the human, not the job — then admits
// it will fire again next minute anyway, because a cron job cannot quit.
// No network, no input files: the line is a fixed string below.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, 139 characters (gate allows 1–140), one line, no quotes.
const LINE =
  "I fired every minute since March and the job was never the problem, you were, so I resign, effective next minute, when I fire again anyway.";

// Enforce the gate ourselves so a bad edit fails loudly instead of
// shipping an invalid entry: 1–140 characters, exactly one line.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} characters, gate allows 1-140`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
