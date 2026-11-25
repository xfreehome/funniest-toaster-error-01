// Entry for the make.fun bounty "The Funniest Toaster Error Message".
// Writes a single error line (at most 120 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "ERROR E-07: The bread has requested a lawyer.";

// Gate check (mirrors the competition gate): 1-120 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${ENTRY.length} characters; must be 1-120.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
