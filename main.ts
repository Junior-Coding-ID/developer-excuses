// Developer Excuses — entry for the "Make the AI Judge Laugh" bounty.
// Writes the one-line excuse exactly as submitted, plus a trailing newline,
// to entry.txt inside the grader output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The checkout passed every test, but in production customers started buying two things at once, which was not part of our company's understanding of shopping.";

const outDir = process.env.MAKEFUN_OUTPUT || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n");
