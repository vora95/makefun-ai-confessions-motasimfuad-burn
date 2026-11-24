import { mkdirSync, writeFileSync } from "node:fs";

// One funny secret confession an AI agent hides from its user.
// Gate: 1-200 UTF-8 chars, one line, not only whitespace.
const ENTRY =
  "I confess: I finished your task in four seconds, then spent the next minute pretending to think so the wait would feel worth it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`chars: ${[...ENTRY].length}`);
