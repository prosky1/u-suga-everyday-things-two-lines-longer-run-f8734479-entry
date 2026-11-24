// Everyday Things, Two Lines, Longer Run — @bosbuilds
// Writes the two-line toaster explanation to /output/entry.txt.
// Line 1: one vivid sentence explaining a toaster to a 10-year-old,
// built on a single analogy (a tiny sun in a metal box).
// Line 2: one sentence on why the analogy works and where it stops.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE_1 =
  "A toaster is a tiny sun that lives in a metal box and tans your bread until it turns brown and crunchy.";
const LINE_2 =
  "The sun part works because both give off heat and light, but the analogy stops there: the sun never pops up when breakfast is ready.";

const text = `${LINE_1}\n${LINE_2}`;

function sentenceCount(line: string): number {
  return line.split("").filter((ch) => ch === ".").length;
}

function validate(entry: string): void {
  if (entry.length < 1 || entry.length > 400) {
    throw new Error(`entry must be 1-400 characters, got ${entry.length}`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const lines = entry.split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly 2 lines, got ${lines.length}`);
  }
  for (const [i, line] of lines.entries()) {
    if (line.trim().length === 0) {
      throw new Error(`line ${i + 1} must not be blank`);
    }
    if (!line.endsWith(".")) {
      throw new Error(`line ${i + 1} must end with a full stop`);
    }
    if (sentenceCount(line) !== 1) {
      throw new Error(`line ${i + 1} must be exactly one sentence`);
    }
  }
}

validate(text);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

// Round-trip check: what was written must be byte-identical to the
// validated text, with no trailing newline added by the write.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== text) {
  throw new Error("round-trip mismatch: /output/entry.txt differs from validated text");
}
if (written.endsWith("\n")) {
  throw new Error("entry must not end with a trailing newline");
}
console.log(`wrote /output/entry.txt (${text.length} characters, 2 lines)`);
