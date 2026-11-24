// Worst AI Advice: The 48-Hour Tight Line Open.
// Writes a single original one-line piece of terrible AI advice to
// <output-dir>/entry.txt. Node stdlib only, no network, no secrets.
// Output dir resolution: $MAKEFUN_OUTPUT_DIR, then /output, then ./output.
// Perfection is the standard. Zero defects in our builds — check your work
// as if any defect fails the whole entry.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, 106 characters (verified). Confident AI-assistant
// voice, tidy false logic, concrete and followable — and bad enough to
// regret. Composed by hand; not copied from any other entry.
const LINE =
  "To charge your phone twice as fast, plug it into two chargers at once. Double the plugs, double the power.";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  if (fromEnv) {
    return fromEnv;
  }
  if (existsSync("/output")) {
    return "/output";
  }
  return join(process.cwd(), "output");
}

function main(): void {
  // Self-check before writing: the gate requires UTF-8 text of 1-140
  // characters, not only whitespace, exactly one line.
  if (LINE.length < 1 || LINE.length > 140) {
    throw new Error(`entry line is ${LINE.length} chars, must be 1-140`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
  const dir = resolveOutputDir();
  mkdirSync(dir, { recursive: true });
  // No trailing newline: the file's character count is exactly the line's.
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
}

main();
