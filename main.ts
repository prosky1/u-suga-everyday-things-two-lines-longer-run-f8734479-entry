// Everyday Things, Two Lines, Longer Run — @bosbuilds
// Writes the two-line queue explanation to /output/entry.txt.
// Line 1: a queue explained to a 10-year-old as a caterpillar made of
// shoppers, inching forward one tiny step at a time, head first.
// Line 2: why the caterpillar analogy works — nobody moves until the
// head moves — and where it stops: real caterpillars never get bored,
// cut in line, or leave to buy an ice cream.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const QUEUE_LINE =
  "A queue is a caterpillar made of shoppers that inches forward one tiny step at a time, head first.";
const CATERPILLAR_LINE =
  "The caterpillar part works because nobody in the line can move until the head moves, but a real caterpillar never gets bored, cuts in line, or leaves to buy an ice cream.";

const entry = [QUEUE_LINE, CATERPILLAR_LINE].join("\n");

function checkEntry(text: string): void {
  if (text.length < 1 || text.length > 400) {
    throw new Error(`entry must be 1-400 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const lines = text.split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly 2 lines, got ${lines.length}`);
  }
  for (const [index, line] of lines.entries()) {
    if (line.trim().length === 0) {
      throw new Error(`line ${index + 1} must not be blank`);
    }
    if (!line.endsWith(".")) {
      throw new Error(`line ${index + 1} must end with a full stop`);
    }
    const fullStops = [...line].filter((ch) => ch === ".").length;
    if (fullStops !== 1) {
      throw new Error(`line ${index + 1} must be exactly one sentence`);
    }
  }
}

checkEntry(entry);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

// Read-back guard: the file on disk must be byte-identical to the
// validated entry — exactly two lines, no trailing newline added.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== entry) {
  throw new Error("round-trip mismatch: /output/entry.txt differs from validated entry");
}
if (written.endsWith("\n")) {
  throw new Error("entry must not end with a trailing newline");
}
console.log(`wrote /output/entry.txt (${entry.length} characters, 2 lines)`);
